import React, { useState, useEffect } from 'react';

export default function DashboardHeader({ selectedDistrict, setSelectedDistrict }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Entha district select pannalum common-a irukka vendiya Dummy Data
  const [temperature, setTemperature] = useState("32");
  const [weatherCondition, setWeatherCondition] = useState("Clear");

  const districts = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", 
    "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", 
    "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", 
    "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", 
    "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", 
    "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", 
    "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", 
    "Vellore", "Villupuram", "Virudhunagar"
  ];

  // API Call-a eduthuttu common static details vachiyachu
  useEffect(() => {
    setTemperature("32");
    setWeatherCondition("Clear");
  }, [selectedDistrict]);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between bg-[#fcfcfc] rounded-[1.8rem] p-4 md:p-5 mb-10 shadow-[6px_8px_20px_rgba(0,0,0,0.03),-4px_-4px_15px_rgba(255,255,255,0.7)] border border-white gap-6">
      
      {/* LEFT: TITLE */}
      <div className="flex items-center gap-4 md:gap-5">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#fcfcfc] rounded-2xl flex items-center justify-center shadow-[4px_4px_12px_rgba(0,0,0,0.05),-4px_-4px_12px_rgba(255,255,255,1)] border border-white shrink-0">
          <svg className="w-7 h-7 md:w-8 md:h-8 text-[#16a34a] drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11V3h8v8h-2V6.41l-9.3 9.29-4.7-4.7L2 17.59l1.41 1.41L8 13.41l4.7 4.7L24 6.41V11h-8z"/>
            <path d="M4 22h3v-7H4v7zm6 0h3v-11h-3v11zm6 0h3v-15h-3v15z"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl md:text-[1.65rem] font-extrabold text-gray-900 tracking-tight leading-tight">
            Market Prices <span className="text-[#16a34a]">Analysis</span>
          </h2>
          <p className="text-[13px] md:text-sm text-gray-500 font-medium mt-1 md:mt-1.5">
            Real-time local market rates
          </p>
        </div>
      </div>

      {/* RIGHT: WIDGETS */}
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        
        {/* 1. DISTRICT DROPDOWN */}
        <div className="relative z-50">
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 bg-[#fdfdfd] border border-white px-4 py-3 rounded-2xl shadow-[3px_5px_15px_rgba(0,0,0,0.04),-3px_-3px_10px_rgba(255,255,255,0.8)] cursor-pointer hover:scale-[1.02] transition-transform duration-300 select-none"
          >
            <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            
            <div className="flex flex-col pr-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[14px] font-extrabold text-gray-900 leading-tight">
                  {selectedDistrict || "Coimbatore"}
                </span>
                <svg className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-0.5">
                Tamil Nadu
              </span>
            </div>
          </div>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-2 animate-fade-in origin-top z-50">
              <div className="px-3 py-2 text-[11px] font-extrabold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1">
                Select District
              </div>
              <div className="max-h-60 overflow-y-auto overscroll-contain pr-1 custom-scrollbar space-y-1">
                {districts.map((district) => {
                  const isSelected = (selectedDistrict || "Coimbatore") === district;
                  return (
                    <div 
                      key={district}
                      onClick={() => {
                        setSelectedDistrict(district); 
                        setIsDropdownOpen(false); 
                      }}
                      className={`px-3.5 py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-200 flex items-center justify-between
                        ${isSelected 
                          ? 'bg-[#10b981] text-white shadow-md shadow-green-500/20 translate-x-1' 
                          : 'text-gray-700 hover:bg-[#f0fdf4] hover:text-[#059669]'
                        }`}
                    >
                      <span>{district}</span>
                      {isSelected && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 2. AI FORECAST WIDGET */}
        <div className="flex items-center gap-3 bg-[#fdfdfd] border border-white px-4 py-3 rounded-2xl shadow-[3px_5px_15px_rgba(0,0,0,0.04),-3px_-3px_10px_rgba(255,255,255,0.8)] cursor-pointer hover:scale-[1.02] transition-transform duration-300">
          <div className="text-[22px] md:text-[26px] drop-shadow-sm">📈</div>
          <div className="flex flex-col">
            <span className="text-[13px] md:text-[14px] font-extrabold text-gray-900 leading-tight">
              AI <span className="font-semibold text-gray-600">Price Forecasting</span>
            </span>
            <span className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mt-0.5">
              View Predictions
            </span>
          </div>
        </div>

        {/* 3. WEATHER WIDGET */}
        <div 
          className="flex items-center gap-3.5 bg-[#fdfdfd] border border-white px-4 py-3 rounded-2xl shadow-[3px_5px_15px_rgba(0,0,0,0.04),-3px_-3px_10px_rgba(255,255,255,0.8)] cursor-pointer hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="text-[26px] drop-shadow-sm">☀️</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-[14px] font-extrabold text-gray-900 tracking-tight leading-tight">
                {temperature}°C <span className="text-xs font-bold text-gray-400">({selectedDistrict || "Coimbatore"})</span>
              </span>
            </div>
            <span className="text-[10px] text-[#10b981] font-black tracking-wider uppercase mt-0.5">
              {weatherCondition} • Live
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}