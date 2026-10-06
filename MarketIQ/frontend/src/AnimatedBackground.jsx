import React, { useEffect, useState } from 'react';

export default function AnimatedBackground({ children }) {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Icons: Tractor, Leaves, Bird, Wheat
    const icons = [
      '<path d="M7 15a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zm-8-4h6l1.5-3H8v3zm-3 2h14v-2l-2-4H8V4H4v9H3v2h3v2z"/>', // Tractor
      '<path d="M17 5.92L9 12v8l8-6.08V5.92zM7 9.08V2.92L15 9l-8 6.08z"/>', // Leaf
      '<path d="M22 12c-2-2-4-2-6 0l-4 4-4-4c-2-2-4-2-6 0v2c2-2 4-2 6 0l4 4 4-4c2-2 4-2 6 0v-2z"/>', // Bird
      '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-11v6h2v-6h3l-4-4-4 4h3z"/>' // Plant
    ];

    // Generate 25 random floating items
    const generatedElements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      left: `${Math.random() * 100}%`,
      duration: `${25 + Math.random() * 30}s`, // Slow, smooth animation
      delay: `${Math.random() * 15}s`,
      size: `${30 + Math.random() * 40}px`,
      opacity: 0.03 + (Math.random() * 0.04) // Very subtle, won't disturb text
    }));
    setElements(generatedElements);

    // Add Animation CSS
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatUp {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: var(--target-opacity); }
        90% { opacity: var(--target-opacity); }
        100% { transform: translateY(-20vh) rotate(360deg); opacity: 0; }
      }
      .bg-anim-element {
        position: fixed; /* Fixed so it applies to whole scrollable page */
        animation: floatUp linear infinite;
        pointer-events: none;
        z-index: 0;
        color: #1e7a36; /* Dark green icon color */
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="relative min-h-screen w-full font-sans" 
         style={{ 
             // Premium Soft Agri Background Mode
             background: 'linear-gradient(135deg, #f2f7f4 0%, #e6efe8 100%)',
             fontFamily: "'Inter', sans-serif" 
         }}>
      
      {/* Animated Floating Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {elements.map((el) => (
          <svg key={el.id} className="bg-anim-element"
               style={{ 
                 left: el.left, 
                 animationDuration: el.duration, 
                 animationDelay: el.delay, 
                 width: el.size, 
                 height: el.size,
                 '--target-opacity': el.opacity
               }} 
               viewBox="0 0 24 24" fill="currentColor" dangerouslySetInnerHTML={{__html: el.icon}} />
        ))}
      </div>
      
      {/* Website Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
      
    </div>
  );
}