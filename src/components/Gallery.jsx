import React, { useState } from 'react';
import { Maximize2, X, MapPin } from 'lucide-react';

export default function Gallery({ images }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="md:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t scroll-m-20 md:scroll-m-0 border-white/5">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[#e06a3b] text-xs font-bold tracking-widest uppercase">VISUAL ARCHIVE</span>
          <h2 className="font-bold text-4xl md:text-5xl text-white mt-1">GALLERY & ATMOSPHERE</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'live', label: 'Live Stages' },
            { id: 'studio', label: 'Studio & Gear' },
            { id: 'backstage', label: 'Backstage' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#f2a93b] text-[#07080a]'
                  : 'bg-[#10131a] border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Grid Layout */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className="group relative rounded-2xl overflow-hidden bg-[#10131a] border border-white/5 hover:border-[#e06a3b]/50 transition-all cursor-pointer h-72"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            {/* Overlay Details */}
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <span className="text-xs text-[#f2a93b] font-bold tracking-wider uppercase flex items-center gap-1 mb-1">
                <MapPin className="w-3 h-3" /> {img.location}
              </span>
              <h3 className="font-bold text-lg text-white truncate">{img.title}</h3>
            </div>

            <div className="absolute top-4 right-4 p-2 rounded-full bg-[#07080a]/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-[#f2a93b]" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-[#07080a]/95 backdrop-blur-xl flex items-center justify-center p-6">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full space-y-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 max-h-[75vh] bg-black flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between text-white">
              <div>
                <h3 className="font-bold text-xl">{selectedImage.title}</h3>
                <p className="text-xs text-[#f2a93b] uppercase tracking-wider">{selectedImage.location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}