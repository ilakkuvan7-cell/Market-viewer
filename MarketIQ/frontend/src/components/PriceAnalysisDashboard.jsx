import React, { useEffect, useRef, useState, useMemo } from 'react';

const ScrollReveal = ({ children, delayClass = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.15 }); 
    
    if(domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-[1200ms] ease-out ${delayClass} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {children}
    </div>
  );
};

export default function PriceAnalysisDashboard({ crop }) {
  const cropName = crop?.nameEn || "Product";
  
  // 🔥 1. New State for Time Range Buttons & Groww-style Hover
  const [timeRange, setTimeRange] = useState('Daily');
  const [hoverIndex, setHoverIndex] = useState(null); // Tracks which point the user is touching/hovering

  // 🧠 DYNAMIC DATA GENERATION BASED ON TIME RANGE
  const { pricePoints, labels, tradeVolume, stats, pointCoords, maxPrice } = useMemo(() => {
    const basePrice = cropName.length > 5 ? (cropName.length * 4) + 12 : 35;
    
    // Adjust data length and labels based on selected button
    let length = 7;
    let xAxisLabels = [];
    let variance = 1;

    if (timeRange === 'Daily') {
      length = 7;
      xAxisLabels = ['Aug 03', 'Aug 04', 'Aug 05', 'Aug 06', 'Aug 07', 'Aug 08', 'Aug 09'];
      variance = 0.2;
    } else if (timeRange === 'Weekly') {
      length = 5;
      xAxisLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'This Week'];
      variance = 0.4;
    } else if (timeRange === 'Monthly') {
      length = 6;
      xAxisLabels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
      variance = 0.6;
    }
    
    // Generate graph points
    const points = Array.from({ length }, (_, i) => {
      const wave = Math.sin(i) * (basePrice * variance); 
      return Math.max(8, Math.floor(basePrice + wave + (Math.random() * 8 - 4)));
    });

    // Generate trade volume
    const volume = Array.from({ length: 23 }, () => parseFloat((Math.random() * 20 + 5).toFixed(1)));

    // Stats
    const current = points[points.length - 1];
    const previous = points[points.length - 2];
    const high = Math.max(...points);
    const low = Math.min(...points);
    const change = current - previous;
    const changePercent = ((change / previous) * 100).toFixed(2);
    
    // 🔥 FIXED CALCULATION LOGIC HERE 🔥
    const totalVolRaw = volume.reduce((a, b) => a + b, 0);
    const totalVol = totalVolRaw.toFixed(1);
    
    const avgPriceRaw = points.reduce((a, b) => a + b, 0) / points.length;
    const avgPrice = avgPriceRaw.toFixed(2);
    
    // Total Value calculation: (Total Volume in KG) * (Average Price) / 1 Lakh
    const totalVal = Math.floor((totalVolRaw * 1000 * avgPriceRaw) / 100000); 

    // X, Y Coordinates for SVG
    const maximumPrice = Math.max(...points) + (timeRange === 'Monthly' ? 20 : 10);
    const coords = points.map((val, i) => ({
      x: (i / (points.length - 1)) * 100,
      y: 100 - ((val / maximumPrice) * 100)
    }));

    return { 
      pricePoints: points, 
      labels: xAxisLabels,
      tradeVolume: volume,
      pointCoords: coords,
      maxPrice: maximumPrice,
      stats: { current, high, low, change, changePercent, isPositive: change >= 0, totalVol, totalVal, avgPrice }
    };
  }, [cropName, timeRange]);

  const generateSmoothPath = () => {
    if (pointCoords.length === 0) return "";
    let d = `M ${pointCoords[0].x} ${pointCoords[0].y}`;
    for (let i = 0; i < pointCoords.length - 1; i++) {
      const curr = pointCoords[i];
      const next = pointCoords[i + 1];
      const cx = curr.x + (next.x - curr.x) / 2; 
      d += ` C ${cx} ${curr.y}, ${cx} ${next.y}, ${next.x} ${next.y}`;
    }
    return d;
  };

  return (
    <div className="w-full bg-[#0d131a] p-4 md:p-6 rounded-3xl font-sans mt-8 shadow-2xl overflow-hidden">
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* ================= LEFT PANEL ================= */}
        <ScrollReveal>
          <div className="bg-[#151c24] border border-[#232d3a] rounded-2xl p-5 flex flex-col relative overflow-hidden h-full">
            
            {/* HEADER */}
            <div className="flex flex-wrap items-start justify-between mb-6 gap-4 z-10">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                  Product Price Graph
                </h2>
                <p className="text-[#64748b] text-[11px] md:text-xs mt-1">Track price trends of selected crop in different markets</p>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="bg-[#1a232f] border border-[#2e3b4e] text-gray-300 text-[11px] md:text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span>{cropName}</span>
                </div>
              </div>
            </div>

            {/* STAT CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 z-10">
              <div className="bg-[#1a232f] border border-[#2e3b4e] p-3 rounded-xl flex flex-col justify-between">
                <span className="text-[#8b9bb4] text-[10px] md:text-[11px] font-semibold">Current Price</span>
                <div className="text-[#22c55e] text-xl md:text-2xl font-bold mt-1">₹{stats.current}<span className="text-[10px] md:text-xs text-[#8b9bb4] font-normal"> /kg</span></div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#64748b] text-[9px] md:text-[10px]">Aug 09, 2026</span>
                  <div className="w-4 h-4 rounded-full bg-[#22c55e]/20 flex items-center justify-center text-[#22c55e] text-[9px]">$</div>
                </div>
              </div>
              <div className="bg-[#1a232f] border border-[#2e3b4e] p-3 rounded-xl flex flex-col justify-between">
                <span className="text-[#8b9bb4] text-[10px] md:text-[11px] font-semibold">Highest Price</span>
                <div className="text-[#3b82f6] text-xl md:text-2xl font-bold mt-1">₹{stats.high}<span className="text-[10px] md:text-xs text-[#8b9bb4] font-normal"> /kg</span></div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#64748b] text-[9px] md:text-[10px]">This Range</span>
                  <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-[9px]">↗</div>
                </div>
              </div>
              <div className="bg-[#1a232f] border border-[#2e3b4e] p-3 rounded-xl flex flex-col justify-between">
                <span className="text-[#8b9bb4] text-[10px] md:text-[11px] font-semibold">Lowest Price</span>
                <div className="text-[#ef4444] text-xl md:text-2xl font-bold mt-1">₹{stats.low}<span className="text-[10px] md:text-xs text-[#8b9bb4] font-normal"> /kg</span></div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#64748b] text-[9px] md:text-[10px]">This Range</span>
                  <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-[9px]">↘</div>
                </div>
              </div>
              <div className="bg-[#1a232f] border border-[#eab308]/30 p-3 rounded-xl flex flex-col justify-between">
                <span className="text-[#8b9bb4] text-[10px] md:text-[11px] font-semibold">Price Change</span>
                <div className={`${stats.isPositive ? 'text-[#eab308]' : 'text-red-400'} text-[15px] md:text-[17px] font-bold mt-1`}>
                  {stats.isPositive ? '+' : ''}₹{stats.change} <span className="text-[9px] md:text-[11px] font-normal">({stats.isPositive ? '+' : ''}{stats.changePercent}%)</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#64748b] text-[9px] md:text-[10px]">vs previous</span>
                  <div className="w-4 h-4 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-[9px]">⚡</div>
                </div>
              </div>
            </div>

            {/* 🔥 2. WORKING BUTTONS FOR TIME RANGE */}
            <div className="flex justify-between items-center mb-4 z-10">
              <span className="text-[#8b9bb4] text-[10px] md:text-xs font-semibold">Price (₹/kg)</span>
              <div className="flex bg-[#1a232f] rounded-lg p-1 border border-[#2e3b4e]">
                {['Daily', 'Weekly', 'Monthly'].map(range => (
                  <button 
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 md:px-5 py-1 text-[10px] md:text-xs font-semibold rounded-md transition-colors ${
                      timeRange === range ? 'bg-[#166534] text-white' : 'text-[#8b9bb4] hover:text-white'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* 🔥 3. GROWW STYLE INTERACTIVE GRAPH */}
            <div className="relative h-[220px] w-full mt-2 mb-6 z-10 group">
              
              {/* Background Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[maxPrice, maxPrice * 0.75, maxPrice * 0.5, maxPrice * 0.25, 0].map((val, i) => (
                  <div key={i} className="flex items-center w-full">
                    <span className="text-[#64748b] text-[10px] w-5 text-right font-medium">{Math.floor(val)}</span>
                    <div className="flex-1 h-px bg-[#2e3b4e]/50 border-b border-dashed border-[#2e3b4e]/30 ml-3"></div>
                  </div>
                ))}
              </div>

              {/* The SVG Smooth Curve */}
              <div className="absolute inset-0 ml-8 pb-3 pointer-events-none">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <path d={generateSmoothPath()} fill="none" stroke="#22c55e" strokeWidth="1.5" filter="url(#glowGreen)" vectorEffect="non-scaling-stroke" className="transition-all duration-500" />
                </svg>

                {/* Static Lowest/Highest/Current Dots (Fade out when hovering) */}
                <div className={`transition-opacity duration-300 ${hoverIndex !== null ? 'opacity-20' : 'opacity-100'}`}>
                  {pointCoords.map((coord, i) => {
                    const val = pricePoints[i];
                    let isLowest = val === stats.low;
                    let isHighest = val === stats.high;
                    let isLast = i === pricePoints.length - 1;

                    if (!isLowest && !isHighest && !isLast) return null;

                    let dotColor = "border-[#22c55e]";
                    if (isLowest) dotColor = "border-[#ef4444]";
                    if (isHighest) dotColor = "border-white";

                    return (
                      <div key={`static-${i}`} className="absolute flex flex-col items-center justify-center z-20 transition-all duration-500" style={{ left: `${coord.x}%`, top: `${coord.y}%`, transform: 'translate(-50%, -50%)' }}>
                        <div className={`w-3 h-3 rounded-full bg-[#151c24] border-[2px] ${dotColor}`}></div>
                        {isLowest && <div className="absolute top-5 bg-[#ef4444] text-white text-[11px] font-bold px-3 py-0.5 rounded shadow-lg">{val}</div>}
                        {isLast && !isLowest && <div className="absolute bottom-5 bg-[#22c55e] text-white text-[12px] font-bold px-2.5 py-1 rounded shadow-lg">{val}</div>}
                        {isHighest && !isLast && <div className="absolute bottom-4 text-gray-200 text-[11px] font-bold whitespace-nowrap">{val}</div>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* INTERACTIVE HOVER/TOUCH SCRUBBER OVERLAY (GROWW STYLE) */}
              <div 
                className="absolute inset-0 ml-8 pb-3 z-30 flex cursor-crosshair"
                onMouseLeave={() => setHoverIndex(null)}
                onTouchEnd={() => setHoverIndex(null)}
              >
                {pricePoints.map((_, i) => (
                  <div 
                    key={`hover-zone-${i}`} 
                    className="flex-1 h-full"
                    onMouseEnter={() => setHoverIndex(i)}
                    onTouchStart={() => setHoverIndex(i)}
                  ></div>
                ))}
              </div>

              {/* ACTIVE HOVER TOOLTIP & LINE */}
              {hoverIndex !== null && (
                <div className="absolute inset-0 ml-8 pb-3 pointer-events-none z-40">
                  {/* Vertical Dashed Line */}
                  <div 
                    className="absolute top-0 bottom-0 border-l-[1.5px] border-dashed border-[#22c55e]/60 transition-all duration-100 ease-out"
                    style={{ left: `${pointCoords[hoverIndex].x}%` }}
                  ></div>
                  
                  {/* Glowing Dot on the Line */}
                  <div 
                    className="absolute w-4 h-4 bg-[#22c55e] rounded-full border-4 border-[#0d131a] shadow-[0_0_12px_#22c55e] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out"
                    style={{ left: `${pointCoords[hoverIndex].x}%`, top: `${pointCoords[hoverIndex].y}%` }}
                  ></div>

                  {/* Price Tooltip Box */}
                  <div 
                    className="absolute bg-[#1a232f] border border-[#2e3b4e] text-white px-3 py-1.5 rounded-lg shadow-2xl transform -translate-x-1/2 -translate-y-full mb-3 transition-all duration-100 ease-out flex flex-col items-center min-w-[70px]"
                    style={{ left: `${pointCoords[hoverIndex].x}%`, top: `${pointCoords[hoverIndex].y}%` }}
                  >
                    <span className="font-bold text-sm text-[#22c55e]">₹{pricePoints[hoverIndex]}</span>
                    <span className="text-[9px] text-[#8b9bb4] mt-0.5">{labels[hoverIndex]}</span>
                    
                    {/* Tooltip Triangle pointer */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-[5px] border-transparent border-t-[#2e3b4e]"></div>
                    <div className="absolute top-[calc(100%-1px)] left-1/2 transform -translate-x-1/2 border-[5px] border-transparent border-t-[#1a232f]"></div>
                  </div>
                </div>
              )}

              {/* X-Axis Labels */}
              <div className="absolute -bottom-5 left-8 right-0 flex justify-between text-[#64748b] text-[10px] font-medium transition-all duration-500">
                {labels.map((label, i) => (
                  <span key={i}>{label}</span>
                ))}
              </div>
            </div>

            {/* INSIGHT CARD */}
            <div className="mt-auto bg-[#12231e] border border-[#166534] rounded-xl p-3 md:p-4 flex gap-3 md:gap-4 items-center z-10">
              <div className="bg-[#166534] p-2 rounded-lg text-white shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <div>
                <h4 className="text-[#22c55e] font-semibold text-xs md:text-sm">Market Insight</h4>
                <p className="text-[#8b9bb4] text-[10px] md:text-xs mt-0.5 md:mt-1 leading-relaxed">
                  {cropName} prices are <span className={stats.isPositive ? 'text-[#22c55e]' : 'text-red-400'}>{stats.changePercent}%</span> {stats.isPositive ? 'higher' : 'lower'} than previous range. 
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ================= RIGHT PANEL ================= */}
        <ScrollReveal delayClass="delay-200">
          <div className="bg-[#151c24] border border-[#232d3a] rounded-2xl p-5 flex flex-col relative overflow-hidden h-full">
            
            {/* HEADER */}
            <div className="flex flex-wrap items-start justify-between mb-6 gap-4 z-10">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012-2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  Trade Chart
                </h2>
                <p className="text-[#64748b] text-[11px] md:text-xs mt-1">Market trade volume and value analytics</p>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="bg-[#1a232f] border border-[#2e3b4e] text-gray-300 text-[11px] md:text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span> {cropName}</span>
                </div>
              </div>
            </div>

            {/* DYNAMIC STAT CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 z-10">
              <div className="bg-[#1a232f] border border-[#166534] p-3 rounded-xl flex flex-col justify-between">
                <span className="text-[#8b9bb4] text-[10px] md:text-[11px] font-semibold">Total Volume</span>
                <div className="text-white text-lg md:text-xl font-bold mt-1">{stats.totalVol} <span className="text-[10px] md:text-xs text-[#8b9bb4] font-normal">Ton</span></div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#64748b] text-[9px] md:text-[10px]">This Range</span>
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[9px]">📦</div>
                </div>
              </div>
              <div className="bg-[#1a232f] border border-[#1e3a8a] p-3 rounded-xl flex flex-col justify-between">
                <span className="text-[#8b9bb4] text-[10px] md:text-[11px] font-semibold">Total Value</span>
                <div className="text-white text-lg md:text-xl font-bold mt-1">₹{stats.totalVal}L</div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#64748b] text-[9px] md:text-[10px]">This Range</span>
                  <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[9px]">₹</div>
                </div>
              </div>
              <div className="bg-[#1a232f] border border-[#2e3b4e] p-3 rounded-xl flex flex-col justify-between">
                <span className="text-[#8b9bb4] text-[10px] md:text-[11px] font-semibold">Total Trades</span>
                <div className="text-white text-lg md:text-xl font-bold mt-1">{Math.floor(stats.totalVol * 12)}</div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#64748b] text-[9px] md:text-[10px]">This Range</span>
                  <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white text-[9px]">🛍️</div>
                </div>
              </div>
              <div className="bg-[#1a232f] border border-[#854d0e] p-3 rounded-xl flex flex-col justify-between">
                <span className="text-[#8b9bb4] text-[10px] md:text-[11px] font-semibold">Avg. Price</span>
                <div className="text-[#eab308] text-lg md:text-xl font-bold mt-1">₹{stats.avgPrice} <span className="text-[10px] md:text-xs text-[#8b9bb4] font-normal">/kg</span></div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#64748b] text-[9px] md:text-[10px]">This Range</span>
                  <div className="w-4 h-4 rounded-full bg-yellow-600 flex items-center justify-center text-white text-[9px]">💰</div>
                </div>
              </div>
            </div>

            {/* CHART CONTROLS */}
            <div className="flex justify-between items-center mb-4 z-10">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-[10px] md:text-[11px] font-semibold text-[#8b9bb4]">
                  <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div> Trade Volume (Ton)
                </div>
                <div className="flex items-center gap-1.5 text-[10px] md:text-[11px] font-semibold text-[#8b9bb4]">
                  <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div> Trade Value (₹)
                </div>
              </div>
            </div>

            {/* BAR CHART */}
            <div className="relative h-[180px] w-full mt-2 z-10">
              <div className="absolute -top-3 left-0 text-[9px] text-[#22c55e] font-bold">Volume (Ton)</div>
              <div className="absolute -top-3 right-0 text-[9px] text-[#3b82f6] font-bold">Value (₹)</div>

              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-4">
                {[30, 25, 20, 15, 10, 5, 0].map((val, i) => (
                  <div key={i} className="flex items-center w-full">
                    <span className="text-[#22c55e]/70 text-[8px] w-4">{val}</span>
                    <div className="flex-1 h-px bg-[#2e3b4e]/30 border-b border-dashed border-[#2e3b4e]/30 mx-1"></div>
                    <span className="text-[#3b82f6]/70 text-[8px] w-4 text-right">{(val/30 * 8).toFixed(0)}L</span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 ml-5 mr-5 pb-4 flex items-end justify-between">
                {tradeVolume.map((vol, i) => {
                  const heightPercent = (vol / 30) * 100;
                  let showLabel = vol > 24 || vol < 8 || i === 0 || i === 4;

                  return (
                    <div key={i} className="relative flex flex-col items-center group h-full justify-end w-full max-w-[8px] sm:max-w-[12px]">
                      <div className="w-full bg-gradient-to-t from-[#166534] to-[#22c55e] rounded-t-[2px] transition-all duration-300" style={{ height: `${heightPercent}%` }}></div>
                      {showLabel && <span className="absolute -top-4 text-[7px] md:text-[8px] text-[#22c55e] font-bold">{vol}</span>}
                      <div className="absolute w-2 h-2 bg-[#3b82f6] border-[1.5px] border-[#0d131a] rounded-full z-10" style={{ bottom: `${(heightPercent * 0.7) + (Math.random() * 10)}%` }}></div>
                    </div>
                  )
                })}
              </div>

              <div className="absolute -bottom-1 left-5 right-5 flex justify-between text-[#64748b] text-[9px]">
                <span>Jul 24</span><span>Jul 29</span><span>Aug 02</span><span>Aug 05</span><span>Aug 07</span><span>Aug 08</span><span>Aug 09</span>
              </div>
            </div>

            {/* BOTTOM STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-6 pt-4 border-t border-[#232d3a] z-10">
              <div className="flex flex-col">
                <span className="text-[#64748b] text-[9px] md:text-[10px] flex items-center gap-1"><span className="text-[#22c55e]">📈</span> Avg. Daily Volume</span>
                <span className="text-white text-xs md:text-sm font-bold mt-1">{(stats.totalVol / 30).toFixed(2)} <span className="text-[#8b9bb4] text-[9px] md:text-[10px] font-normal">Ton</span></span>
              </div>
              <div className="flex flex-col border-l border-[#232d3a] pl-2 md:pl-3">
                <span className="text-[#64748b] text-[9px] md:text-[10px] flex items-center gap-1"><span className="text-[#3b82f6]">📊</span> Avg. Daily Value</span>
                <span className="text-[#3b82f6] text-xs md:text-sm font-bold mt-1">₹{Math.floor(stats.totalVal * 100000 / 30).toLocaleString()}</span>
              </div>
              <div className="flex flex-col md:border-l border-[#232d3a] md:pl-3">
                <span className="text-[#64748b] text-[9px] md:text-[10px] flex items-center gap-1"><span className="text-purple-400">🔥</span> Highest Volume</span>
                <span className="text-purple-400 text-xs md:text-sm font-bold mt-1">{Math.max(...tradeVolume)} <span className="text-[#8b9bb4] text-[9px] md:text-[10px] font-normal">Ton</span></span>
              </div>
              <div className="flex flex-col border-l border-[#232d3a] pl-2 md:pl-3">
                <span className="text-[#64748b] text-[9px] md:text-[10px] flex items-center gap-1"><span className="text-[#eab308]">🏆</span> Highest Value</span>
                <span className="text-[#eab308] text-xs md:text-sm font-bold mt-1">₹{Math.floor(Math.max(...tradeVolume) * stats.high * 1000).toLocaleString()}</span>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}