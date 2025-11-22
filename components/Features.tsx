import React from 'react';
import { FEATURES, STATS } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-20 relative transition-colors duration-300">
        
        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-24">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-black/5 dark:border-white/10 py-12 bg-white/50 dark:bg-white/[0.02] transition-colors rounded-3xl">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="text-center space-y-2">
                        <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white skeumorphic-text-shadow font-[Space_Grotesk] transition-colors">
                            {stat.value}
                        </div>
                        <div className="text-sm text-orange-600 dark:text-orange-500 uppercase tracking-widest font-semibold">
                            {stat.label}
                        </div>
                    </div>
                ))}
             </div>
        </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">Engineered for <span className="text-orange-600 dark:text-orange-500">Excellence</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl transition-colors text-lg">
                Every detail of the IndusInd Black is designed to provide friction-less luxury.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group relative p-6 rounded-xl bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/5 hover:border-orange-500/30 dark:hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-none"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-lg bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-orange-500/50 shadow-inner dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] transition-colors">
                  <feature.icon className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-[Space_Grotesk] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-400 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;