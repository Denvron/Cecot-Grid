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
  
  // Extract the file path from the wildcard route
  const pathArray = params.all;
  const key = Array.isArray(pathArray) ? pathArray.join('/') : pathArray;

  if (!key) {
    return new Response("Not found", { status: 404 });
  }

  try {
    // Fetch the file from R2 using the binding name defined in wrangler.toml
    const object = await env.MUSIC_BUCKET.get(key);

    if (!object) {
      return new Response("Video not found", { status: 404 });
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);
    
    // Ensure proper video content type for MP4 streaming
    if (key.endsWith('.mp4')) {
      headers.set("Content-Type", "video/mp4");
    }

    return new Response(object.body, {
      headers,
    });
  } catch (err) {
    return new Response(`Error: ${err.message}`, { status: 500 });
  }
}