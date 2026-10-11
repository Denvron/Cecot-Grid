import React from 'react';
import { FileText, Music, AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function TermsOfService() {
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
            <FileText className="w-3.5 h-3.5" /> LEGAL AGREEMENT
          </div>
          <h1 className="font-bold text-4xl md:text-5xl text-white">TERMS OF SERVICE</h1>
          <p className="text-slate-400 text-sm mt-2">Last Updated: October 2026</p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm leading-relaxed">

          <section className="bg-[#10131a] p-6 rounded-2xl border border-white/5 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#f2a93b]" /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using <strong>CecotGrid.com</strong>, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please discontinue use of the website and media assets.
            </p>
          </section>

          <section className="bg-[#10131a] p-6 rounded-2xl border border-white/5 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Music className="w-5 h-5 text-[#e06a3b]" /> 2. Intellectual Property & Music Copyright
            </h2>
            <p>
              All audio recordings, original tracks, DJ mixes, logos, high-resolution photography, and visual design systems featured on this website are the exclusive intellectual property of <strong>Cecot Grid</strong> and respective record labels (e.g., Keinemusik, Anjunadeep, Afterlife concept releases).
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
              <li><strong>Streaming:</strong> Audio streams provided on this website are for personal, non-commercial preview listening only.</li>
              <li><strong>Prohibited Actions:</strong> You may not rip, re-upload, re-distribute, sample, or commercially exploit any audio files without explicit written licensing permission from Cecot Grid Management.</li>
            </ul>
          </section>

          <section className="bg-[#10131a] p-6 rounded-2xl border border-white/5 space-y-3">
            <h2 className="text-lg font-bold text-white">3. Press Kit (EPK) & Media Usage</h2>
            <p>
              Event promoters, press outlets, and venue managers are granted a limited license to download official logos, high-res press photos, and technical riders solely for the purpose of promoting confirmed Cecot Grid performance dates. Modifying artist logos or using branding out of context is strictly prohibited.
            </p>
          </section>

          <section className="bg-[#10131a] p-6 rounded-2xl border border-white/5 space-y-3">
            <h2 className="text-lg font-bold text-white">4. Booking Inquiries & Confirmations</h2>
            <p>
              Submitting an event inquiry through the booking form does not constitute a binding performance contract or confirm an event date. Performance engagements are only finalized upon the execution of an official booking agreement and payment of designated deposits as outlined in the technical rider.
            </p>
          </section>

          <section className="bg-[#10131a] p-6 rounded-2xl border border-white/5 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-400" /> 5. Disclaimer & Limitation of Liability
            </h2>
            <p>
              This website and its media streams are provided on an "as is" basis without warranties of any kind. Cecot Grid is not liable for temporary service interruptions, third-party audio hosting outages, or ticket availability discrepancies on external venue sites.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}