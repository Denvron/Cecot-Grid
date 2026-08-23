// Utility to extract peak amplitudes for dynamic SVG rendering
export const extractAudioPeaks = async (audioUrl, samplesCount = 65) => {
  const response = await fetch(audioUrl);
  const arrayBuffer = await response.arrayBuffer();

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

  const rawData = audioBuffer.getChannelData(0); // Left channel
  const totalSamples = rawData.length;
  const blockSize = Math.floor(totalSamples / samplesCount);
  const peaks = [];

  for (let i = 0; i < samplesCount; i++) {
    const startSample = i * blockSize;
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum += Math.abs(rawData[startSample + j]);
    }
    peaks.push(sum / blockSize);
  }

  const maxPeak = Math.max(...peaks) || 1;
  const normalized = peaks.map((p) => p / maxPeak);

  await audioCtx.close();
  return normalized;
};

export const formatTime = (timeInSeconds) => {
  if (isNaN(timeInSeconds)) return '0:00';
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};