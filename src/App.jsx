import React, { useState } from 'react';
import SEO from './components/SEO';
import { TRACKS, TOUR_DATES } from './data/portfolioData';
import Header from './components/Header';
import Hero from './components/Hero';
import Discography from './components/Discography';
import TourDates from './components/TourDates';
import EpkBooking from './components/EpkBooking';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import { FaWhatsapp } from 'react-icons/fa';
import Gallery from './components/Gallery';
import { GALLERY_IMAGES } from './data/portfolioData';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentTrack, setCurrentTrack] = useState(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [currentView, setCurrentView] = useState('home'); // 'home' | 'privacy' | 'terms'

  if (currentView === 'privacy') {
    return (
      <div className="bg-[#07080a]">
        <PrivacyPolicy />
        <Footer 
          onOpenPrivacy={() => setCurrentView('privacy')} 
          onOpenTerms={() => setCurrentView('terms')} 
        />
      </div>
    );
  }

  if (currentView === 'terms') {
    return (
      <div className="bg-[#07080a]">
        <TermsOfService />
        <Footer 
          onOpenPrivacy={() => setCurrentView('privacy')} 
          onOpenTerms={() => setCurrentView('terms')} 
        />
      </div>
    );
  }

  const handleTrackToggle = (track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handlePlayLatest = () => {
    handleTrackToggle(TRACKS[0]);
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 font-sans selection:bg-[#e06a3b] selection:text-white relative">
      {/* Primary SEO tags */}
      <SEO />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero onPlayLatest={handlePlayLatest} isPlaying={isPlaying && currentTrack?.id === TRACKS[0].id} />
        <Discography
          tracks={TRACKS}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTrackToggle={handleTrackToggle}
        />
        {/* <TourDates tourDates={TOUR_DATES} /> */}
        <Gallery images={GALLERY_IMAGES} />
        <EpkBooking />
        <AudioPlayer currentTrack={currentTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </main>

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-24 right-6 z-50">
        {/* <a
          href="https://wa.me/94776462433"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-lg"
          data-testid="whatsapp-link"
          aria-label="Open WhatsApp chat"
        >
          <FaWhatsapp className="w-3 h-6" />
          {/* <span>WhatsApp</span> */}
        {/* </a> */} 
        <WhatsappButton />
      </div>

      <Footer 
        onOpenPrivacy={() => { setCurrentView('privacy'); window.scrollTo(0, 0); }} 
        onOpenTerms={() => { setCurrentView('terms'); window.scrollTo(0, 0); }}
      />

      
    </div>
  );
}