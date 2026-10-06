import React from 'react';
import { TN_DISTRICTS } from './marketData';

export default function MarketFilters({ selectedDistrict, setSelectedDistrict }) {
  return (
    <div className="bg-white rounded-[28px] p-5 lg:p-6 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-4 items-center justify-between z-20 relative">
      
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        
        {/* 1. STATE DROPDOWN (LOCKED TO TAMIL NADU) */}
        <div className="relative w-full md:w-[220px]">
          <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-1.5 ml-1">
            State
          </label>
          <div className="relative">
            <select 
              disabled
              value="Tamil Nadu"
              className="w-full appearance-none bg-[#f8faf9] border border-gray-200 text-gray-900 font-extrabold text-sm rounded-2xl px-4 py-3.5 outline-none cursor-not-allowed opacity-90 shadow-inner"
            >
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
            {/* Lock Icon */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-bold">
              🔒 Fixed
            </div>
          </div>
        </div>

        {/* 2. DISTRICT DROPDOWN (38 DISTRICTS) */}
        <div className="relative w-full md:w-[260px]">
          <label className="block text-[11px] font-extrabold text-[#0f9d44] uppercase tracking-wider mb-1.5 ml-1">
            District ({TN_DISTRICTS.length} Available)
          </label>
          <div className="relative group">
            <select 
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full appearance-none bg-[#e8f5e9] border border-[#a5d6a7] text-gray-900 font-extrabold text-sm rounded-2xl px-4 py-3.5 outline-none cursor-pointer hover:border-[#0f9d44] transition-all shadow-sm focus:ring-2 focus:ring-[#0f9d44]/20"
            >
              {TN_DISTRICTS.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {/* Down Arrow */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0f9d44]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* SEARCH BAR FOR CROPS */}
      <div className="w-full md:w-auto relative">
        <input 
          type="text" 
          placeholder="Search crops in TN..." 
          className="w-full md:w-[280px] bg-gray-50 border border-gray-200 text-gray-900 font-semibold text-sm rounded-2xl px-11 py-3.5 outline-none focus:border-[#0f9d44] focus:bg-white transition-all shadow-inner"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
      </div>

    </div>
  );
}