import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal'; 

// 1. FIREBASE IMPORTS
import { auth } from '../firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

// --- INFINITE SCROLL DATA (Bottom Ticker) ---
const featureItems = [
  { type: 'stat', label: '100+ Crops', icon: '🌿' },
  { type: 'stat', label: '500+ Markets', icon: '🏬' },
  { type: 'stat', label: 'Live Weather', icon: '⛅' },
  { type: 'stat', label: '98% AI Accuracy', icon: '🎯' },
  { type: 'stat', label: '24x7 Live Updates', icon: ' 📈' },
];

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

// --- BOTTOM TICKER COMPONENT ---
const TickerStrip = () => (
  <div className="flex items-center gap-4 md:gap-6 px-4 whitespace-nowrap">
    {featureItems.map((item, index) => (
      <div 
        key={`feat-${index}`} 
        className="flex items-center gap-3 bg-gray-50 border border-gray-200/80 px-6 py-3 rounded-2xl md:rounded-[1.25rem] shadow-sm hover:border-green-500 hover:shadow-md hover:scale-105 transition-all cursor-pointer h-16 md:h-[4.2rem]"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <span className="text-2xl md:text-3xl">{item.icon}</span>
        <span className="font-extrabold text-[15px] md:text-[16px] text-gray-800 tracking-wide">
          {item.label}
        </span>
      </div>
    ))}
    {partnerBrands.map((brand, index) => (
      <div 
        key={`brand-${index}`} 
        className="flex items-center justify-center bg-gray-50 hover:bg-white border border-gray-200/80 hover:border-green-500 rounded-2xl md:rounded-[1.25rem] px-6 py-2 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer h-16 md:h-[4.2rem] min-w-[150px] md:min-w-[180px]"
      >
        <img src={brand.img} alt={brand.name} className="h-10 md:h-12 w-auto object-contain max-w-[130px] md:max-w-[160px]" />
      </div>
    ))}
  </div>
);

// --- MAIN HERO COMPONENT ---
export default function HeroFrame() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState('English');
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'signin' });
  
  // USER & MENU STATES
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // --- UPDATED: DUMMY DATA FOR SQUARE PRICE BOXES (Added District) ---
  const marketRates = [
    { id: 1, district: "Coimbatore", crop: "Tomato", price: "₹45", unit: "kg", change: "↑ ₹2", status: "up" },
    { id: 2, district: "Erode", crop: "Onion", price: "₹55", unit: "kg", change: "↓ ₹3", status: "down" },
    { id: 3, district: "Salem", crop: "Potato", price: "₹32", unit: "kg", change: "- 0", status: "same" },
    { id: 4, district: "Madurai", crop: "Carrot", price: "₹75", unit: "kg", change: "↑ ₹5", status: "up" },
    { id: 5, district: "Trichy", crop: "Cabbage", price: "₹28", unit: "kg", change: "- 0", status: "same" },
    { id: 6, district: "Chennai", crop: "Grn Chilli", price: "₹50", unit: "kg", change: "↓ ₹2", status: "down" },
    { id: 7, district: "Tiruppur", crop: "Beans", price: "₹65", unit: "kg", change: "↑ ₹4", status: "up" },
    { id: 8, district: "Vellore", crop: "Garlic", price: "₹120", unit: "kg", change: "↑ ₹10", status: "up" }
  ];

  // OBSERVER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const scrollToMarket = () => {
    const marketSection = document.getElementById('market-section');
    if (marketSection) marketSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Your browser does not support voice search.");
    const recognition = new SpeechRecognition();
    recognition.lang = language === 'English' ? 'en-IN' : 'ta-IN';
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => setSearchQuery(event.results[0][0].transcript);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowProfileMenu(false);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="relative w-full max-w-[1500px] mx-auto px-4 md:px-6 lg:px-8 py-4 flex flex-col justify-center items-center">
      
      {/* MAIN HERO CONTAINER */}
      <div className="relative w-full min-h-[680px] md:min-h-[760px] rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-6 md:p-10 lg:p-12 shadow-2xl">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0 bg-[#051405]">
          <img src="/images/bg.jpg" alt="Background" className="w-full h-full object-cover object-[80%_center] brightness-110 contrast-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* NAVBAR */}
        <nav className="flex flex-wrap items-center justify-between z-30 relative w-full pt-4">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] bg-gradient-to-br from-[#00b09b] to-[#96c93d] rounded-[14px] flex items-center justify-center shadow-lg shadow-green-900/40 transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 w-full h-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <svg viewBox="0 0 24 24" fill="none" className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] z-10">
                <path d="M3 20h18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M6 20V12a1.5 1.5 0 011.5-1.5h1a1.5 1.5 0 011.5 1.5v8" fill="white" fillOpacity="0.4" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M14 20V6a1.5 1.5 0 011.5-1.5h1a1.5 1.5 0 011.5 1.5v14" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M18 9c-2-3-6-4-6-4s.5 4 2.5 6" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[1.75rem] md:text-[2rem] font-black tracking-[-0.04em] flex items-center">
              <span className="text-white">Market</span>
              <span className="text-[#a3e635] ml-1.5 drop-shadow-lg">IQ</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/20 shadow-inner">
            <button className="bg-white text-black px-5 py-2 rounded-full font-bold text-[13px] shadow-sm transition hover:scale-105">Home</button>
            <button className="text-white hover:text-white/80 px-5 py-2 rounded-full font-bold text-[13px] transition">About</button>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-white hover:text-white/80 px-5 py-2 rounded-full font-bold text-[13px] transition">
                Features
                <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="w-[850px] bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-100 flex gap-8 cursor-default">
                  <div className="flex-1">
                    <h4 className="text-[#22c55e] font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><span className="text-xl">📈</span> Market & Price</h4>
                    <ul className="space-y-3">
                      <li className="text-gray-700 text-[13px] font-bold hover:text-[#22c55e] cursor-pointer flex items-center gap-2">➔ District / Mandi Filter</li>
                      <li className="text-gray-700 text-[13px] font-bold hover:text-[#22c55e] cursor-pointer flex items-center gap-2">➔ Price Trend Graphs</li>
                      <li className="text-gray-700 text-[13px] font-bold hover:text-[#22c55e] cursor-pointer flex items-center gap-2">➔ High / Low / Avg Price</li>
                    </ul>
                  </div>
                  <div className="flex-1 border-l border-gray-200 pl-8">
                    <h4 className="text-blue-500 font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><span className="text-xl">🚜</span> Farmer Tools</h4>
                    <ul className="space-y-3">
                      <li className="text-gray-700 text-[13px] font-bold hover:text-blue-500 cursor-pointer flex items-center gap-2">➔ Daily Market Trends</li>
                      <li className="text-gray-700 text-[13px] font-bold hover:text-blue-500 cursor-pointer flex items-center gap-2">➔ Nearby Mandi Finder</li>
                      <li className="text-gray-700 text-[13px] font-bold hover:text-blue-500 cursor-pointer flex items-center gap-2">➔ Transport Availability</li>
                      <li className="text-gray-700 text-[13px] font-bold hover:text-blue-500 cursor-pointer flex items-center gap-2">➔ Govt Schemes & Subsidy</li>
                    </ul>
                  </div>
                  <div className="flex-1 border-l border-gray-200 pl-8">
                    <h4 className="text-orange-500 font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><span className="text-xl">🌱</span> Crop Mgmt</h4>
                    <ul className="space-y-3">
                      <li className="text-gray-700 text-[13px] font-bold hover:text-orange-500 cursor-pointer flex items-center gap-2">➔ Soil Health Analysis</li>
                      <li className="text-gray-700 text-[13px] font-bold hover:text-orange-500 cursor-pointer flex items-center gap-2">➔ Fertilizer Guide</li>
                      <li className="text-gray-700 text-[13px] font-bold hover:text-orange-500 cursor-pointer flex items-center gap-2">➔ Pest Management</li>
                    </ul>
                  </div>
                  <div className="flex-1 border-l border-gray-200 pl-8">
                    <h4 className="text-purple-500 font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><span className="text-xl">🤝</span> Business</h4>
                    <ul className="space-y-3">
                      <li className="text-gray-700 text-[13px] font-bold hover:text-purple-500 cursor-pointer flex items-center gap-2">➔ Find Best Buyer</li>
                      <li className="text-gray-700 text-[13px] font-bold hover:text-purple-500 cursor-pointer flex items-center gap-2">➔ Bulk Orders</li>
                      <li className="text-gray-700 text-[13px] font-bold hover:text-purple-500 cursor-pointer flex items-center gap-2">➔ Direct Farmer Selling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={scrollToMarket} className="text-white hover:text-white/80 px-5 py-2 rounded-full font-bold text-[13px] transition">Market</button>
            <button className="text-white hover:text-white/80 px-5 py-2 rounded-full font-bold text-[13px] transition">Contact</button>
          </div>

          <div className="flex items-center gap-4 relative">
            {user ? (
              <div className="hidden lg:flex items-center gap-4 relative" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <div className="relative group cursor-pointer" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                  <img 
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || user.email}&background=00a624&color=fff`} 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full border-2 border-white/60 shadow-lg object-cover transition transform hover:scale-110 bg-white"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#00a624] p-0.5 rounded-full border border-white">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                <Link to="/profile" className="bg-[#00a624] hover:bg-[#008f1f] text-white px-7 py-2.5 rounded-full font-bold text-[13px] shadow-lg shadow-green-900/30 transition transform hover:-translate-y-0.5">
                  My Profile
                </Link>
                {showProfileMenu && (
                  <div className="absolute top-full right-0 mt-5 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] border border-gray-100 p-3 z-50 overflow-hidden animate-[fadeIn_0.2s_ease-out]">
                    <div className="pb-3 mb-2 border-b border-gray-100">
                      <p className="font-bold text-gray-900 text-sm truncate">{user.displayName || 'Welcome!'}</p>
                      <p className="text-xs font-semibold text-gray-500 truncate">{user.email}</p>
                    </div>
                    <button onClick={() => navigate('/profile')} className="w-full text-left font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 text-sm rounded-lg flex items-center gap-2.5 transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      Dashboard
                    </button>
                    <button onClick={handleLogout} className="w-full text-left font-semibold text-red-600 hover:bg-red-50 p-3 text-sm rounded-lg flex items-center gap-2.5 transition mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-3">
                <button onClick={() => setAuthModal({ isOpen: true, mode: 'signin' })} className="text-white font-bold text-[13px] px-6 py-2.5 rounded-full border border-white/50 hover:bg-white/10 transition backdrop-blur-sm">Sign in</button>
                <button onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })} className="bg-[#00a624] hover:bg-[#008f1f] text-white px-8 py-2.5 rounded-full font-bold text-[13px] shadow-lg shadow-green-900/30 transition transform hover:-translate-y-0.5">Sign Up</button>
              </div>
            )}
            
            <div onClick={() => setLanguage(lang => lang === 'English' ? 'தமிழ்' : 'English')} className="bg-white rounded-full flex items-center px-4 py-2.5 shadow-lg cursor-pointer hover:bg-gray-50 transition border border-gray-200">
              <span className="text-[15px] mr-1.5">{language === 'English' ? '🌐' : '🇮🇳'}</span>
              <span className="text-[13px] font-extrabold text-gray-800 mr-1.5">{language}</span>
              <svg className="w-3.5 h-3.5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </nav>

        {/* HERO TEXT CONTENT */}
        <div className="flex-1 flex flex-col justify-center z-10 w-full max-w-2xl my-8">
          <h1 className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.2rem] font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl">
            Grow Smarter.<br/>
            Sell Better.<br/>
            Earn More.
          </h1>
          <p className="text-white mt-4 text-xs md:text-sm lg:text-[0.98rem] max-w-lg leading-relaxed font-semibold drop-shadow-lg">
            Track live market prices, compare opportunities across districts, and make confident selling decisions with trusted agricultural market insights.
          </p>

          <div className="mt-6 flex items-center bg-white rounded-full p-1.5 md:p-2 w-full max-w-[30rem] shadow-2xl">
            <svg className="w-5 h-5 text-black ml-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={isListening ? "Listening..." : "Search Crops.."} className="flex-1 bg-transparent border-none outline-none px-2 text-black text-sm md:text-base font-bold w-full placeholder-gray-400" />
            <button onClick={handleVoiceSearch} className={`p-2 rounded-full mr-2 transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
            </button>
            <button onClick={scrollToMarket} className="bg-[#00a624] hover:bg-[#00821e] text-white px-5 md:px-7 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition shadow-md">Search</button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/explore-market" className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition shadow-xl hover:bg-gray-100 cursor-pointer">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              Explore Market
            </Link>
            <button onClick={() => window.location.href = '/agri-hub'} className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition shadow-xl hover:bg-gray-100">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              360° Agri Hub
            </button>
            <button className="bg-white text-black w-11 h-11 md:w-[46px] md:h-[46px] rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:bg-indigo-50 hover:scale-105 group border border-gray-100 hover:border-indigo-200" title="Ask AI Assistant">
               <svg className="w-[22px] h-[22px] text-indigo-600 group-hover:text-indigo-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
               </svg>
            </button>
          </div>
        </div>

        {/* BOTTOM INFINITE SCROLL BANNER */}
        <div className="z-20 mt-auto pt-6 w-full">
          <div className="w-full bg-white/95 backdrop-blur-md rounded-[2rem] py-4 md:py-5 overflow-hidden relative shadow-2xl border border-white/20">
            <style>
              {`
                .ticker-scroll { display: flex; width: max-content; animation: scroll-ticker 40s linear infinite; }
                .ticker-scroll:hover { animation-play-state: paused; }
                @keyframes scroll-ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
              `}
            </style>
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none rounded-l-[2rem]"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none rounded-r-[2rem]"></div>
            <div className="ticker-scroll">
              <TickerStrip />
              <TickerStrip />
            </div>
          </div>
        </div>
      </div>

      {/* --- NEW SQUARE SQUARISH PRICE BOXES WITH CONTINUOUS SCROLL --- */}
      <div className="w-full max-w-7xl mx-auto mt-8 overflow-hidden relative pb-4">
        
        {/* CSS Animation specifically for this market boxes scroll */}
        <style>
          {`
            .market-scroll-track { 
              display: flex; 
              width: max-content; 
              animation: scroll-market 35s linear infinite; /* 35s is a smooth medium-slow speed */
              gap: 1.25rem; 
            }
            .market-scroll-track:hover { animation-play-state: paused; }
            @keyframes scroll-market { 
              0% { transform: translateX(0); } 
              100% { transform: translateX(-50%); } 
            }
          `}
        </style>

        {/* Smooth Fade Effect on Left & Right Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fbf5eb] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fbf5eb] to-transparent z-10 pointer-events-none"></div>

        {/* Scroll Track Container */}
        <div className="market-scroll-track px-4">
          
          {/* We map the array TWICE to create a seamless infinite loop illusion */}
          {[...marketRates, ...marketRates].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-between bg-white w-36 h-36 rounded-[1.25rem] border border-gray-100 shadow-[2px_4px_15px_rgba(0,0,0,0.05)] p-3.5 hover:shadow-lg transition-shadow cursor-default shrink-0"
            >
              {/* TOP: District Name */}
              <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest w-full text-center border-b border-gray-100 pb-1.5">
                {item.district}
              </span>
              
              {/* CENTER: Crop Name & Price */}
              <div className="flex flex-col items-center justify-center gap-0.5 my-auto">
                <span className="font-extrabold text-gray-800 text-[17px] tracking-tight">{item.crop}</span>
                <span className="text-[19px] font-black text-[#16a34a] drop-shadow-sm">
                  {item.price}<span className="text-[11px] font-bold text-gray-400">/{item.unit}</span>
                </span>
              </div>
              
              {/* BOTTOM: Change Status Indicator */}
              <span className={`text-[10.5px] font-bold px-2.5 py-1 rounded-md w-full text-center tracking-wide ${
                item.status === 'up' ? 'bg-red-50 text-red-600' : 
                item.status === 'down' ? 'bg-green-50 text-[#16a34a]' : 
                'bg-gray-100 text-gray-500'
              }`}>
                {item.change}
              </span>
            </div>
          ))}
          
        </div>
      </div>

      <AuthModal 
        isOpen={authModal.isOpen} 
        initialMode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })} 
      />

    </div>
  );
}