import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300">
      
      {/* ?v=1 add pannirukken to force browser to load new image */}
      <img 
        src="/images/logo.png?v=1" 
        alt="Market IQ Logo" 
        className="w-12 h-12 object-contain drop-shadow-lg" 
      />

      {/* EXACT TEXT STYLE */}
      <span 
        className="text-[1.75rem] font-black tracking-[-0.03em] drop-shadow-sm flex items-center"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <span className="text-white">Market</span>
        <span className="text-[#51e590] ml-1.5">IQ</span>
      </span>
      
    </div>
  );
}