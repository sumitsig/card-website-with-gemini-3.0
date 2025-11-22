import React from 'react';

const CardShowcase: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[188px] sm:w-[420px] sm:h-[264px] md:w-[460px] md:h-[288px] lg:w-[500px] lg:h-[314px] perspective-1000 group mx-auto">
      <div className="relative w-full h-full transition-transform duration-500 transform group-hover:rotate-x-2 group-hover:rotate-y-2 preserve-3d">
        
        {/* Card Body */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-gray-800 shadow-2xl overflow-hidden">
            
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 card-shine opacity-40 pointer-events-none"></div>

            {/* Content Layout */}
            <div className="relative p-6 sm:p-8 h-full flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                    
                    {/* Bank Name & Chip Container */}
                    <div className="flex flex-col gap-3 sm:gap-4">
                         <div className="font-[Space_Grotesk] font-bold tracking-widest text-gray-300 uppercase text-xs sm:text-base flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-600 rounded-full shadow-[0_0_8px_rgba(255,69,0,0.8)]"></div>
                            IndusInd Bank
                         </div>
                         {/* Chip */}
                        <div className="w-10 h-8 sm:w-14 sm:h-12 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-md border border-yellow-600/50 flex items-center justify-center shadow-inner mt-1">
                            <div className="w-full h-px bg-yellow-700/30 mb-1 absolute"></div>
                            <div className="h-full w-px bg-yellow-700/30 ml-1 absolute"></div>
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M2 9h20M2 15h20M9 2v20M15 2v20" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                    
                    {/* Contactless Symbol */}
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                </div>

                <div className="space-y-4 sm:space-y-6">
                    <div className="text-lg sm:text-3xl md:text-4xl font-mono text-gray-300 tracking-widest drop-shadow-md skeumorphic-text-shadow whitespace-nowrap">
                        4000 1234 5678 9010
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="uppercase">
                            <div className="text-[8px] sm:text-[10px] text-gray-500 tracking-widest mb-1">Card Holder</div>
                            <div className="font-medium text-gray-200 tracking-wider text-sm sm:text-lg">ARJUN MEHTA</div>
                        </div>
                         <div className="text-right">
                            <span className="font-bold italic text-white text-lg sm:text-2xl tracking-tight">VISA</span>
                            <span className="block text-[8px] sm:text-[10px] text-gray-400 font-mono tracking-widest uppercase">Infinite</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Gloss */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Shadow beneath card */}
        <div className="absolute -bottom-6 sm:-bottom-8 left-8 right-8 h-6 sm:h-8 bg-black/40 dark:bg-black/60 blur-xl sm:blur-2xl rounded-full transform translate-y-4 transition-colors"></div>
      </div>
    </div>
  );
};

export default CardShowcase;