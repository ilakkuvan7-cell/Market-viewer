import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#051405] text-white py-12 md:py-16 relative overflow-hidden mt-10">
      {/* Top border subtle green glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4ade80]/40 to-transparent"></div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          
          {/* BRAND COLUMN WITH EXACT SAME LOGO */}
          <div className="flex flex-col items-start">
            
            <div className="flex items-center gap-3 cursor-pointer group mb-6">
              <div className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] bg-gradient-to-br from-[#00b09b] to-[#96c93d] rounded-[14px] flex items-center justify-center shadow-lg shadow-green-900/40 transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 relative overflow-hidden">
                {/* Subtle shine effect */}
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

            <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed font-semibold mb-6">
              Track live market prices, compare opportunities across districts, and make confident selling decisions with trusted insights.
            </p>

            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              {['Twitter', 'Facebook', 'LinkedIn', 'YouTube'].map((platform, i) => (
                <div key={i} title={platform} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#a3e635] hover:text-black hover:scale-110 transition-all duration-300 cursor-pointer">
                   {/* Dummy dot for icon spacing */}
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS 1 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Product</h4>
            <ul className="space-y-4">
              {['Live Market Trends', 'District / Mandi Filter', 'Nearby Mandi Finder', 'Ask AI Assistant', '360° Agri Hub'].map((link, i) => (
                <li key={i} className="text-gray-400 hover:text-[#a3e635] text-[14px] md:text-[15px] font-semibold cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-[#a3e635] transition-colors"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS 2 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Farmer Tools</h4>
            <ul className="space-y-4">
              {['Soil Health Analysis', 'Crop Recommendation', 'Transport Availability', 'Govt Schemes & Subsidy'].map((link, i) => (
                <li key={i} className="text-gray-400 hover:text-[#a3e635] text-[14px] md:text-[15px] font-semibold cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-[#a3e635] transition-colors"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS 3 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal & Support</h4>
            <ul className="space-y-4">
              {['Contact Us', 'Privacy Policy', 'Terms of Service', 'Help Center'].map((link, i) => (
                <li key={i} className="text-gray-400 hover:text-[#a3e635] text-[14px] md:text-[15px] font-semibold cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-[#a3e635] transition-colors"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[13px] md:text-sm font-bold">
            © 2026 Market IQ. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[13px] md:text-sm font-bold text-gray-500">
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}