import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            <div className="space-y-4">
                <h3 className="text-xl font-bold font-[Space_Grotesk] text-gray-900 dark:text-white">Indusind <span className="text-orange-600 dark:text-orange-500">Bank</span></h3>
                <p className="text-gray-600 dark:text-gray-500">
                    Redefining banking for the modern elite.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-xs">Company</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-500">
                    <li className="hover:text-orange-600 dark:hover:text-orange-500 cursor-pointer transition-colors">About Us</li>
                    <li className="hover:text-orange-600 dark:hover:text-orange-500 cursor-pointer transition-colors">Careers</li>
                    <li className="hover:text-orange-600 dark:hover:text-orange-500 cursor-pointer transition-colors">Press</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-xs">Legal</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-500">
                    <li className="hover:text-orange-600 dark:hover:text-orange-500 cursor-pointer transition-colors">Terms & Conditions</li>
                    <li className="hover:text-orange-600 dark:hover:text-orange-500 cursor-pointer transition-colors">Privacy Policy</li>
                    <li className="hover:text-orange-600 dark:hover:text-orange-500 cursor-pointer transition-colors">Cardholder Agreement</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-xs">Contact</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-500">
                    <li>1-800-INDUS-BLK</li>
                    <li>concierge@indusind.bank</li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-12 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 dark:text-gray-600 text-xs transition-colors">
            <p>&copy; {new Date().getFullYear()} Indusind Bank. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Not everybody gets it.</p>
        </div>
    </footer>
  );
};

export default Footer;