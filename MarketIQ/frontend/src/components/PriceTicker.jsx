import React, { useState } from 'react';

// PROPS: App.jsx-la irunthu intha 3 values-um ulla varuthu
export default function PriceTicker({ selectedDistrict, livePrices, isLoading }) {
  const [isPaused, setIsPaused] = useState(false);

  // TICKER ITEM COMPONENT (Dynamic data-va design pandra edam)
  const TickerItems = () => (
    <div className="flex items-center gap-4 px-3 whitespace-nowrap">
      {/* Loading aagum pothu dummy skeleton kaatta */}
      {isLoading ? (
        <div className="text-sm font-bold text-gray-400 px-10">Fetching live market rates for {selectedDistrict}...</div>
      ) : livePrices.length === 0 ? (
        <div className="text-sm font-bold text-gray-400 px-10">No market data available for {selectedDistrict}.</div>
      ) : (
        /* Real API Data-va show pandrom */
livePrices.map((crop, index) => {
          const colorClass = crop.isUp ? 'text-green-600' : 'text-red-600';

          return (
            <div 
              key={`${crop.id}-${index}`} 
              className="flex items-center justify-between gap-4 bg-white/90 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.03)] rounded-lg px-3.5 py-2 hover:shadow-md transition-all cursor-pointer min-w-[200px]"
            >
              <div className="flex flex-col">
                {/* 1. FIRST: Item Name */}
                <span className="font-extrabold text-[13px] text-gray-800 tracking-wide uppercase">
                  {crop.name}
                </span>

                {/* 2. SECOND: 1Kg Price */}
                <span className="font-extrabold text-[15px] text-gray-900 mt-0.5">
                  {crop.price} <span className="text-[10px] text-gray-400 font-medium">/kg</span>
                </span>

               {/* 3. THIRD: Market Name (Innum nalla Bold-a aakiyachu 🔥) */}
                <span className="font-black text-[11px] text-gray-700 tracking-wider uppercase mt-1 flex items-center gap-1">
                  📍 {crop.market}
                </span>
              </div>

              {/* Trend Percentage & Arrow */}
              <div className={`flex flex-col items-end ${colorClass}`}>
                <div className="flex items-center gap-0.5">
                  {crop.isUp ? (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l7.778 7.778-1.414 1.414L13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4z"/></svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172l5.364-5.364 1.414 1.414L12 20z"/></svg>
                  )}
                  <span className="text-[12px] font-bold">{crop.trend}</span>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center relative z-20 my-2">
      
  {/* 🔴 DYNAMIC TITLE SECTION (Premium Design 🔥) */}
      <div className="w-full max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 flex justify-start items-center mb-3 mt-1">
        
        {/* Glassmorphism Badge Container */}
        <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-white">
          
          {/* Real Pulsing Red Dot */}
          <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-red-500"></span>
          </span>
          
          {/* Styled Text */}
          <h3 className="text-[13px] md:text-[15px] font-black uppercase tracking-wider flex items-center flex-wrap gap-1.5">
            {/* Gradient District Name */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007022] to-[#10b981] text-[15px] md:text-[17px] drop-shadow-sm">
              {selectedDistrict}
            </span> 
            <span className="text-gray-800 ml-1">
              District Markets
            </span>
            <span className="text-gray-300 font-bold mx-1">|</span>
            <span className="text-gray-500 font-bold">
              Live Price
            </span>
          </h3>
          
        </div>
      </div>

      {/* TICKER CONTAINER */}
      <div className="w-full bg-transparent overflow-hidden relative">
<style>
          {`
            .price-ticker-scroll {
              display: flex;
              width: max-content;
              /* Speed-a innum slow panna seconds-a athigam pannunga 👇 */
              animation: scroll-price 300s linear infinite; 
            }
            .price-ticker-scroll:hover {
              animation-play-state: paused !important;
            }
            .is-paused {
              animation-play-state: paused !important;
            }
            @keyframes scroll-price {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
        {/* Gradient fade on left and right edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-[#faf6f1] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#faf6f1] to-transparent z-10 pointer-events-none"></div>

        <div className="py-3">
          <div className={`price-ticker-scroll ${isPaused ? 'is-paused' : ''}`}>
            {/* Repeated to create infinite scroll effect without gaps */}
            <TickerItems />
            <TickerItems />
            <TickerItems />
            <TickerItems />
          </div>
        </div>
      </div>

      {/* PLAY/PAUSE BUTTON */}
      <div className="mt-2 mb-1">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#fdfdfd] border border-white shadow-[3px_4px_10px_rgba(0,0,0,0.05),-3px_-3px_10px_rgba(255,255,255,0.8)] text-gray-600 font-bold text-[13px] hover:scale-105 active:scale-95 transition-all duration-300"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {isPaused ? (
            <>
              <svg className="w-4 h-4 text-[#16a34a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Play
            </>
          ) : (
            <>
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
              Pause
            </>
          )}
        </button>
      </div>

    </div>
  );
}