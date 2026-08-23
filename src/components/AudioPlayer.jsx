import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer({ currentTrack, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState('0:00');
  const [isMuted, setIsMuted] = useState(false);

  // Sync React state with HTML5 audio play/pause
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.error("Playback prevented by browser policy:", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack, setIsPlaying]);

  // Handle track changing
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;
    audioRef.current.src = currentTrack.audioUrl;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrack]);

  // Update progress bar as audio plays
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration || 1;
    setProgress((current / total) * 100);

    const mins = Math.floor(current / 60);
    const secs = Math.floor(current % 60);
    setCurrentTimeStr(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
  };

  // Scrubbing on progress bar click
  const handleScrub = (e) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newPercentage = clickX / width;
    audioRef.current.currentTime = newPercentage * (audioRef.current.duration || 0);
  };

  // Toggle Mute
  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#07080a]/95 backdrop-blur-xl border-t border-white/10 p-4 z-50">
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Scrubbable Progress Bar */}
      <div 
        onClick={handleScrub} 
        className="absolute top-0 left-0 right-0 h-1 bg-white/10 cursor-pointer group hover:h-2 transition-all"
      >
        <div 
          className="h-full bg-gradient-to-r from-[#e06a3b] to-[#f2a93b] relative" 
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 group-hover:opacity-100 shadow-md" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 pt-1">
        {/* Track Metadata */}
        <div className="flex items-center gap-3 w-1/3">
          <img src={currentTrack.cover} alt={currentTrack.title} className="w-12 h-12 rounded-lg object-cover" />
          <div className="hidden sm:block truncate">
            <p className="font-bold text-sm text-white truncate">{currentTrack.title}</p>
            <p className="text-xs text-[#f2a93b]">{currentTrack.bpm} BPM • {currentTrack.label}</p>
          </div>
        </div>

        {/* Playback Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-[#f2a93b] text-[#07080a] flex items-center justify-center font-bold hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current translate-x-0.5" />}
          </button>
        </div>

        {/* Mute Controls & Time Display */}
        <div className="flex items-center justify-end gap-4 w-1/3 text-xs text-slate-400">
          <button onClick={toggleMute} className="hover:text-white transition-colors">
            {isMuted ? <VolumeX className="w-5 h-5 text-rose-400" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <div className="font-mono text-xs">
            <span className="text-white">{currentTimeStr}</span> / <span>{currentTrack.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}