import React from 'react';

export default function AnalyticsCard() {
  return (
    <div className="bg-white rounded-[24px] p-6 md:p-8 border border-gray-100 shadow-[0_2px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300 relative overflow-hidden flex flex-col h-full">
      
      {/* TOP SECTION: Text & Graphic */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        
        {/* Left Side: Content */}
        <div className="flex-1 z-10">
          {/* Number Badge */}
          <div className="w-10 h-10 bg-green-50 text-green-700 font-bold text-lg rounded-xl flex items-center justify-center mb-4">
            01
          </div>
          
          <h2 className="text-[22px] md:text-2xl font-black text-gray-900 leading-tight flex items-center gap-2">
            Market & Price <br /> Analytics
            <span className="text-green-500 text-xl">📈</span>
          </h2>
          
          <p className="text-[#16a34a] font-bold text-sm mt-2">
            Market Intelligence
          </p>
          
          <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-[240px] font-medium">
            Real-time market data, analytics and AI insights to help you make smart decisions.
          </p>
        </div>

        {/* Right Side: Mobile App Mockup Graphic (CSS Drawn) */}
        <div className="hidden md:block absolute right-4 top-4 w-48 h-64 bg-white border-[5px] border-gray-50 rounded-[2rem] shadow-xl overflow-hidden transform rotate-2">
          {/* Mockup Header */}
          <div className="px-3 pt-4 pb-2 border-b border-gray-50">
            <div className="text-[10px] text-gray-400 font-bold">Tomato</div>
            <div className="text-[8px] text-gray-400">Kolar Mandi, Karnataka</div>
            <div className="mt-2 flex justify-between items-end">
              <div className="text-lg font-black text-gray-800">₹2,450</div>
              <div className="text-[8px] text-green-500 font-bold bg-green-50 px-1.5 py-0.5 rounded">▲ 3.2%</div>
            </div>
          </div>
          {/* Mockup Chart Area */}
          <div className="p-3 h-24 relative flex items-end justify-center overflow-hidden">
            <svg className="w-full h-full text-green-500" viewBox="0 0 100 50" fill="none" preserveAspectRatio="none">
              <path d="M0 40 Q 10 30, 20 35 T 40 20 T 60 25 T 80 10 T 100 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M0 40 Q 10 30, 20 35 T 40 20 T 60 25 T 80 10 T 100 5 L 100 50 L 0 50 Z" fill="currentColor" fillOpacity="0.1" />
            </svg>
          </div>
          {/* Mockup Bottom Stats */}
          <div className="flex justify-between px-3 pt-2">
            <div className="text-center"><div className="text-[8px] text-gray-400">High</div><div className="text-[10px] text-green-600 font-bold">₹2,650</div></div>
            <div className="text-center"><div className="text-[8px] text-gray-400">Average</div><div className="text-[10px] text-gray-600 font-bold">₹2,300</div></div>
            <div className="text-center"><div className="text-[8px] text-gray-400">Low</div><div className="text-[10px] text-red-500 font-bold">₹2,050</div></div>
          </div>
        </div>
      </div>

      {/* Bottom 4 Options Grid (Tactile Button Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 pt-5 border-t border-gray-100 mt-4">
        
        <button className="w-full text-left flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#f8fafc] border-2 border-gray-100 hover:border-green-400 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 group/btn">
          <div className="w-12 h-12 rounded-xl bg-green-50/80 text-green-700 flex items-center justify-center text-xl group-hover/btn:bg-green-100 group-hover/btn:scale-110 transition-all">🏛️</div>
          <div>
            <h4 className="font-black text-gray-900 text-[14.5px] mb-0.5 group-hover/btn:text-green-700 transition-colors">Real-Time Mandi Prices</h4>
            <p className="text-[12px] text-gray-500 font-semibold">District / Mandi Live Filter</p>
          </div>
        </button>

        <button className="w-full text-left flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#f8fafc] border-2 border-gray-100 hover:border-green-400 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 group/btn">
          <div className="w-12 h-12 rounded-xl bg-green-50/80 text-green-700 flex items-center justify-center text-xl group-hover/btn:bg-green-100 group-hover/btn:scale-110 transition-all">📊</div>
          <div>
            <h4 className="font-black text-gray-900 text-[14.5px] mb-0.5 group-hover/btn:text-green-700 transition-colors">Price Trend Graphs</h4>
            <p className="text-[12px] text-gray-500 font-semibold">Historical Visual Charts</p>
          </div>
        </button>

        <button className="w-full text-left flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#f8fafc] border-2 border-gray-100 hover:border-green-400 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 group/btn">
          <div className="w-12 h-12 rounded-xl bg-green-50/80 text-green-700 flex items-center justify-center text-xl group-hover/btn:bg-green-100 group-hover/btn:scale-110 transition-all">⚖️</div>
          <div>
            <h4 className="font-black text-gray-900 text-[14.5px] mb-0.5 group-hover/btn:text-green-700 transition-colors">High / Low / Average</h4>
            <p className="text-[12px] text-gray-500 font-semibold">Exact Daily Market Stats</p>
          </div>
        </button>

        <button className="w-full text-left flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#f8fafc] border-2 border-gray-100 hover:border-green-400 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 group/btn">
          <div className="w-12 h-12 rounded-xl bg-green-50/80 text-green-700 flex items-center justify-center text-xl group-hover/btn:bg-green-100 group-hover/btn:scale-110 transition-all">🤖</div>
          <div>
            <h4 className="font-black text-gray-900 text-[14.5px] mb-0.5 group-hover/btn:text-green-700 transition-colors">AI Price Forecasting</h4>
            <p className="text-[12px] text-gray-500 font-semibold">Machine Learning Predictions</p>
          </div>
        </button>

      </div>
      
    </div> // MISSING </div> added here
  ); // MISSING ); added here
} // MISSING } added here