// export async function onRequest(context) {
//   // 1. Get the request, environment variables, and URL parameters
//   const { request, env, params } = context;

//   // 2. Combine the URL segments into a single file path. 
//   // If the URL is /media/tracks/song.mp3, params.all is ["tracks", "song.mp3"]
//   const key = params.all.join('/');

//   // 3. If no file is requested, return a 404
//   if (!key) {
//     return new Response('File not found', { status: 404 });
//   }

//   // 4. Fetch the file from your R2 bucket using the binding name from wrangler.toml
//   const object = await env.MUSIC_BUCKET.get(key);

//   // 5. If the file doesn't exist in R2, return a 404
//   if (object === null) {
//     return new Response('Object Not Found', { status: 404 });
//   }

//   // 6. Prepare the headers for the browser
//   const headers = new Headers();
//   object.writeHttpMetadata(headers);
//   headers.set('etag', object.httpEtag);
  
//   // THIS IS CRUCIAL FOR AUDIO: It allows the browser to seek/scrub through the track
//   headers.set('Accept-Ranges', 'bytes');

//   // 7. Return the audio file to the user
//   return new Response(object.body, {
//     headers,
//   });
// }

export async function onRequest(context) {
  const { request, env, params } = context;
  const pathArray = params.all;
  const key = Array.isArray(pathArray) ? pathArray.join('/') : pathArray;

  if (!key) {
    return new Response('Not found', { status: 404 });
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method not allowed', {
      status: 405,
      headers: { Allow: 'GET, HEAD' },
    });
  }

  try {
    const metadata = await env.MUSIC_BUCKET.head(key);

    if (!metadata) {
      return new Response('Media file not found', { status: 404 });
    }

    const headers = new Headers();
    metadata.writeHttpMetadata(headers);
    headers.set('etag', metadata.httpEtag);
    headers.set('Accept-Ranges', 'bytes');
    headers.set('Content-Length', String(metadata.size));

    if (key.toLowerCase().endsWith('.mp3')) {
      headers.set('Content-Type', 'audio/mp3');
    }

    let status = 200;
    let range;
    const rangeHeader = request.headers.get('Range');
    const rangeMatch = rangeHeader?.match(/^bytes=(\d*)-(\d*)$/);

    if (rangeMatch) {
      const [, startText, endText] = rangeMatch;
      let offset;
      let length;

      if (!startText) {
        const suffixLength = Number(endText);
        if (!suffixLength) {
          return new Response(null, {
            status: 416,
            headers: { 'Content-Range': `bytes */${metadata.size}` },
          });
        }
        length = Math.min(suffixLength, metadata.size);
        offset = metadata.size - length;
      } else {
        offset = Number(startText);
        const end = endText ? Number(endText) : metadata.size - 1;
        if (offset >= metadata.size || end < offset) {
          return new Response(null, {
            status: 416,
            headers: { 'Content-Range': `bytes */${metadata.size}` },
          });
        }
        length = Math.min(end, metadata.size - 1) - offset + 1;
      }

      range = { offset, length };
      status = 206;
      headers.set('Content-Range', `bytes ${offset}-${offset + length - 1}/${metadata.size}`);
      headers.set('Content-Length', String(length));
    }

    const object = request.method === 'HEAD'
      ? null
      : await env.MUSIC_BUCKET.get(key, range ? { range } : undefined);

    if (request.method === 'GET' && !object) {
      return new Response('Media file not found', { status: 404 });
    }

    return new Response(object?.body ?? null, {
      status,
      headers,
    });
  } catch (err) {
    console.error('Unable to serve media file:', err);
    return new Response('Unable to serve media file', { status: 500 });
  }
}