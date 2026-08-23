import React from 'react';
import { ArrowRight, Play, Pause } from 'lucide-react';
import HeroImage from '../assets/images/Hero.jpeg'
import HeroImage2 from '../assets/images/Hero2.jpeg'
import HeroImage3 from '../assets/images/Hero3.jpeg'
import LogoBlack from '../assets/images/Logo- black.jpeg'



export default function Hero({ onPlayLatest, isPlaying }) {
  const images = [HeroImage, HeroImage2, HeroImage3];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="pt-32 pb-0 md:pb-20 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center relative">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#e06a3b]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Hero Text */}
        <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e06a3b]/10 border border-[#e06a3b]/30 text-[#f2a93b] text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#f2a93b] animate-pulse" />
            122 BPM • AFRO & PROGRESSIVE HOUSE
          </div>

          {/* <h1 className="font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95]">
            CECOT <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e06a3b] via-[#f2a93b] to-white">
              GRID
            </span>
          </h1> */}
          <img src={LogoBlack} alt="" />

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            CECOT is an original artist identity representing Creative Electronic Culture • Organic Transmission.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#booking"
              className="px-8 py-4 rounded-xl bg-[#e06a3b] text-white font-bold text-sm tracking-wider uppercase hover:bg-[#e06a3b]/90 transition-all shadow-lg shadow-[#e06a3b]/20 flex items-center gap-3"
            >
              <span>Book Cecot Grid</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onPlayLatest}
              className="px-8 py-4 rounded-xl bg-[#10131a] border border-white/10 hover:border-[#f2a93b]/50 text-white font-bold text-sm tracking-wider uppercase transition-all flex items-center gap-3"
            >
              {isPlaying ? <Pause className="w-4 h-4 text-[#f2a93b]" /> : <Play className="w-4 h-4 text-[#f2a93b]" />}
              <span>Listen to Latest Set</span>
            </button>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="lg:col-span-5 relative order-1 lg:order-2">
          <div className="relative mx-auto md:max-w-md rounded-2xl overflow-hidden border border-[#e06a3b]/30 bg-[#10131a] shadow-2xl group">
            <div className="relative w-full h-64 md:h-100 overflow-hidden">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="hero"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-[opacity,transform,filter] duration-[3200ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-[opacity,transform,filter] ${i === index ? 'opacity-100 scale-105 blur-0' : 'opacity-0 scale-100 blur-[2px]'}`}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-[#07080a] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-2 md:bottom-6 left-2 md:left-6 right-6 p-4 rounded-xl bg-[#07080a]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-[#f2a93b] font-bold md:tracking-wider uppercase">CURRENT TOUR STATUS</p>
                <p className="text-xs md:text-sm font-semibold text-white">Cinnamon Dhonveli Resort / Maldives</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}