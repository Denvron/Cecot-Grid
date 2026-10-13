import React from 'react';
import { Helmet } from 'react-helmet-async';
import Image from '../assets/images/Logo New.jpeg'

export default function SEO({
  title = "CECOT GRID | Official DJ & Producer Portfolio",
  description = "Official portfolio of Cecot Grid. Sculpting immersive percussive journeys where progressive electronic precision meets organic Afro House warmth.",
  keywords = "Cecot Grid, Cecot Grid DJ, Afro House DJ, Progressive House Producer, Organic House, Ibiza DJ, Melodic House, Electronic Press Kit, DJ Booking",
  canonicalUrl = "https://cecotgrid.com",
  ogImage = Image
}) {

  // JSON-LD Structured Data for Google MusicGroup / PerformingGroup Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Cecot Grid",
    "url": canonicalUrl,
    "image": ogImage,
    "genre": ["Afro House", "Progressive House", "Organic House", "Melodic House"],
    "description": description,
    "sameAs": [
      "https://open.spotify.com",
      "https://soundcloud.com",
      "https://instagram.com",
      "https://youtube.com"
    ]
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Cecot Grid Management" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / Instagram / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data / Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}