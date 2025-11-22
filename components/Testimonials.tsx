import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Duplicate the list to ensure smooth infinite scrolling
  const marqueeList = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="experience" className="py-24 overflow-hidden bg-gray-100 dark:bg-[#080808] border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-12 flex justify-between items-end">
         <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors">Inner Circle</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-500 transition-colors">What the 0.1% are saying.</p>
         </div>
      </div>

      <div className="marquee-container relative w-full">
        <div className="marquee-content gap-6 py-4 pl-6">
          {marqueeList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[300px] md:w-[450px] flex-shrink-0 p-8 rounded-2xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/5 relative group hover:border-orange-500/20 transition-colors skeumorphic-card"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-200 dark:text-orange-900/40 group-hover:text-orange-500/40 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full border-2 border-orange-100 dark:border-orange-900/30 p-0.5">
                    <img src={item.avatar} alt={item.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                 </div>
                 <div>
                    <div className="text-gray-900 dark:text-white font-bold font-[Space_Grotesk] transition-colors">{item.name}</div>
                    <div className="text-xs text-orange-600 dark:text-orange-500 uppercase tracking-wider font-medium transition-colors">{item.role}</div>
                 </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed text-base md:text-lg transition-colors">
                "{item.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;