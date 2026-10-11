import React from 'react';
import { Shield, Lock, Eye, Mail, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#07080a] text-slate-300 font-sans selection:bg-[#e06a3b] selection:text-white pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Link */}
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold text-[#f2a93b] hover:text-[#e06a3b] uppercase tracking-wider mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Main Site
        </a>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e06a3b]/10 border border-[#e06a3b]/30 text-[#f2a93b] text-xs font-bold tracking-widest uppercase mb-4">
            <Shield className="w-3.5 h-3.5" /> LEGAL & DATA PROTECTION
          </div>
          <h1 className="font-bold text-4xl md:text-5xl text-white">PRIVACY POLICY</h1>
          <p className="text-slate-400 text-sm mt-2">Last Updated: October 2026</p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm leading-relaxed">
          
          <section className="bg-[#10131a] p-6 rounded-2xl border border-white/5 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#f2a93b]" /> 1. Information We Collect
            </h2>
            <p>
              When you visit or interact with <strong>CecotGrid.com</strong>, we collect limited personal data required to operate our booking services and improve user experience:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
              <li><strong>Booking Inquiry Details:</strong> Name, email address, agency name, event dates, venue location, and event scope submitted via our booking form.</li>
              <li><strong>Usage Analytics:</strong> Anonymized browser type, IP address, device telemetry, and page navigation metrics collected via standard web cookies.</li>
              <li><strong>Audio Interaction Data:</strong> Non-personally identifiable metrics regarding track plays, mix streaming, and audio player interactions.</li>
            </ul>
          </section>

          <section className="bg-[#10131a] p-6 rounded-2xl border border-white/5 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#e06a3b]" /> 2. How Your Information Is Used
            </h2>
            <p>Your data is strictly utilized for professional artist management and booking communication:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
              <li>To evaluate and respond to performance bookings, festival inquiries, and press requests.</li>
              <li>To deliver technical riders, press kit assets (EPK), and performance contracts.</li>
              <li>To analyze site performance, ensure secure web connections, and prevent fraudulent inquiries.</li>
            </ul>
            <p className="text-xs text-slate-400 italic">
              * Note: We never sell, rent, or trade promoter or fan personal information to third-party advertisers.
            </p>
          </section>

          <section className="bg-[#10131a] p-6 rounded-2xl border border-white/5 space-y-3">
            <h2 className="text-lg font-bold text-white">3. Third-Party Embeds & Audio Services</h2>
            <p>
              Our portfolio website integrates external audio player widgets and media links (e.g., Spotify, SoundCloud, Mixcloud, Apple Music). Interacting with embedded streaming content may allow these third-party platforms to collect your IP address or cookies in accordance with their respective privacy policies.
            </p>
          </section>

          <section className="bg-[#10131a] p-6 rounded-2xl border border-white/5 space-y-3">
            <h2 className="text-lg font-bold text-white">4. Cookies & Tracking Technologies</h2>
            <p>
              We use essential session cookies to remember audio volume preferences and filter selections across site sections. You can adjust your browser settings to disable cookies, though some interactive elements (such as audio scrubbing memory) may function with reduced performance.
            </p>
          </section>

          <section className="bg-[#10131a] p-6 rounded-2xl border border-white/5 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#f2a93b]" /> 5. Data Privacy Enquiries
            </h2>
            <p>
              If you wish to request the deletion or modification of your booking inquiry records, please contact Cecot Grid Management directly at:
            </p>
            <p className="font-mono text-[#f2a93b] text-xs bg-black/40 px-3 py-2 rounded-lg inline-block">
              cecotgrid@gmail.com
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}