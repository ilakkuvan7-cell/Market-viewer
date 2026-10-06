import React from 'react';

export default function AgriHub() {
  return (
    <>
      {/* DIRECT GOOGLE FONT IMPORT & GLOBAL FORCE APPLY */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
          * {
            font-family: 'Plus Jakarta Sans', sans-serif !important;
          }
        `}
      </style>

      {/* MAIN WRAPPER WITH LIGHT/WHITE BACKGROUND */}
      <div className="min-h-screen bg-[#f4f7f6] pt-12 pb-24 px-4 md:px-8 selection:bg-green-200">
        
        {/* MAIN CONTAINER */}
        <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
          
          {/* =========================================================
              TOP ROW: 3 CARDS
            ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* CARD 01: Market & Price Analytics */}
            <div className="bg-white rounded-[36px] p-6 lg:p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-green-50 text-green-700 font-extrabold text-lg rounded-[20px] flex items-center justify-center mb-6">
                  01
                </div>
                <div className="flex justify-between items-start">
                  <div className="pr-2 w-[55%]">
                    <h2 className="text-2xl font-black text-gray-900 leading-tight flex items-center gap-2">
                      Market & Price <br /> Analytics <span className="text-green-600">📈</span>
                    </h2>
                    <p className="text-green-700 font-extrabold text-sm mt-2 mb-3">
                      Market Intelligence
                    </p>
                    <p className="text-gray-500 text-[13px] font-semibold leading-relaxed">
                      Real-time market data, analytics and AI insights to help you make smart decisions.
                    </p>
                  </div>
                  
                  <div className="w-[45%] max-w-[160px] shrink-0 relative z-10 -mt-2">
                    <img 
                      src="/market_phone.png" 
                      alt="Market Phone App" 
                      className="w-full h-auto object-contain drop-shadow-xl hover:-translate-y-1 transition-transform duration-300 rounded-[24px] mix-blend-multiply" 
                    />
                  </div>
                </div>
              </div>

              {/* EXACT DEEP GREEN BUTTONS (#0f9d44) */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <button className="flex items-center gap-3 p-3 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform shadow-sm">🏪</div>
                  <h4 className="font-extrabold text-white text-[11.5px] leading-tight drop-shadow-sm">Real-Time Mandi Prices</h4>
                </button>
                
                <button className="flex items-center gap-3 p-3 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform shadow-sm">📈</div>
                  <h4 className="font-extrabold text-white text-[11.5px] leading-tight drop-shadow-sm">Price Trend Graphs</h4>
                </button>

                <button className="flex items-center gap-3 p-3 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform shadow-sm">📊</div>
                  <h4 className="font-extrabold text-white text-[11.5px] leading-tight drop-shadow-sm">High / Low / Average</h4>
                </button>

                <button className="flex items-center gap-3 p-3 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform shadow-sm">🧠</div>
                  <h4 className="font-extrabold text-white text-[11.5px] leading-tight drop-shadow-sm">AI Price Forecasting</h4>
                </button>
              </div>
            </div>

            {/* CARD 02: Farmer Tools & Rentals */}
            <div className="bg-white rounded-[36px] p-6 lg:p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-green-50 text-green-700 font-extrabold text-lg rounded-[20px] flex items-center justify-center mb-6">
                  02
                </div>
                <div className="flex justify-between items-start">
                  <div className="w-[55%] pr-2 relative z-10">
                    <h2 className="text-2xl font-black text-gray-900 leading-tight mb-2">
                      Farmer Tools & <br /> Rentals 🚜
                    </h2>
                    <p className="text-green-700 font-extrabold text-sm mb-3">Utility Hub</p>
                    <p className="text-gray-500 text-[13px] font-semibold leading-relaxed">
                      Powerful tools and services to make farming easier and more productive.
                    </p>
                  </div>
                  
                  <div className="w-[45%] max-w-[200px] shrink-0 relative -mt-4 -mr-4 pointer-events-none">
                    <img 
                      src="/tractor-drone.png" 
                      alt="Tractor and Drone" 
                      className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl" 
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-[90px]">
                <button className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left relative overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform shadow-sm">🚁</div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11.5px] font-extrabold text-white leading-tight drop-shadow-sm">Equipment & Drone</span>
                      <span className="bg-white/20 text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-full self-start shadow-sm">New</span>
                    </div>
                  </div>
                </button>
                
                <button className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform shadow-sm">🚚</div>
                  <span className="text-[11.5px] font-extrabold text-white leading-tight drop-shadow-sm">Nearby Mandi &<br/>Transport</span>
                </button>

                <button className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform shadow-sm">🏛️</div>
                  <span className="text-[11.5px] font-extrabold text-white leading-tight drop-shadow-sm">Govt Schemes &<br/>Subsidies</span>
                </button>

                <button className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform shadow-sm">⛅</div>
                  <span className="text-[11.5px] font-extrabold text-white leading-tight drop-shadow-sm">Hyper-Local<br/>Weather</span>
                </button>
              </div>
            </div>

            {/* CARD 03: Storage & Inventory */}
            <div className="bg-white rounded-[36px] p-6 lg:p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-green-50 text-green-700 font-extrabold text-lg rounded-[20px] flex items-center justify-center mb-6">
                  03
                </div>
                <div className="flex justify-between items-start">
                  <div className="w-[55%] pr-2 relative z-10">
                    <h2 className="text-2xl font-black text-gray-900 leading-tight mb-2">
                      Storage & <br /> Inventory 🏢
                    </h2>
                    <p className="text-green-700 font-extrabold text-sm mb-3">Smart Storage Solutions</p>
                    <p className="text-gray-500 text-[13px] font-semibold leading-relaxed">
                      Store your produce safely and at the right time to get the best price.
                    </p>
                  </div>

                  <div className="w-[45%] max-w-[220px] shrink-0 relative -mt-2 -mr-6 pointer-events-none">
                    <img 
                      src="/cold-storage.png" 
                      alt="Cold Storage" 
                      className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl" 
                    />
                  </div>
                </div>
              </div>

              <div className="mt-[65px] space-y-3">
                <div className="flex gap-4">
                  <div className="flex-1 bg-[#f8faf9] border border-gray-100 rounded-[20px] p-4">
                    <p className="text-[10px] font-extrabold text-gray-500 mb-1">Available Godowns</p>
                    <p className="text-2xl font-black text-gray-900 mb-0.5">128</p>
                    <p className="text-[10px] text-gray-400 font-bold">Near You</p>
                  </div>
                  <div className="flex-1 bg-[#f8faf9] border border-gray-100 rounded-[20px] p-4">
                    <p className="text-[10px] font-extrabold text-gray-500 mb-1">Avg. Storage Cost</p>
                    <p className="text-xl font-black text-gray-900 mb-0.5">₹1.2 <span className="text-[10px] text-gray-400 font-medium">/ Qtl / Day</span></p>
                    <p className="text-[10px] text-gray-400 font-bold">Affordable Rates</p>
                  </div>
                </div>

                {/* PRIMARY CTA */}
                <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group text-left">
                  <div className="w-12 h-12 rounded-xl bg-white text-gray-900 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform shadow-sm">📅</div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="font-extrabold text-white text-[15px] drop-shadow-sm">Cold Storage Booking</h4>
                      <span className="bg-white/20 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">New</span>
                    </div>
                    <p className="text-[11px] text-white/90 font-bold drop-shadow-sm">Book nearby storage space easily.</p>
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* =========================================================
              BOTTOM ROW: 2 CARDS
            ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* CARD 04: Business Connect & Logistics */}
            <div className="bg-white rounded-[36px] p-6 lg:p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-8 items-center">
              
              <div className="w-full md:w-[240px] h-[240px] bg-[#f5f3ff] rounded-[36px] flex items-center justify-center shrink-0 p-4">
                 <img src="/handshake.png" alt="Handshake" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 mix-blend-multiply" />
              </div>

              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-50 text-green-700 font-extrabold text-lg rounded-[20px] flex items-center justify-center shadow-sm">04</div>
                  <h2 className="text-[22px] font-black text-gray-900 leading-tight">Business Connect & <br/> Logistics 🤝</h2>
                </div>
                <p className="text-purple-600 font-extrabold text-sm mb-6 ml-14">Supply Chain</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                  <button className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                    <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform shadow-sm">💬</div>
                    <div>
                      <h4 className="font-extrabold text-white text-[12px] leading-tight mb-1 drop-shadow-sm">Direct Buyer Chat</h4>
                      <p className="text-[10px] text-white/90 font-bold leading-snug drop-shadow-sm">Negotiate without middlemen.</p>
                    </div>
                  </button>
                  
                  <button className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                    <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform shadow-sm">🛒</div>
                    <div>
                      <h4 className="font-extrabold text-white text-[12px] leading-tight mb-1 drop-shadow-sm">Bulk Orders</h4>
                      <p className="text-[10px] text-white/90 font-bold leading-snug drop-shadow-sm">Place orders or bid in auctions.</p>
                    </div>
                  </button>

                  <button className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                    <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform shadow-sm">🛡️</div>
                    <div>
                      <h4 className="font-extrabold text-white text-[12px] leading-tight mb-1 drop-shadow-sm">Secure Payments</h4>
                      <p className="text-[10px] text-white/90 font-bold leading-snug drop-shadow-sm">Safe online transactions.</p>
                    </div>
                  </button>

                  <button className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                    <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform shadow-sm">🚛</div>
                    <div>
                      <h4 className="font-extrabold text-white text-[12px] leading-tight mb-1 drop-shadow-sm">Logistics</h4>
                      <p className="text-[10px] text-white/90 font-bold leading-snug drop-shadow-sm">Find and book trucks easily.</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 05: Community & Platform Experience */}
            <div className="bg-white rounded-[36px] p-6 lg:p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col relative overflow-hidden">
              
              {/* Top Right Toggle */}
              <div className="absolute top-8 right-8 flex items-center bg-gray-50 border border-gray-200 rounded-full p-1 z-20">
                <button className="px-3 py-1.5 text-[10px] font-extrabold text-gray-800 bg-white rounded-full shadow-sm">EN</button>
                <button className="px-3 py-1.5 text-[10px] font-extrabold text-gray-500 hover:text-gray-800 transition-colors">தமிழ்</button>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="max-w-[280px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-green-50 text-green-700 font-extrabold text-lg rounded-[20px] flex items-center justify-center shrink-0">05</div>
                    <h2 className="text-[22px] font-black text-gray-900 leading-tight">Community & Platform <br/> Experience 👨‍🌾</h2>
                  </div>
                  <p className="text-green-700 font-extrabold text-sm mb-3 ml-14"></p>
                  <p className="text-gray-500 text-[13px] font-semibold leading-relaxed ml-14">
                    A farmer-first platform with smart features and a strong community.
                  </p>
                </div>
              </div>

              {/* Farmer Image */}
              <div className="absolute right-[-20px] top-4 w-[340px] h-[280px] pointer-events-none z-0">
                <img src="/farmer-phone.png" alt="Farmer on phone" className="w-full h-full object-contain object-right-bottom mix-blend-multiply opacity-90" />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-[110px] relative z-10 bg-white/80 backdrop-blur-md p-3 rounded-[32px] border border-gray-100 shadow-sm">
                <button className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform shadow-sm">👥</div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="font-extrabold text-white text-[11.5px] drop-shadow-sm">Vivasayigal Kootam</h4>
                      <span className="bg-white/20 text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-full shadow-sm">New</span>
                    </div>
                    <p className="text-[9.5px] text-white/90 font-bold drop-shadow-sm">Community Forum</p>
                  </div>
                </button>
                
                <button className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform shadow-sm">🎙️</div>
                  <div>
                    <h4 className="font-extrabold text-white text-[11.5px] mb-0.5 drop-shadow-sm">Voice Search</h4>
                    <p className="text-[9.5px] text-white/90 font-bold drop-shadow-sm">Assistant (AI)</p>
                  </div>
                </button>

                <button className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-white text-gray-900 font-extrabold flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform shadow-sm">A<span className="text-xs">அ</span></div>
                  <div>
                    <h4 className="font-extrabold text-white text-[11.5px] mb-0.5 drop-shadow-sm">Bilingual Toggle</h4>
                    <p className="text-[9.5px] text-white/90 font-bold drop-shadow-sm">English ⇌ Tamil</p>
                  </div>
                </button>

                <button className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0f9d44] hover:bg-[#0c8a3c] shadow-[0_4px_12px_rgba(15,157,68,0.3)] hover:shadow-[0_6px_16px_rgba(15,157,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                    <span className="bg-red-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow-sm border border-red-600">LIVE</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-[11.5px] mb-0.5 drop-shadow-sm">Live News Ticker</h4>
                    <p className="text-[9.5px] text-white/90 font-bold drop-shadow-sm">Agri News & Alerts</p>
                  </div>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}