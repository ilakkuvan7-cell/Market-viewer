import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  
  // PUTHU STATE: Profile image & popup toggle pandrathukkaaga
  const [profilePic, setProfilePic] = useState("/images/profile image 1.png");
  const [showImageSelector, setShowImageSelector] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // User-ku Google photo iruntha atha set pannum, illana default farmer 1 irukkum
      if (currentUser?.photoURL) {
        setProfilePic(currentUser.photoURL);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      window.location.href = '/'; 
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const getMemberSince = (creationTime) => {
    if (!creationTime) return "May 2024"; 
    const date = new Date(creationTime);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }); 
  };

  const getLastLogin = (lastSignInTime) => {
    if (!lastSignInTime) return "Active today";
    const date = new Date(lastSignInTime);
    return `Logged in ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`;
  };

  return (
    <div 
      className="min-h-screen bg-[#f4f7f6] py-8 md:py-10 flex justify-center items-start px-4 sm:px-6 lg:px-8" 
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');`}
      </style>

      {/* MAIN WRAPPER: 2 COLUMNS (SIDEBAR + PROFILE CONTENT) */}
      <div className="max-w-[1350px] w-full flex flex-col lg:flex-row gap-6 relative z-10">
        
        {/* ========================================= */}
        {/* 1. LEFT SIDEBAR NAVIGATION                */}
        {/* ========================================= */}
        <aside className="hidden lg:flex flex-col w-[280px] bg-white rounded-[2rem] shadow-sm border border-gray-100 p-5 shrink-0 h-max sticky top-10">
          
          {/* Top Menu Options */}
          <nav className="flex flex-col gap-1.5 w-full">
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[14.5px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              Dashboard
            </div>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[14.5px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              Home
            </div>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[14.5px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              About
            </div>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[14.5px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Features
            </div>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[14.5px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              Market
            </div>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[14.5px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
              Weather
            </div>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[14.5px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              Contact
            </div>
          </nav>

          <hr className="my-3 border-gray-100" />

          {/* Account Settings Menu */}
          <nav className="flex flex-col gap-1.5 w-full">
            {/* Active Profile Tab */}
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl font-extrabold text-[14.5px] bg-[#f0fdf4] text-[#007022] cursor-pointer transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              Profile
            </div>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[14.5px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Settings
            </div>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[14.5px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              Notifications
            </div>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[14.5px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Help & Support
            </div>
          </nav>

          <hr className="my-4 border-gray-100" />

          {/* Logout Button */}
          <button onClick={handleLogout} className="w-full flex items-center justify-start gap-4 px-5 py-3.5 rounded-[12px] font-extrabold text-[14.5px] text-[#007022] border-2 border-[#007022]/20 hover:bg-green-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Log Out
          </button>

          {/* Bottom Banner */}
          <div className="mt-8 bg-[#f2fbf5] rounded-2xl p-4 flex items-center gap-3 border border-green-50">
            <div className="text-3xl">🌱</div>
            <div>
              <p className="font-extrabold text-[13px] text-gray-900 leading-tight">Grow Smart,</p>
              <p className="font-extrabold text-[13px] text-gray-900 leading-tight">Earn More.</p>
            </div>
          </div>
        </aside>

        {/* ========================================= */}
        {/* 2. RIGHT SIDE: MAIN PROFILE CONTENT       */}
        {/* ========================================= */}
        <main className="flex-1 bg-white rounded-[2rem] shadow-sm border border-gray-100 flex flex-col overflow-hidden pb-12 w-full">
          
          {/* DARK HEADER (COVER + PROFILE DETAILS) */}
          <div className="relative w-full h-[220px] md:h-[240px] bg-[#1a2e1d] flex flex-col justify-center px-8 md:px-12">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
              alt="Farm Cover" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between w-full gap-6">
              
              <div className="flex flex-col md:flex-row items-center md:items-center gap-6 w-full">
                
                {/* Profile Avatar with Popup feature 🚀 */}
                <div className="relative flex-shrink-0">
                  <img 
                    src={profilePic} 
                    alt="Profile"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = '/images/profile image 1.png'; 
                    }} 
                    className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full border-4 border-[#10b981] shadow-lg object-cover bg-white"
                  />
                  
                  {/* Camera Button (Click panna popup open aagum) */}
                  <button 
                    onClick={() => setShowImageSelector(!showImageSelector)}
                    className="absolute bottom-1 right-1 bg-green-700 p-2 rounded-full border-2 border-white text-white hover:bg-green-600 transition z-10"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </button>

                  {/* SELECT IMAGE POPUP (Dropdown maathiri) */}
                  {showImageSelector && (
                    <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 md:left-full md:-translate-x-10 bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] border border-green-100 p-4 z-50 flex flex-col gap-3 min-w-[200px] animate-fade-in">
                      <p className="text-xs font-bold text-gray-500 text-center uppercase tracking-wider">Choose Avatar</p>
                      <div className="flex gap-4 justify-center">
                        {/* Option 1 */}
                        <div 
                          onClick={() => { setProfilePic("/images/profile image 1.png"); setShowImageSelector(false); }}
                          className="cursor-pointer hover:scale-105 transition-transform"
                        >
                          <img src="/images/profile image 1.png" className="w-16 h-16 rounded-full object-cover border-2 border-transparent hover:border-green-500" alt="Male Farmer"/>
                        </div>
                        {/* Option 2 */}
                        <div 
                          onClick={() => { setProfilePic("/images/profile image 2.png"); setShowImageSelector(false); }}
                          className="cursor-pointer hover:scale-105 transition-transform"
                        >
                          <img src="/images/profile image 2.png" className="w-16 h-16 rounded-full object-cover border-2 border-transparent hover:border-green-500" alt="Female Farmer"/>
                        </div>
                      </div>
                      <button 
                        onClick={() => setShowImageSelector(false)}
                        className="text-[10px] font-bold text-gray-400 hover:text-red-500 text-center mt-1"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                {/* User Info */}
                <div className="text-center md:text-left mt-2 md:mt-0">
                  <h1 className="text-3xl md:text-[32px] font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                    Hello, {user?.displayName || "User"}
                    {user?.emailVerified && (
                      <svg className="w-6 h-6 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    )}
                  </h1>
                  
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold mt-2 ${user?.emailVerified ? 'bg-[#008f1f] text-white' : 'bg-gray-600/80 text-gray-100'}`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    {user?.emailVerified ? 'Verified Farmer' : 'New Farmer'}
                  </div>

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6 mt-3 text-[13px] text-gray-200 font-medium">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      Tiruppur, Tamil Nadu
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      Member since {getMemberSince(user?.metadata?.creationTime)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Farming Type Badge */}
              <div className="hidden lg:flex bg-[#122216]/60 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-xl items-center gap-3 w-max">
                <div className="text-green-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-300 font-semibold leading-tight">Farming Type</p>
                  <p className="text-[14px] font-bold text-white leading-tight">Mixed Farming</p>
                </div>
              </div>
            </div>
          </div>

          {/* PERSONAL DETAILS SECTION */}
          <div className="px-6 md:px-10 pt-10">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h2 className="text-[22px] font-black text-gray-900">Personal Information</h2>
                <p className="text-[13px] font-bold text-gray-500 mt-1">Manage your account details and farm settings.</p>
              </div>
              
              <div className="flex gap-3">
                <button className="bg-[#007022] hover:bg-[#005c1c] text-white px-5 py-2.5 rounded-lg font-bold text-[13px] transition shadow-md flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Details Grid */}
            <div className="bg-white border border-gray-200/80 rounded-[1.25rem] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-b border-gray-100">
                
                <div className="p-6 md:p-8 hover:bg-gray-50/50 transition-colors">
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    Full Name
                  </p>
                  <p className="text-[17px] font-black text-gray-900">{user?.displayName || "Not Provided"}</p>
                </div>

                <div className="p-6 md:p-8 hover:bg-gray-50/50 transition-colors">
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Email Address
                  </p>
                  <p className="text-[17px] font-black text-gray-900">{user?.email || "Not Provided"}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-b border-gray-100">
                <div className="p-6 md:p-8 hover:bg-gray-50/50 transition-colors">
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    Mobile Number
                  </p>
                  <p className="text-[17px] font-black text-gray-900">{user?.phoneNumber || "+91 98765 43210"}</p>
                </div>

                <div className="p-6 md:p-8 hover:bg-gray-50/50 transition-colors">
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                    Location
                  </p>
                  <p className="text-[17px] font-black text-gray-900">Tiruppur, Tamil Nadu</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                <div className="p-6 md:p-8 hover:bg-gray-50/50 transition-colors">
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <span className="text-[14px]">🌾</span> Primary Crop
                  </p>
                  <p className="text-[17px] font-black text-gray-900">Turmeric, Tomato, Onion</p>
                </div>

                <div className="p-6 md:p-8 hover:bg-gray-50/50 transition-colors">
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <span className="text-[14px]">🕒</span> Recent Activity
                  </p>
                  <p className="text-[17px] font-black text-[#007022] mt-1">
                    {getLastLogin(user?.metadata?.lastSignInTime)}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}