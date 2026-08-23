import React from 'react';
import { MapPin } from 'lucide-react';

export default function TourDates({ tourDates }) {
  return (
    <section id="tour" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-12">
        <span className="text-[#e06a3b] text-xs font-bold tracking-widest uppercase">THE SEQUENCER</span>
        <h2 className="font-bold text-4xl md:text-5xl text-white mt-1">UPCOMING TOUR DATES</h2>
      </div>

      <div className="space-y-4">
        {tourDates.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-[#10131a] border border-white/5 hover:border-[#e06a3b]/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="md:w-1/4">
              <p className="font-bold text-xl text-[#f2a93b]">{item.date}</p>
              <p className="text-xs text-slate-400">{item.type}</p>
            </div>
            <div className="md:w-2/4">
              <h3 className="font-bold text-2xl text-white">{item.city}</h3>
              <p className="text-sm text-slate-300 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-4 h-4 text-[#e06a3b]" /> {item.venue}
              </p>
            </div>
            <div className="md:w-1/4 flex items-center justify-between md:justify-end gap-4 w-full">
              <span
                className={`text-xs px-3 py-1 rounded-full font-bold ${
                  item.status === 'Sold Out'
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}
              >
                {item.status}
              </span>
              <button className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-[#e06a3b] hover:text-white border border-white/10 font-bold text-xs uppercase tracking-wider transition-all">
                Tickets
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}