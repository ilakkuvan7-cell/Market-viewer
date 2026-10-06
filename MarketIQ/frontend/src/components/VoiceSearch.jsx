import React, { useState } from 'react';

export default function VoiceSearch({ searchQuery, setSearchQuery, onSearch }) {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support voice search. Please try in Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN'; // Tamil-la pesurathunaalum 'ta-IN' nu maathikalam
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
    <div className="mt-6 flex items-center bg-white rounded-full p-2 w-full max-w-[34rem] shadow-2xl">
      <svg className="w-6 h-6 text-black ml-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={isListening ? "Listening..." : "Search Crops.."} 
        className="flex-1 bg-transparent border-none outline-none px-2 text-black text-base md:text-lg font-bold w-full placeholder-gray-400" 
      />

      {/* Microphone Button */}
      <button 
        onClick={handleVoiceSearch}
        title="Search by Voice"
        className={`p-2.5 rounded-full mr-2 transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
        </svg>
      </button>

      <button onClick={onSearch} className="bg-[#009e25] hover:bg-[#00821e] text-white px-6 md:px-7 py-2.5 md:py-3 rounded-full font-bold text-base md:text-lg transition shadow-md">
        Search
      </button>
    </div>
  );
}