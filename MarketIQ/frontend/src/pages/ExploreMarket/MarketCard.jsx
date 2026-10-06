import React from 'react';

export default function MarketCard({ item }) {
  const isUp = item.trendType === 'up';
  const isDown = item.trendType === 'down';

  return (
    <div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-[#f4f7f6] rounded-[16px] flex items-center justify-center text-2xl shadow-inner">
          {item.icon}
        </div>
        <span className={`text-[11px] font-black px-2.5 py-1 rounded-lg ${
          isUp ? 'text-red-500 bg-red-50' : isDown ? 'text-green-600 bg-green-50' : 'text-gray-500 bg-gray-50'
        }`}>
          {item.trend}
        </span>
      </div>
      
      <h4 className="font-extrabold text-gray-900 text-sm mb-1">{item.name}</h4>
      <p className="text-gray-400 text-[11px] font-semibold mb-3">Wholesale Price / {item.unit}</p>
      
      <div className="flex items-end justify-between border-t border-gray-50 pt-3">
        <p className="text-2xl font-black text-[#0f9d44]">{item.price}</p>
        <p className="text-[10px] font-bold text-gray-400 mb-1">Today</p>
      </div>
    </div>
  );
}