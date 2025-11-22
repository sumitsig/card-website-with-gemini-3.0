import React from 'react';
import CardShowcase from './CardShowcase';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 z-10 text-center lg:text-left">
          <div className="inline-block">
            <span className="py-1 px-3 rounded-full bg-orange-100 border border-orange-200 dark:bg-orange-900/20 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-[0.2em] uppercase transition-colors">
              By Invitation Only
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight text-gray-900 dark:text-white transition-colors">
            NOT <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-600">
                EVERYBODY
            </span> <br/>
            GETS IT.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed transition-colors">
            The IndusInd Bank Black Card isn't just a credit card. It's a key to a world that refuses to wait. Crafted for the few who demand perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="skeumorphic-btn px-8 py-4 rounded-md font-bold text-white text-sm uppercase tracking-widest flex items-center justify-center gap-2 group w-full sm:w-auto">
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-md font-bold text-gray-900 dark:text-gray-300 text-sm uppercase tracking-widest border border-gray-300 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 transition-all backdrop-blur-sm w-full sm:w-auto">
              View Benefits
            </button>
          </div>
        </div>

        {/* Right Content (Card) */}
        <div className="flex justify-center lg:justify-end relative z-10 mt-8 lg:mt-0">
            <div className="relative w-full flex justify-center">
                 <CardShowcase />
                 {/* Background Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-orange-500/10 dark:bg-orange-600/20 blur-[60px] md:blur-[100px] rounded-full -z-10 transition-colors"></div>
            </div>
        </div>
      </div>
      
      {/* Texture Overlay Gradient for Section blending */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 dark:from-[#050505] to-transparent z-0 transition-colors duration-300"></div>
    </section>
  );
};

export default Hero;