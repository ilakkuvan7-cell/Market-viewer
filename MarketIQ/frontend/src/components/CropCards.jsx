import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Ithu romba mukkiyam
import DashboardHeader from './DashboardHeader'; 

export default function CropCards({ selectedDistrict, setSelectedDistrict }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate(); // 👈 Navigation function-a ready panrom

  // --- FULL CROPS DATA WITH CATEGORIES ---
  const cropsList = [
    { id: 1, nameEn: "Agathi Leaves", nameTa: "அகத்திக் கீரை", category: "Greens", img: "/images/Crop images/agathi-leaves.jpg" },
    { id: 2, nameEn: "Amaranth Leaves", nameTa: "தண்டுக்கீரை", category: "Greens", img: "/images/Crop images/amaranth.jpg" },
    { id: 5, nameEn: "Arai Keerai", nameTa: "அரைக்கீரை", category: "Greens", img: "/images/Crop images/arai-keerai.jpg" },
    { id: 28, nameEn: "Coriander Leaves", nameTa: "கொத்தமல்லி இலை", category: "Greens", img: "/images/Crop images/coriander-leaves.jpg" },
    { id: 32, nameEn: "Curry Leaves", nameTa: "கறிவேப்பிலை", category: "Greens", img: "/images/Crop images/curry-leaves.jpg" },
    { id: 49, nameEn: "Mint", nameTa: "புதினா", category: "Greens", img: "/images/Crop images/mint.jpg" },
    { id: 3, nameEn: "Amla", nameTa: "நெல்லிக்காய்", category: "Fruits", img: "/images/Crop images/Amla.jpg" },
    { id: 4, nameEn: "Apple", nameTa: "ஆப்பிள்", category: "Fruits", img: "/images/Crop images/apple.jpg" },
    { id: 8, nameEn: "Banana", nameTa: "வாழைப்பழம்", category: "Fruits", img: "/images/Crop images/banana.jpg" },
    { id: 10, nameEn: "Banana (Red)", nameTa: "செவ்வாழை", category: "Fruits", img: "/images/Crop images/Banana-Red.jpg" },
    { id: 39, nameEn: "Grapes", nameTa: "திராட்சை", category: "Fruits", img: "/images/Crop images/grapes.jpg" },
    { id: 42, nameEn: "Guava", nameTa: "கொய்யா", category: "Fruits", img: "/images/Crop images/guava.jpg" },
    { id: 44, nameEn: "Jamun", nameTa: "நாவல் பழம்", category: "Fruits", img: "/images/Crop images/Jamun.jpg" },
    { id: 48, nameEn: "Mango", nameTa: "மாம்பழம்", category: "Fruits", img: "/images/Crop images/mango.jpg" },
    { id: 50, nameEn: "Muskmelon", nameTa: "முலாம்பழம்", category: "Fruits", img: "/images/Crop images/muskmelon.jpg" },
    { id: 52, nameEn: "Orange", nameTa: "ஆரஞ்சு", category: "Fruits", img: "/images/Crop images/orange.jpg" },
    { id: 54, nameEn: "Papaya", nameTa: "பப்பாளி", category: "Fruits", img: "/images/Crop images/papaya.jpg" },
    { id: 57, nameEn: "Pomegranate", nameTa: "மாதுளை", category: "Fruits", img: "/images/Crop images/pomegranate.jpg" },
    { id: 68, nameEn: "Sweet Lime", nameTa: "சாத்துக்குடி", category: "Fruits", img: "/images/Crop images/Sweet-Lime.jpg" },
    { id: 73, nameEn: "Watermelon", nameTa: "தர்பூசணி", category: "Fruits", img: "/images/Crop images/watermelon.jpg" },
    { id: 7, nameEn: "Ash Gourd", nameTa: "சாம்பல் பூசணி", category: "Vegetables", img: "/images/Crop images/ash-gourd.jpg" },
    { id: 9, nameEn: "Banana (Green)", nameTa: "வாழைக்காய்", category: "Vegetables", img: "/images/Crop images/Banana - Green.jpg" },
    { id: 11, nameEn: "Beans", nameTa: "பீன்ஸ்", category: "Vegetables", img: "/images/Crop images/Beans.jpg" },
    { id: 12, nameEn: "Beetroot", nameTa: "பீட்ரூட்", category: "Vegetables", img: "/images/Crop images/beetroot.jpg" },
    { id: 13, nameEn: "Bitter Gourd", nameTa: "பாகற்காய்", category: "Vegetables", img: "/images/Crop images/Bitter-gourd.jpg" },
    { id: 15, nameEn: "Bottle Gourd", nameTa: "சுரைக்காய்", category: "Vegetables", img: "/images/Crop images/bottle-gourd.jpg" },
    { id: 16, nameEn: "Brinjal", nameTa: "கத்தரிக்காய்", category: "Vegetables", img: "/images/Crop images/brinjal.jpg" },
    { id: 17, nameEn: "Cabbage", nameTa: "முட்டைக்கோஸ்", category: "Vegetables", img: "/images/Crop images/cabbage.jpg" },
    { id: 19, nameEn: "Carrot", nameTa: "கேரட்", category: "Vegetables", img: "/images/Crop images/carrot.jpg" },
    { id: 22, nameEn: "Cauliflower", nameTa: "காலிபிளவர்", category: "Vegetables", img: "/images/Crop images/cauliflower.jpg" },
    { id: 24, nameEn: "Chow Chow", nameTa: "சௌ சௌ", category: "Vegetables", img: "/images/Crop images/chow-chow.jpg" },
    { id: 26, nameEn: "Colacasia", nameTa: "சேப்பங்கிழங்கு", category: "Vegetables", img: "/images/Crop images/Colacasia.jpg" },
    { id: 30, nameEn: "Cowpea", nameTa: "காராாமணி", category: "Vegetables", img: "/images/Crop images/cowpea.jpg" },
    { id: 31, nameEn: "Cucumber", nameTa: "வெள்ளரி", category: "Vegetables", img: "/images/Crop images/cucumber.jpg" },
    { id: 33, nameEn: "Drumstick", nameTa: "முருங்கை", category: "Vegetables", img: "/images/Crop images/drumstick.jpg" },
    { id: 36, nameEn: "Garlic", nameTa: "பூண்டு", category: "Vegetables", img: "/images/Crop images/garlic.jpg" },
    { id: 51, nameEn: "Onion", nameTa: "வெங்காயம்", category: "Vegetables", img: "/images/Crop images/onion.jpg" },
    { id: 58, nameEn: "Potato", nameTa: "உருளைக்கிழங்கு", category: "Vegetables", img: "/images/Crop images/potato.jpg" },
    { id: 59, nameEn: "Ridge Gourd", nameTa: "பீர்கங்காய்", category: "Vegetables", img: "/images/Crop images/ridge-gourd.jpg" },
    { id: 60, nameEn: "Small Onion", nameTa: "சின்ன வெங்காயம்", category: "Vegetables", img: "/images/Crop images/Small Onion.jpg" },
    { id: 61, nameEn: "Snake Gourd", nameTa: "புடலங்காய்", category: "Vegetables", img: "/images/Crop images/snake-gourd.jpg" },
    { id: 64, nameEn: "Spring Onion", nameTa: "வெங்காயத்தாள்", category: "Vegetables", img: "/images/Crop images/spring-onion.jpg" },
    { id: 67, nameEn: "Sweet Potato", nameTa: "சர்க்கரை வள்ளிக்கிழங்கு", category: "Vegetables", img: "/images/Crop images/Sweet Potato.jpg" },
    { id: 70, nameEn: "Tapioca", nameTa: "மரவள்ளிக்கிழங்கு", category: "Vegetables", img: "/images/Crop images/Tapioca.jpg" },
    { id: 71, nameEn: "Tomato", nameTa: "தக்காளி", category: "Vegetables", img: "/images/Crop images/tomato.jpg" },
    { id: 74, nameEn: "Yam", nameTa: "சேனைக்கிழங்கு", category: "Vegetables", img: "/images/Crop images/Yam.jpg" },
    { id: 18, nameEn: "Cardamom", nameTa: "ஏலக்காய்", category: "Spices", img: "/images/Crop images/cardamom.jpg" },
    { id: 23, nameEn: "Chilli", nameTa: "மிளகாய்", category: "Spices", img: "/images/Crop images/chilli.jpg" },
    { id: 27, nameEn: "Coriander Seeds", nameTa: "மல்லி விதை", category: "Spices", img: "/images/Crop images/coriander Seeds.jpg" },
    { id: 38, nameEn: "Ginger", nameTa: "இஞ்சி", category: "Spices", img: "/images/Crop images/ginger.jpg" },
    { id: 69, nameEn: "Tamarind", nameTa: "புளி", category: "Spices", img: "/images/Crop images/Tamarind.jpg" },
    { id: 72, nameEn: "Turmeric", nameTa: "மஞ்சள்", category: "Spices", img: "/images/Crop images/turmeric.jpg" },
    { id: 14, nameEn: "Black Gram", nameTa: "உளுந்து", category: "Grains & Pulses", img: "/images/Crop images/black-gram.jpg" },
    { id: 34, nameEn: "Finger Millet", nameTa: "கேழ்வரகு", category: "Grains & Pulses", img: "/images/Crop images/finger-millet.jpg" },
    { id: 35, nameEn: "Foxtail Millet", nameTa: "தினை", category: "Grains & Pulses", img: "/images/Crop images/foxtail-millet.jpg" },
    { id: 40, nameEn: "Green Gram", nameTa: "பச்சை பயறு", category: "Grains & Pulses", img: "/images/Crop images/green-gram.jpg" },
    { id: 43, nameEn: "Horse Gram", nameTa: "கொள்ளு", category: "Grains & Pulses", img: "/images/Crop images/horse-gram.jpg" },
    { id: 45, nameEn: "Kodo Millet", nameTa: "வரகு", category: "Grains & Pulses", img: "/images/Crop images/kodo-millet.jpg" },
    { id: 46, nameEn: "Little Millet", nameTa: "சாமை", category: "Grains & Pulses", img: "/images/Crop images/little-millet.jpg" },
    { id: 47, nameEn: "Maize", nameTa: "மக்காச்சோளம்", category: "Grains & Pulses", img: "/images/Crop images/maize.jpg" },
    { id: 53, nameEn: "Paddy", nameTa: "நெல்", category: "Grains & Pulses", img: "/images/Crop images/paddy.jpg" },
    { id: 55, nameEn: "Pearl Millet", nameTa: "கம்பு", category: "Grains & Pulses", img: "/images/Crop images/pearl-millet.jpg" },
    { id: 56, nameEn: "Pigeon Pea", nameTa: "துவரம் பருப்பு", category: "Grains & Pulses", img: "/images/Crop images/pigeon-pea.jpg" },
    { id: 62, nameEn: "Sorghum", nameTa: "சோளம்", category: "Grains & Pulses", img: "/images/Crop images/sorghum.jpg" },
    { id: 63, nameEn: "Soybean", nameTa: "சோயாபீன்", category: "Grains & Pulses", img: "/images/Crop images/soybean.jpg" },
    { id: 66, nameEn: "Sweet Corn", nameTa: "இனிப்பு மக்காச்சோளம்", category: "Grains & Pulses", img: "/images/Crop images/Sweet Corn.jpg" },
    { id: 6, nameEn: "Arecanut", nameTa: "பாக்கு", category: "Commercial", img: "/images/Crop images/Arecanut.jpg" },
    { id: 20, nameEn: "Cashew", nameTa: "முந்திரி", category: "Commercial", img: "/images/Crop images/cashew.jpg" },
    { id: 21, nameEn: "Castor", nameTa: "ஆமணக்கு", category: "Commercial", img: "/images/Crop images/castor.jpg" },
    { id: 25, nameEn: "Coconut", nameTa: "தேங்காய்", category: "Commercial", img: "/images/Crop images/coconut.jpg" },
    { id: 29, nameEn: "Cotton", nameTa: "பருத்தி", category: "Commercial", img: "/images/Crop images/cotton.jpg" },
    { id: 37, nameEn: "Gingelly", nameTa: "எள்", category: "Commercial", img: "/images/Crop images/Gingelly.jpg" },
    { id: 41, nameEn: "Groundnut", nameTa: "நிலக்கடலை", category: "Commercial", img: "/images/Crop images/groundnut.jpg" },
    { id: 65, nameEn: "Sunflower", nameTa: "சூரியகாந்தி", category: "Commercial", img: "/images/Crop images/sunflower.jpg" }
  ];

  const categories = ["All", "Vegetables", "Fruits", "Grains & Pulses", "Greens", "Spices", "Commercial"];

  const filteredCrops = activeCategory === 'All' 
    ? cropsList 
    : cropsList.filter(crop => crop.category === activeCategory);

  return (
    <section id="market-section" className="relative w-full pt-2 pb-10 md:pb-14 bg-transparent overflow-hidden">
      {/* BACKGROUND DECORATIVE ICONS */}
      <div className="absolute left-2 lg:left-8 top-1/4 opacity-40 pointer-events-none hidden xl:block">
        <svg width="120" height="200" viewBox="0 0 100 200" fill="none" stroke="#5d4037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
           <path d="M10,50 C30,30 50,50 70,30 M20,70 Q40,40 60,70 M10,120 L80,120 M15,130 L75,130 M10,150 Q45,120 80,150 M10,165 Q45,135 80,165" />
           <circle cx="20" cy="40" r="2" fill="#5d4037" />
           <circle cx="60" cy="35" r="2" fill="#5d4037" />
           <circle cx="40" cy="55" r="2" fill="#5d4037" />
        </svg>
      </div>
      <div className="absolute right-2 lg:right-8 top-1/4 opacity-40 pointer-events-none hidden xl:block">
        <svg width="100" height="250" viewBox="0 0 100 250" fill="none" stroke="#5d4037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
           <path d="M50,40 C70,40 80,60 70,80 C50,100 30,80 30,60 C40,40 50,40 50,40 Z" /> 
           <path d="M45,35 Q50,25 55,35 M50,38 L50,30" /> 
           <path d="M40,120 C60,110 80,130 70,160 C50,180 20,160 30,130 C30,120 40,120 40,120 Z" /> 
           <path d="M45,115 L50,122 M55,115 L50,122" />
           <path d="M40,200 C50,190 70,195 75,210 C80,225 60,230 50,225 C35,215 30,205 40,200 Z" /> 
        </svg>
      </div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        <DashboardHeader 
           selectedDistrict={selectedDistrict}
           setSelectedDistrict={setSelectedDistrict}
        />

        {/* CATEGORY FILTER TABS */}
        <div className="flex overflow-x-auto gap-3 pb-6 mb-2 mt-4 no-scrollbar scroll-smooth">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm border
                ${activeCategory === category 
                  ? 'bg-[#10b981] text-white border-[#10b981] shadow-md transform scale-105' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-green-50 hover:text-green-700 hover:border-green-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* COMPACT CROP CARDS GRID (FILTERED) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {filteredCrops.length > 0 ? (
            filteredCrops.map((crop) => (
              <div 
                key={crop.id} 
                className="bg-white rounded-[1.25rem] md:rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden border border-gray-100"
              >
                <div className="relative h-32 md:h-36 w-full bg-gray-100 overflow-hidden">
                  <img 
                    src={crop.img} 
                    alt={crop.nameEn} 
                    onError={(e) => { e.target.src = 'https://placehold.co/400x400/f0fdf4/166534?text=No+Image'; }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none">
                    <svg className="w-full h-8 md:h-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
                      <path fill="#ffffff" d="M0,160L80,176C160,192,320,224,480,218.7C640,213,800,171,960,165.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 flex-1 flex flex-col relative bg-white">
                  <div className="absolute -top-6 left-4 w-9 h-9 bg-[#ecfdf5] rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 transition-transform group-hover:-translate-y-1">
                    <svg className="w-3.5 h-3.5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>

                  <div className="mt-3 mb-4">
                    <h3 className="text-[1rem] md:text-[1.05rem] font-bold text-gray-800 leading-tight truncate">{crop.nameEn}</h3>
                    <p className="text-[0.8rem] md:text-[0.85rem] font-medium text-gray-500 mt-0.5 truncate">{crop.nameTa}</p>
                  </div>

                  <div className="mt-auto">
                    {/* 👇 INGA THAAN ONCLICK ACTION POTRUKKEN! Ithu next page-ku data-voda pogum! */}
                    <button 
                      onClick={() => navigate('/crop-details', { state: { crop, selectedDistrict } })}
                      className="w-full flex items-center justify-between bg-[#f0fdf4] hover:bg-[#dcfce7] text-[#166534] px-3.5 py-2 rounded-xl font-bold text-[0.75rem] transition-colors group/btn cursor-pointer"
                    >
                      View Prices
                      <div className="bg-[#22c55e] group-hover/btn:bg-[#16a34a] text-white p-1 rounded-full transition-colors shadow-sm">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center text-gray-500 font-medium">
              No crops found in this category.
            </div>
          )}
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}