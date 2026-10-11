import React, { useState } from 'react';
import { Download, Sliders, CheckCircle2, Phone, PinIcon, Mail } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

export default function EpkBooking() {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => setBookingSubmitted(false), 5000);
  };

  return (
    <section id="epk" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto scroll-m-20 border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Bio & Press Assets */}
        <div>
          <span className="text-[#e06a3b] text-xs font-bold tracking-widest uppercase">PRESS KIT</span>
          <h2 className="font-bold text-4xl text-white mt-1 mb-6">BIOGRAPHY & CONTACT</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            CECOT GRID is an internationally acclaimed DJ and music producer with over 25 years of professional experience behind the decks, delivering unforgettable musical journeys across clubs, luxury resorts, festivals and exclusive events.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8 text-sm">
            Oiginally from Colombo, Sri Lanka and currently based between the Maldives and Sri Lanka, CECOT GRID has built a reputation for creating sophisticated, high-energy performances that connect with audiances from around the world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <div className="p-4 rounded-xl bg-[#10131a] border border-white/5">
              <Download className="w-6 h-6 text-[#f2a93b] mb-2" />
              <h4 className="font-bold text-white text-sm">Press Kit (ZIP)</h4>
              <p className="text-xs text-slate-400">Hi-Res Photos & Logos</p>
            </div> */}
            <div className="p-4 rounded-xl bg-[#10131a] border border-white/5">
              {/* <h4 className="font-bold text-white text-sm mb-3">Contact</h4> */}
              <div className='flex gap-3 mb-2'>
                <Phone className="w-6 h-6 text-[#e06a3b] mb-2" />
                <p className="text-sm text-slate-400 mb-2">+94 776 462 433</p>
              </div>
              <div className='flex gap-3'>
                <BsWhatsapp className="w-6 h-6 text-[#e06a3b] mb-2" />
                <p className="text-sm text-slate-400 mb-2">+94 776 462 433</p>
              </div>
            </div>
            {/* <div className="p-4 rounded-xl bg-[#10131a] border border-white/5">
              <Sliders className="w-6 h-6 text-[#e06a3b] mb-2" />
              <h4 className="font-bold text-white text-sm">Tech Rider</h4>
              <p className="text-xs text-slate-400">CDJ-3000 & Mixer Setup</p>
            </div> */}
            <div className="p-4 rounded-xl bg-[#10131a] border border-white/5">
              <div className='flex gap 3'>
                <Mail className="w-6 h-6 text-[#e06a3b] mr-3 mb-2" />
                <p className="text-[16px] text-slate-400">cecotgrid@gmail.com</p>
              </div>
              <div className='flex gap 3'>
                <PinIcon className='w-6 h-6 text-[#e06a3b] mr-3'/>
                <p className="text-[16px] text-slate-400 ">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div id="booking" className="p-8 rounded-2xl bg-[#10131a] border border-white/10">
          <h3 className="font-bold text-2xl text-white mb-2">BOOKING INQUIRIES</h3>
          <p className="text-xs text-slate-400 mb-6">For festival bookings, venue dates, and private showcases.</p>

          {bookingSubmitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center">
              <CheckCircle2 className="w-10 h-10 mx-auto mb-2" />
              <p className="font-bold">Inquiry Sent Successfully!</p>
              <p className="text-xs opacity-80 mt-1">Cecot Grid's management team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">PROMOTER / NAME</label>
                <input
                  type="text"
                  required
                  placeholder="Your name or agency"
                  className="w-full px-4 py-3 rounded-xl bg-[#07080a] border border-white/10 text-white text-sm focus:border-[#e06a3b] focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">EVENT DATE</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#07080a] border border-white/10 text-white text-sm focus:border-[#e06a3b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">CITY / VENUE</label>
                  <input
                    type="text"
                    required
                    placeholder="Location"
                    className="w-full px-4 py-3 rounded-xl bg-[#07080a] border border-white/10 text-white text-sm focus:border-[#e06a3b] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">MESSAGE / DETAILS</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Event scope, set length, budget..."
                  className="w-full px-4 py-3 rounded-xl bg-[#07080a] border border-white/10 text-white text-sm focus:border-[#e06a3b] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#e06a3b] to-[#f2a93b] text-[#07080a] font-bold text-sm tracking-wider uppercase hover:opacity-95 transition-opacity"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}