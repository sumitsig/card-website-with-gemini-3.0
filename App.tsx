import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Divider CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-100 to-white dark:from-orange-900/20 dark:to-black border-y border-orange-500/10 relative overflow-hidden transition-colors duration-300">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 dark:opacity-10 mix-blend-overlay"></div>
           <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[Space_Grotesk] text-gray-900 dark:text-white">Ready to Ascend?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">Join the waitlist. Membership is strictly limited to 1,000 new applicants this quarter.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="px-6 py-3 rounded bg-white dark:bg-black/50 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors w-full shadow-inner"
                    />
                    <button className="skeumorphic-btn px-8 py-3 rounded font-bold uppercase tracking-wider text-white whitespace-nowrap">
                        Get Invited
                    </button>
                </div>
           </div>
        </section>
        
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;