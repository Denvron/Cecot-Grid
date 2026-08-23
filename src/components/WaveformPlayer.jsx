import React, { useState, useEffect, useRef } from 'react';
import { extractAudioPeaks, formatTime } from '../utils/audioPeaks';

export default function WaveformPlayer({
  title = "Deep Sahara (Original Mix)",
  genre = "Afro House",
  bpm = 122,
  audioKey = "8A",
  audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [peaks, setPeaks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hoverPosition, setHoverPosition] = useState(null);

  const audioRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    extractAudioPeaks(audioUrl, 65)
      .then((extractedPeaks) => {
        if (isMounted) {
          setPeaks(extractedPeaks);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error parsing audio waveform:", err);
        if (isMounted) setIsLoading(false);
      });

    return () => { isMounted = false; };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleScrub = (e) => {
    if (!timelineRef.current || !audioRef.current || !duration) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleMouseMove = (e) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const hoverX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, hoverX / rect.width));
    setHoverPosition(percentage * 100);
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full max-w-2xl bg-[#14161a] border border-white/10 rounded-xl p-5 shadow-2xl select-none font-sans text-neutral-100">
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <div className="flex items-center gap-4 mb-3">
        <button
          onClick={togglePlay}
          className="w-11 h-11 rounded-full bg-[#e06a3b] hover:bg-[#f2a93b] hover:scale-105 active:scale-95 transition-all flex items-center justify-center shrink-0 cursor-pointer text-slate-950 shadow-lg shadow-[#e06a3b]/20"
        >
          {isPlaying ? (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold truncate text-white">{title}</h4>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mt-0.5">
            <span className="text-[#f2a93b]">{genre}</span>
            <span>•</span>
            <span>{bpm} BPM</span>
            <span>•</span>
            <span>Key {audioKey}</span>
          </div>
        </div>

        <div className="font-mono text-xs text-neutral-400 shrink-0">
          <span className="text-white">{formatTime(currentTime)}</span> / {formatTime(duration)}
        </div>
      </div>

      <div
        ref={timelineRef}
        onClick={handleScrub}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverPosition(null)}
        className="relative h-10 w-full cursor-pointer flex items-center group"
      >
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-between gap-1 animate-pulse">
            {Array.from({ length: 65 }).map((_, i) => (
              <div key={i} className="flex-1 bg-white/10 rounded-full h-4" />
            ))}
          </div>
        ) : (
          <>
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 32" preserveAspectRatio="none">
              {peaks.map((peak, index) => {
                const totalBars = peaks.length;
                const barWidth = (100 / totalBars) * 0.6;
                const gapWidth = (100 / totalBars) * 0.4;
                const barHeight = Math.max(peak, 0.08) * 32;
                const x = index * (barWidth + gapWidth);
                const y = (32 - barHeight) / 2;

                return (
                  <rect
                    key={index}
                    x={`${x}%`}
                    y={y}
                    width={`${barWidth}%`}
                    height={barHeight}
                    rx="0.5"
                    className="fill-white/20 transition-colors duration-200 group-hover:fill-white/30"
                  />
                );
              })}
            </svg>

            <div
              className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none border-r-2 border-[#f2a93b]"
              style={{ width: `${progressPercentage}%` }}
            >
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 32" preserveAspectRatio="none">
                {peaks.map((peak, index) => {
                  const totalBars = peaks.length;
                  const barWidth = (100 / totalBars) * 0.6;
                  const gapWidth = (100 / totalBars) * 0.4;
                  const barHeight = Math.max(peak, 0.08) * 32;
                  const x = index * (barWidth + gapWidth);
                  const y = (32 - barHeight) / 2;

                  return (
                    <rect
                      key={index}
                      x={`${x}%`}
                      y={y}
                      width={`${barWidth}%`}
                      height={barHeight}
                      rx="0.5"
                      className={`fill-[#f2a93b] ${isPlaying ? 'animate-pulse' : ''}`}
                    />
                  );
                })}
              </svg>
            </div>

            {hoverPosition !== null && (
              <div
                className="absolute top-0 bottom-0 w-[1px] bg-white/70 pointer-events-none"
                style={{ left: `${hoverPosition}%` }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}