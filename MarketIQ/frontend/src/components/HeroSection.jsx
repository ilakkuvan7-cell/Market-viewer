import React, { useState } from 'react';

export default function HeroFrame() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const scrollToMarket = () => {
    const marketSection = document.getElementById('market-section');
    if (marketSection) {
      marketSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support voice search. Please try in Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN'; 
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setSearchQuery(speechToText);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  return (
    /* 1. ADJUSTMENT: OUTER FRAME WRAPPER WITH PADDING ALL AROUND */
    <div className="w-full px-4 pt-4 pb-2 md:px-8 md:pt-6 md:pb-4 flex justify-center items-center">
      
      {/* 2. ADJUSTMENT: CARD CONTAINER WITH PERFECT HEIGHT SO TRACTOR IS FULLY VISIBLE */}
      <div 
        className="relative w-full h-[85vh] min-h-[600px] max-h-[750px] rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-6 md:p-8 lg:p-10 shadow-2xl border border-gray-200/10"
        style={{ 
          backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.15) 55%, transparent 100%), url('/images/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* NAVBAR */}
        <nav className="flex flex-wrap items-center justify-between z-20 relative w-full">
          <div className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold text-white cursor-pointer">
            <div className="bg-gradient-to-br from-[#4ade80] to-[#16a34a] p-2 rounded-full shadow-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 00-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
              </svg>
            </div>
            <span className="drop-shadow-md tracking-tight">Market <span className="text-[#4ade80]">IQ</span></span>
          </div>

          <div className="hidden lg:flex items-center bg-white/20 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/20 shadow-inner">
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm shadow-sm transition hover:scale-105">Home</button>
            <button className="text-white hover:text-white/80 px-6 py-2 rounded-full font-medium text-sm transition">About</button>
            <button className="text-white hover:text-white/80 px-6 py-2 rounded-full font-medium text-sm transition">Features</button>
            <button onClick={scrollToMarket} className="text-white hover:text-white/80 px-6 py-2 rounded-full font-medium text-sm transition">Market</button>
            <button className="text-white hover:text-white/80 px-6 py-2 rounded-full font-medium text-sm transition">Contact</button>
          </div>

          <div className="flex items-center gap-4 relative">
            <div className="hidden lg:flex items-center gap-3">
              <button className="text-white font-bold text-sm px-6 py-2.5 rounded-full border border-white/50 hover:bg-white/10 transition backdrop-blur-sm">Sign in</button>
              <button className="bg-[#00a624] hover:bg-[#008f1f] text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-green-900/30 transition transform hover:-translate-y-0.5">Sign Up</button>
            </div>
            <div className="bg-white rounded-full flex items-center px-4 py-2 shadow-lg cursor-pointer hover:bg-gray-50 transition">
              <svg className="w-4 h-4 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              <span className="text-sm font-bold text-gray-800 mr-2">English</span>
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </nav>

        {/* HERO TEXT CONTENT */}
        <div className="flex-1 flex flex-col justify-center z-10 w-full max-w-2xl my-auto">
          <h1 className="text-[2.6rem] md:text-[3.5rem] lg:text-[4rem] font-black text-white leading-[1.08] tracking-tight drop-shadow-2xl">
            Grow Smarter.<br/>Sell Better.<br/>Earn More.
          </h1>
          <p className="text-white mt-3 text-xs md:text-sm lg:text-[0.95rem] max-w-md leading-relaxed font-semibold drop-shadow-lg">
            Track live market prices, compare opportunities across districts, and make confident selling decisions.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-5 flex items-center bg-white rounded-full p-1.5 md:p-2 w-full max-w-[28rem] shadow-2xl">
            <svg className="w-5 h-5 text-black ml-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isListening ? "Listening..." : "Search Crops.."} 
              className="flex-1 bg-transparent border-none outline-none px-2 text-black text-sm md:text-base font-bold w-full placeholder-gray-400" 
            />

            <button 
              onClick={handleVoiceSearch}
              className={`p-2 rounded-full mr-2 transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </button>

            <button onClick={scrollToMarket} className="bg-[#00a624] hover:bg-[#00821e] text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition shadow-md">
              Search
            </button>
          </div>

          {/* BUTTONS */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button onClick={scrollToMarket} className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition shadow-xl hover:bg-gray-100">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Explore Market
            </button>
            <button className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition shadow-xl hover:bg-gray-100">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h2v2H9V9zm4 0h2v2h-2V9z"></path>
              </svg>
              Ask AI Assistant
            </button>
          </div>
        </div>

        {/* BOTTOM STATS PILL BAR */}
        <div className="z-10 mt-auto pt-2">
          <div className="inline-flex flex-wrap items-center gap-3 sm:gap-5 md:gap-6 bg-[#04280f]/80 backdrop-blur-md border border-[#22c55e]/30 rounded-2xl md:rounded-full px-4 md:px-6 py-2 shadow-2xl">
            
            <div className="flex items-center gap-2 md:gap-3">
              <div className="bg-[#16a34a] p-1.5 md:p-2 rounded-full text-white shadow-md">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              </div>
              <div className="text-white text-xs leading-tight">
                <span className="font-black text-sm md:text-base block">100+</span>
                <span className="font-semibold text-gray-200 text-[10px] md:text-xs uppercase tracking-wider">CROPS</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-6 bg-white/20"></div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="bg-[#16a34a] p-1.5 md:p-2 rounded-full text-white shadow-md">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h2v2H9V9zm4 0h2v2h-2V9z"></path></svg>
              </div>
              <div className="text-white text-xs leading-tight">
                <span className="font-black text-sm md:text-base block">500+</span>
                <span className="font-semibold text-gray-200 text-[10px] md:text-xs uppercase tracking-wider">MARKETS</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-6 bg-white/20"></div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="bg-[#16a34a] p-1.5 md:p-2 rounded-full text-white shadow-md">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
              </div>
              <div className="text-white text-xs leading-tight">
                <span className="font-black text-sm md:text-base block">24 × 7</span>
                <span className="font-semibold text-gray-200 text-[10px] md:text-xs uppercase tracking-wider">LIVE UPDATES</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-6 bg-white/20"></div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="bg-[#16a34a] p-1.5 md:p-2 rounded-full text-white shadow-md">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div className="text-white text-xs leading-tight">
                <span className="font-black text-sm md:text-base block">98%</span>
                <span className="font-semibold text-gray-200 text-[10px] md:text-xs uppercase tracking-wider">AI ACCURACY</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}