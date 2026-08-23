import React from 'react';
import { Play, Pause, Clock } from 'lucide-react';

export default function Discography({ 
  tracks, 
  activeCategory, 
  setActiveCategory, 
  currentTrack, 
  isPlaying, 
  onTrackToggle 
}) {
  const filteredTracks = activeCategory === 'all' 
    ? tracks 
    : tracks.filter((t) => t.category === activeCategory);

  return (
    <section id="sounds" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[#e06a3b] text-xs font-bold tracking-widest uppercase">AUDIO VAULT</span>
          <h2 className="font-bold text-4xl md:text-5xl text-white mt-1">DISCOGRAPHY & SETS</h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Releases' },
            { id: 'afro', label: 'Afro & Organic' },
            { id: 'progressive', label: 'Progressive' },
            { id: 'liveset', label: 'Live Mixes' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#f2a93b] text-[#07080a]'
                  : 'bg-[#10131a] border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Track Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.map((track) => {
          const isThisPlaying = currentTrack?.id === track.id && isPlaying;
          return (
            <div
              key={track.id}
              className={`p-5 rounded-2xl bg-[#10131a] border transition-all duration-300 hover:border-[#e06a3b]/50 flex flex-col justify-between ${
                currentTrack?.id === track.id ? 'border-[#f2a93b] ring-1 ring-[#f2a93b]/30' : 'border-white/5'
              }`}
            >
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 group">
                  <img src={track.cover} alt={track.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <button
                    onClick={() => onTrackToggle(track)}
                    className="absolute inset-0 bg-[#07080a]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-3xl text-[#f2a93b]"
                  >
                    {isThisPlaying ? <Pause className="w-12 h-12" /> : <Play className="w-12 h-12" />}
                  </button>
                </div>
                <div className="flex items-center justify-between text-xs text-[#f2a93b] mb-1">
                  <span>{track.bpm} BPM</span>
                  <span>{track.year}</span>
                </div>
                <h3 className="font-bold text-xl text-white mb-1 truncate">{track.title}</h3>
                <p className="text-xs text-slate-400 mb-4">{track.label}</p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-3 text-slate-400 text-xs">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {track.duration}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}