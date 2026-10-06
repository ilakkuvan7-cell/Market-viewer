import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase'; 
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function AuthModal({ isOpen, onClose, initialMode = 'signin' }) {
  const [isSignIn, setIsSignIn] = useState(initialMode === 'signin');
  
  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  // 1. Google Login Function
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Login Successful! ✅");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }
  };

  // 2. Email & Password Auth Function
  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        // Sign In Logic
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful! ✅");
      } else {
        // Sign Up Logic
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        alert("Account Created Successfully! 🎉");
      }
      onClose();
    } catch (error) {
      console.error(error);
      alert("Authentication Failed: " + error.message);
    }
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden relative animate-[fadeIn_0.3s_ease-out]">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-gray-200 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00b09b] to-[#96c93d] rounded-[14px] flex items-center justify-center shadow-lg mb-4">
               <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                <path d="M3 20h18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M6 20V12a1.5 1.5 0 011.5-1.5h1a1.5 1.5 0 011.5 1.5v8" fill="white" fillOpacity="0.4" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M14 20V6a1.5 1.5 0 011.5-1.5h1a1.5 1.5 0 011.5 1.5v14" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-[26px] font-black text-gray-900 leading-tight">
              {isSignIn ? "Welcome Back" : "Join Market IQ"}
            </h2>
            <p className="text-[14px] font-bold text-gray-500 mt-2">
              {isSignIn ? "Sign in to access your dashboard" : "Create an account to grow smarter"}
            </p>
          </div>

          {/* Social Auth Button (Google) */}
          <div className="space-y-3 mb-6">
            <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-800 font-bold px-4 py-3.5 rounded-xl hover:bg-gray-50 transition shadow-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Or Email</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          {/* Email / Password Form */}
          <form onSubmit={handleEmailAuth} className="space-y-4">
            
            {!isSignIn && (
              <div>
                <input 
                  type="text" 
                  required
                  placeholder="Full Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[15px] font-bold rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all placeholder:font-semibold placeholder:text-gray-400"
                />
              </div>
            )}

            <div>
              <input 
                type="email" 
                required
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[15px] font-bold rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all placeholder:font-semibold placeholder:text-gray-400"
              />
            </div>

            <div>
              <input 
                type="password" 
                required
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[15px] font-bold rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all placeholder:font-semibold placeholder:text-gray-400"
              />
            </div>

            <button type="submit" className="w-full bg-[#111827] hover:bg-black text-white font-bold text-[15px] px-4 py-4 rounded-xl transition shadow-lg mt-2">
              {isSignIn ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[14px] font-bold text-gray-500">
              {isSignIn ? "Don't have an account? " : "Already have an account? "}
              <span onClick={toggleMode} className="text-[#00a624] hover:text-[#008f1f] cursor-pointer underline decoration-2 underline-offset-4">
                {isSignIn ? "Sign Up" : "Sign In"}
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}