import React, { useState } from 'react';
import { TN_DISTRICTS } from './marketData'; 

// --- DUMMY DATA FOR CROP CARDS ---
const cropData = [
  { id: 1, nameEn: "Tomato", nameTa: "(தக்காளி)", price: "₹25.00", unit: "kg", trend: "+ 2.5%", isUp: true, img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=200&q=80" },
  { id: 2, nameEn: "Small Onion", nameTa: "(சின்ன வெங்காயம்)", price: "₹45.00", unit: "kg", trend: "- 1.2%", isUp: false, img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=200&q=80" },
  { id: 3, nameEn: "Paddy - Samba", nameTa: "(நெல்)", price: "₹2,150.00", unit: "Quintal", trend: "0.0%", isUp: null, img: "https://images.unsplash.com/photo-1595054225492-8072719a6b1f?auto=format&fit=crop&w=200&q=80" },
  { id: 4, nameEn: "Coconut", nameTa: "(தேங்காய்)", price: "₹16.00", unit: "piece", trend: "+ 1.0%", isUp: true, img: "https://images.unsplash.com/photo-1630485906757-1941dfb34bd9?auto=format&fit=crop&w=200&q=80" },
  { id: 5, nameEn: "Turmeric", nameTa: "(மஞ்சள்)", price: "₹14,200.00", unit: "Quintal", trend: "+ 3.4%", isUp: true, img: "https://images.unsplash.com/photo-1615486171437-0803c7333fb1?auto=format&fit=crop&w=200&q=80" },
  { id: 6, nameEn: "Banana - Nendran", nameTa: "(வாழை)", price: "₹38.00", unit: "kg", trend: "- 2.0%", isUp: false, img: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=200&q=80" },
];

export default function ExploreMarket() {
  const [district, setDistrict] = useState("Nilgiris"); 

  return (
    <div className="min-h-screen bg-[#f4f7f6] font-['Plus_Jakarta_Sans'] pb-10">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');`}
      </style>

     {/* HERO SECTION WITH BACKGROUND */}
      <div className="relative w-full h-[450px] bg-[#031c10] overflow-hidden px-4 md:px-12 flex items-center">
        
        {/* RESPONSIVE AUTO-FIT IMAGE CONTAINER */}
        <div className="absolute inset-0 z-0 overflow-hidden flex justify-end items-center">
          <img 
            src="/farmer-bg.jpg" 
            alt="Farmer Background" 
            className="h-full w-auto md:w-full object-cover object-right opacity-80 md:opacity-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031c10] via-[#031c10]/80 md:via-[#031c10]/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex justify-between items-center">
          
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-bold mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> LIVE Real-time Market Updates
            </span>
            
            <h2 className="text-5xl font-black text-white leading-tight mb-3 transition-all duration-300 drop-shadow-lg">
              Live Market Prices <br/> from <span className="text-[#4ade80]">{district}</span>
            </h2>
            <p className="text-gray-200 text-lg mb-8 font-medium drop-shadow-md">Get real-time wholesale prices from <br/> major markets across Tamil Nadu</p>
            
            {/* Glassmorphism Filter Box */}
            <div className="bg-black/30 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 w-fit shadow-2xl">
               <div>
                 <p className="text-[11px] text-gray-300 font-bold mb-1 ml-1 uppercase tracking-wider">Select State</p>
                 <div className="relative">
                   <select disabled className="appearance-none bg-white rounded-xl pl-9 pr-8 py-2.5 w-44 shadow-inner text-sm font-bold text-gray-800 outline-none cursor-not-allowed">
                     <option>Tamil Nadu</option>
                   </select>
                   <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                 </div>
               </div>
               
               <div>
                 <p className="text-[11px] text-gray-300 font-bold mb-1 ml-1 uppercase tracking-wider">Select District</p>
                 <div className="relative group">
                   <select 
                     value={district}
                     onChange={(e) => setDistrict(e.target.value)}
                     className="appearance-none bg-white rounded-xl pl-9 pr-8 py-2.5 w-44 shadow-inner text-sm font-bold text-gray-800 outline-none cursor-pointer focus:ring-2 focus:ring-green-500 transition-all"
                   >
                     {TN_DISTRICTS && TN_DISTRICTS.map((dist) => (
                       <option key={dist} value={dist}>{dist}</option>
                     ))}
                   </select>
                   <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                   <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">⌄</span>
                 </div>
               </div>

               <button className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-2.5 rounded-xl font-bold text-sm mt-5 shadow-lg transition-all flex items-center gap-2">
                 View Prices <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
               </button>
            </div>
          </div>

          <div className="hidden lg:block bg-[#052c17]/70 p-6 rounded-[24px] border border-green-800/40 shadow-2xl w-[320px] backdrop-blur-xl">
            <h3 className="text-white font-bold text-lg mb-2">AI Price Forecast</h3>
            <p className="text-gray-300 text-xs mb-4">Get AI-powered price predictions for next 7 days</p>
            <button className="bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 shadow-md">
              View Forecast <span>→</span>
            </button>
            <div className="mt-4 flex items-end justify-between h-16">
              {[40, 50, 30, 60, 40, 70, 90].map((h, i) => (
                <div key={i} className="w-3 bg-green-500/80 rounded-t-sm transition-all duration-500 hover:bg-green-400 hover:h-full cursor-pointer" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

        </div>
      </div>
      {/* STATS FLOATING RIBBON */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 -mt-10 relative z-20">
        <div className="bg-white rounded-[24px] p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex justify-between items-center border border-gray-100">
          <div className="flex items-center gap-4 border-r border-gray-100 pr-10">
            <div className="bg-green-50 p-3 rounded-2xl text-green-600"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg></div>
            <div><h4 className="text-xl font-black text-gray-900">500+</h4><p className="text-xs text-gray-500 font-semibold">Markets Covered<br/>Across India</p></div>
          </div>
          <div className="flex items-center gap-4 border-r border-gray-100 pr-10">
            <div className="bg-green-50 p-3 rounded-2xl text-green-600"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg></div>
            <div><h4 className="text-xl font-black text-gray-900">100+</h4><p className="text-xs text-gray-500 font-semibold">Crops Tracked<br/>Major Crops</p></div>
          </div>
          <div className="flex items-center gap-4 border-r border-gray-100 pr-10">
            <div className="bg-green-50 p-3 rounded-2xl text-green-600"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
            <div><h4 className="text-xl font-black text-gray-900">Just Now</h4><p className="text-xs text-gray-500 font-semibold">Last Updated<br/>Real-time Data</p></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-50 p-3 rounded-2xl text-green-600"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
            <div><h4 className="text-xl font-black text-gray-900">98%</h4><p className="text-xs text-gray-500 font-semibold">Data Accuracy<br/>AI Verified</p></div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* LEFT COLUMN: CROP CARDS */}
        <div className="lg:col-span-3">
          
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="text-2xl font-black text-gray-900 flex items-center gap-2 transition-all duration-300">
                Market Prices in <span className="text-[#10b981]">{district}</span>
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              </h3>
              <p className="text-gray-500 text-sm font-semibold mt-1">Daily wholesale prices from major markets</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200 flex">
                <button className="bg-[#063f23] text-white text-xs font-bold px-4 py-2 rounded-md">Wholesale Price</button>
                <button className="text-gray-500 hover:text-gray-800 text-xs font-bold px-4 py-2 rounded-md">Retail Price</button>
              </div>
              <button className="bg-white border border-gray-200 shadow-sm text-gray-700 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                Export Data
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cropData.map((crop) => (
              <div key={crop.id} className="bg-white rounded-[20px] p-4 flex gap-4 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all group">
                <img src={crop.img} alt={crop.nameEn} className="w-24 h-24 rounded-2xl object-cover" />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{crop.nameEn}</h4>
                      <p className="text-xs text-gray-500 font-semibold">{crop.nameTa}</p>
                    </div>
                    {crop.trend !== "0.0%" && (
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${crop.isUp ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'}`}>
                         {crop.isUp ? '▲' : '▼'} {crop.trend}
                      </span>
                    )}
                    {crop.trend === "0.0%" && (
                      <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-gray-100 text-gray-600">{crop.trend}</span>
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold mb-0.5">Wholesale Price / {crop.unit}</p>
                    <h2 className="text-xl font-black text-[#10b981]">{crop.price}</h2>
                    <p className="text-[10px] text-gray-400 font-bold">Today</p>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-50">
                    <button className="text-[10px] text-green-700 font-bold flex items-center gap-1 hover:underline">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      View Details
                    </button>
                    <svg className={`w-16 h-6 ${crop.isUp ? 'text-red-500' : 'text-green-500'}`} viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={crop.isUp ? "M0 20 L10 15 L20 18 L30 10 L40 12 L50 2" : "M0 5 L10 8 L20 5 L30 15 L40 12 L50 18"} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="space-y-6">
          
          <div className="bg-[#063f23] rounded-[24px] p-6 shadow-xl relative overflow-hidden">
             <svg className="absolute top-0 right-0 opacity-10 w-32 h-32" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 22h20L12 2zm0 5l5.5 11h-11L12 7z"/></svg>
             <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
               <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
               Market Insights
             </h3>
             
             <div className="space-y-4">
               <div className="flex gap-4">
                 <div className="bg-yellow-500/20 p-2.5 rounded-xl h-fit text-yellow-400">🏆</div>
                 <div>
                   <p className="text-gray-300 text-xs font-bold mb-0.5">Highest Price</p>
                   <p className="text-white text-sm font-bold">Turmeric</p>
                   <p className="text-gray-400 text-xs font-semibold">₹14,200 / Quintal</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="bg-blue-500/20 p-2.5 rounded-xl h-fit text-blue-400">⬇️</div>
                 <div>
                   <p className="text-gray-300 text-xs font-bold mb-0.5">Lowest Price</p>
                   <p className="text-white text-sm font-bold">Coconut</p>
                   <p className="text-gray-400 text-xs font-semibold">₹16 / piece</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="bg-green-500/20 p-2.5 rounded-xl h-fit text-green-400">🏬</div>
                 <div>
                   <p className="text-gray-300 text-xs font-bold mb-0.5">Most Active Market</p>
                   <p className="text-white text-sm font-bold">{district} Market Yard</p>
                   <p className="text-gray-400 text-xs font-semibold">128 Transactions</p>
                 </div>
               </div>
             </div>

             <button className="w-full mt-6 bg-green-900/50 hover:bg-green-800 text-green-400 text-xs font-bold py-3 rounded-xl transition border border-green-800/50">
               View Full Insights →
             </button>
          </div>

          <div className="bg-gradient-to-br from-[#2e1065] to-[#4c1d95] rounded-[24px] p-6 shadow-xl relative overflow-hidden flex flex-col justify-between h-[200px]">
            <div className="relative z-10 w-2/3">
              <h3 className="text-white font-bold text-lg mb-2">Ask AI Assistant</h3>
              <p className="text-indigo-200 text-xs font-semibold leading-relaxed mb-4">Get answers to your agriculture & market related questions</p>
              <button className="bg-white hover:bg-gray-100 text-indigo-900 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 shadow-md w-fit">
                Ask Now <span>→</span>
              </button>
            </div>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/robot-4994247-4159828.png" alt="AI Robot" className="absolute -bottom-4 -right-4 w-32 drop-shadow-2xl brightness-110" />
          </div>

        </div>
      </div>

    </div>
  );
}