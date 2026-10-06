import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeLayout from './ThemeLayout'; 
import HeroFrame from './components/HeroFrame'; 
import PriceTicker from './components/PriceTicker'; 
import CropCards from './components/CropCards'; 
import Footer from './components/Footer'; 
import AgriHub from "./pages/AgriHub/AgriHub";
import ExploreMarket from "./pages/ExploreMarket/ExploreMarket"; 
import UserProfile from './components/UserProfile'; 
import CropDetailsPage from './components/CropDetailsPage';


export default function App() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. NAMBA MUKKIYAMANA 3 STATES 
  const [selectedDistrict, setSelectedDistrict] = useState("Coimbatore");
  const [livePrices, setLivePrices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

// 2. REAL GOVT API INTEGRATION 🚀
  useEffect(() => {
    const fetchRealLivePrices = async () => {
      setIsLoading(true);
      
      try {
        const API_KEY = "579b464db66ec23bdd000001858c9717ec444dc1684142bcc185e7b5"; 
        const resourceId = "9ef84268-d588-465a-a308-a864a43d0070"; 
        
        // Puthu Reliable Proxy (AllOrigins)
        const targetUrl = `https://api.data.gov.in/resource/${resourceId}?api-key=${API_KEY}&format=json&filters[district]=${selectedDistrict}&limit=20`;
        const url = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error("API Network error");
        }

        const rawData = await response.json();
        // AllOrigins contents-a string-a tharum, atha JSON-a maathanum
        const data = JSON.parse(rawData.contents); 
        
        if (data && data.records && data.records.length > 0) {
          const formattedData = data.records.map((item, index) => {
            const pricePerKg = (parseInt(item.modal_price) / 100).toFixed(2);
            const randomTrend = (Math.random() * 5).toFixed(1);
            const isUp = Math.random() > 0.5;

            return {
              id: index + 1,
              name: item.commodity,
              market: item.market,
              price: `₹${pricePerKg}`,
              trend: `${isUp ? '+' : '-'}${randomTrend}%`,
              isUp: isUp
            };
          });

          setLivePrices(formattedData);
        } else {
          setLivePrices([]);
        }

      } catch (error) {
        console.error("Failed to fetch live data:", error);
        setLivePrices([]);
      } finally {
        setIsLoading(false);
      }
    };

    if(selectedDistrict) {
      fetchRealLivePrices();
    }
    
  }, [selectedDistrict]);

  return (
    <Router>
      <ThemeLayout>
        <Routes> 
          
          {/* 1. MAIN LANDING PAGE (Home) */}
          <Route 
            path="/" 
            element={
              <div className="flex flex-col w-full overflow-hidden"> 
                <HeroFrame />
                
                <PriceTicker 
                  selectedDistrict={selectedDistrict} 
                  livePrices={livePrices} 
                  isLoading={isLoading} 
                />
                
                <CropCards 
                  selectedDistrict={selectedDistrict} 
                  setSelectedDistrict={setSelectedDistrict}
                  livePrices={livePrices}
                  isLoading={isLoading}
                />
              </div>
            } 
          />

          {/* 2. CROP DETAILS PAGE (Split view with 1s loading) 🔥 */}
          <Route path="/crop-details" element={<CropDetailsPage />} />

          {/* 3. NEW 360° AGRI HUB DASHBOARD PAGE */}
          <Route path="/agri-hub" element={<AgriHub />} />

          {/* 4. EXPLORE MARKET PAGE */}
          <Route path="/explore-market" element={<ExploreMarket />} />
          
          {/* 5. USER PROFILE PAGE */}
          <Route path="/profile" element={<UserProfile />} />
          
        </Routes>

        {/* FOOTER SECTION */}
        <Footer />

      </ThemeLayout>
    </Router>
  );
}