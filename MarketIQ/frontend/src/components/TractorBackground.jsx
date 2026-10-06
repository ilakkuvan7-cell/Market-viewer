import React from 'react';

export default function TractorBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      
      {/* FULL-COVER SINGLE IMAGE LAYER (NO SPLIT LINES OR CUTS) */}
      <img 
        src="/images/tractor.jpg" 
        alt="Market IQ Tractor Background" 
        className="w-full h-full object-cover object-[75%_center] md:object-[80%_center]"
      />

      {/* SMOOTH FADE GRADIENT FOR TEXT READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent pointer-events-none" />

    </div>
  );
}