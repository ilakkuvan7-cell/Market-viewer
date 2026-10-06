import React from 'react';

export default function PartnerLogos() {
  // 1. STATS & FEATURES BADGES
  const featureItems = [
    { type: 'stat', label: '100+ Crops', icon: '🌾' },
    { type: 'stat', label: '500+ Markets', icon: '🏪' },
    { type: 'stat', label: 'Live Weather', icon: '⛅' },
    { type: 'stat', label: '98% AI Accuracy', icon: '🤖' },
    { type: 'stat', label: '24x7 Live Updates', icon: '⚡' },
  ];

  // 2. PARTNER BRAND LOGOS
  const partnerBrands = [
    { name: "COROMANDEL", img: "/images/brands/coromandel.png" },
    { name: "ITC", img: "/images/brands/itc.png" },
    { name: "UPL", img: "/images/brands/upl.png" },
    { name: "BAYER", img: "/images/brands/bayer.png" },
    { name: "NETAFIM", img: "/images/brands/netafim.png" },
    { name: "GODREJ", img: "/images/brands/godrej.png" },
    { name: "SYNGENTA", img: "/images/brands/syngenta.png" },
    { name: "MAHYCO", img: "/images/brands/mahyco.png" },
    { name: "DHANUKA", img: "/images/brands/dhanuka.png" },
  ];

  const TickerStrip = () => (
    <div className="flex items-center gap-4 md:gap-6 px-4 whitespace-nowrap">
      
      {/* FEATURE BADGES BOXES (Height Increased) */}
      {featureItems.map((item, index) => (
        <div 
          key={`feat-${index}`} 
          className="flex items-center gap-3 bg-gray-50 border border-gray-200/80 px-5 md:px-6 py-3 rounded-2xl md:rounded-[1.25rem] shadow-sm hover:border-green-500 hover:shadow-md hover:scale-105 transition-all cursor-pointer h-14 md:h-16"
        >
          <span className="text-xl md:text-2xl">{item.icon}</span>
          <span className="font-extrabold text-sm md:text-[15px] text-gray-800 tracking-wide">
            {item.label}
          </span>
        </div>
      ))}

      {/* INDIVIDUAL BRAND LOGO BOXES (Height Increased) */}
      {partnerBrands.map((brand, index) => (
        <div 
          key={`brand-${index}`} 
          className="flex items-center justify-center bg-gray-50 hover:bg-white border border-gray-200/80 hover:border-green-500 rounded-2xl md:rounded-[1.25rem] px-6 py-3 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer h-14 md:h-16 min-w-[130px] md:min-w-[150px]"
        >
          <img 
            src={brand.img} 
            alt={brand.name} 
            className="h-6 md:h-8 w-auto object-contain max-w-[100px] md:max-w-[110px]"
          />
        </div>
      ))}

    </div>
  );

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 md:px-6 lg:px-8 mt-2 mb-12">
      {/* MAIN BANNER CONTAINER (Padding Top & Bottom Increased) */}
      <div className="w-full bg-white rounded-[2rem] py-5 md:py-6 overflow-hidden relative shadow-lg border border-gray-100">
        <style>
          {`
            .ticker-scroll {
              display: flex;
              width: max-content;
              animation: scroll-ticker 40s linear infinite;
            }
            .ticker-scroll:hover {
              animation-play-state: paused;
            }
            @keyframes scroll-ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>

        {/* FADE GRADIENT EDGES */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none rounded-l-[2rem]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none rounded-r-[2rem]"></div>

        {/* INFINITE DUAL LOOP */}
        <div className="ticker-scroll">
          <TickerStrip />
          <TickerStrip />
        </div>
      </div>
    </div>
  );
}