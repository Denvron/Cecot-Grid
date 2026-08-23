// import React from 'react';
import { Grid, Menu, X } from 'lucide-react';
import LogoBlack2 from '../assets/images/Logo- black2.jpeg'

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#07080a]/80 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          {/* <div className="w-9 h-9 rounded-lg bg-[#e06a3b]/20 border border-[#e06a3b] flex items-center justify-center group-hover:scale-105 transition-transform">
            <Grid className="w-5 h-5 text-[#f2a93b]" />
          </div> */}
          {/* <span className="font-bold text-xl tracking-wider text-white">CECOT GRID</span> */}
          <img src={LogoBlack2} alt="" className='h-16 w-32' />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-[#f2a93b] transition-colors">BIO & SOUND</a>
          <a href="#sounds" className="hover:text-[#f2a93b] transition-colors">DISCOGRAPHY</a>
          {/* <a href="#tour" className="hover:text-[#f2a93b] transition-colors">TOUR DATES</a> */}
          <a href="#gallery" className="hover:text-[#f2a93b] transition-colors">GALLERY</a>
          <a href="#epk" className="hover:text-[#f2a93b] transition-colors">EPK</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#booking"
            className="px-5 py-2.5 rounded-full bg-linear-to-r from-[#e06a3b] to-[#f2a93b] text-[#07080a] font-bold text-xs tracking-wider uppercase hover:opacity-95 transition-opacity shadow-lg shadow-[#e06a3b]/20"
          >
            Book Artist
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-[#07080a]/95 backdrop-blur-xl md:hidden p-8 flex flex-col gap-6 text-xl font-bold border-t border-white/10">
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>BIO & SOUND</a>
          <a href="#sounds" onClick={() => setMobileMenuOpen(false)}>DISCOGRAPHY</a>
          <a href="#tour" onClick={() => setMobileMenuOpen(false)}>TOUR DATES</a>
          <a href="#epk" onClick={() => setMobileMenuOpen(false)}>EPK</a>
          <a
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 text-center py-3 rounded-full bg-[#e06a3b] text-[#07080a] font-bold"
          >
            BOOK CECOT GRID
          </a>
        </div>
      )}
    </>
  );
}