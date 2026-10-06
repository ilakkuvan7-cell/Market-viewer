import React from 'react';

export default function ThemeLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full font-sans overflow-hidden" 
         style={{ 
             backgroundImage: "url('/images/theme-bg.png')",
             // "cover"-a thookitu "100% 100%" nu maathiyachu
             backgroundSize: "100% 100%", 
             backgroundPosition: "center",
             backgroundAttachment: "fixed", 
             backgroundColor: '#f8f5ee', 
             fontFamily: "'Inter', sans-serif" 
         }}>
      
      {/* Website Dynamic Content */}
      <div className="relative z-10">
        {children}
      </div>
      
    </div>
  );
}