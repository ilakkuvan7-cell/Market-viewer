import React from 'react';

export default function LocationWidget() {
  return (
    <div 
      className="flex items-center gap-3 bg-[#fdfdfd] border border-white px-4 py-3 rounded-2xl shadow-[3px_5px_15px_rgba(0,0,0,0.04),-3px_-3px_10px_rgba(255,255,255,0.8)] cursor-pointer hover:scale-[1.02] transition-transform duration-300"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} // <-- FONT APPLIED HERE
    >
      
      {/* 3D Soft Map Pin Icon */}
      <div className="text-[#16a34a] drop-shadow-sm">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="text-[13.5px] font-bold text-gray-900 flex items-center gap-1.5 leading-tight">
          Coimbatore
          <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
        <span className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mt-0.5">
          Tamil Nadu
        </span>
      </div>
      
    </div>
  );
}