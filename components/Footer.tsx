import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
        <span>© {new Date().getFullYear()} MuneebSiddiqui. Built with React & Tailwind.</span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          Made with <Heart size={12} className="text-red-500 fill-red-500" /> MuneebSiddiqui.
        </span>
      </div>
    </footer>
  );
};

export default Footer;