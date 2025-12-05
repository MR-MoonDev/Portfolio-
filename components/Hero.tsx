import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Cpu, Sparkles } from 'lucide-react';
import { HERO_CONTENT } from '../constants';
import  myimage from '../assets/myimage.png';
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16 md:pt-0">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-blob opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000 opacity-40"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
              <Cpu size={16} />
              <span>AI-Powered Developer</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              {HERO_CONTENT.greeting} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {HERO_CONTENT.name}
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light flex flex-col md:flex-row gap-2 md:items-center justify-center md:justify-start">
              <span>{HERO_CONTENT.title}</span>
            </h2>
            
            <p className="max-w-lg mx-auto md:mx-0 text-lg text-gray-500 mb-10 leading-relaxed">
              {HERO_CONTENT.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-primary hover:bg-indigo-600 text-white font-medium transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
              >
                View Work <Sparkles size={18} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-all flex items-center justify-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center md:justify-end relative"
          >
             <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] group">
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full border border-slate-700 border-dashed animate-spin-slow pointer-events-none"></div>
                
                {/* Glowing background */}
                <div className="absolute inset-4 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Main Image Container */}
                <div className="absolute inset-2 md:inset-4 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-800">
                  <img 
                    // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    src= {myimage}
                    alt="Alex Sterling" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 -left-4 md:bottom-20 md:-left-8 bg-slate-800/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3"
                >
                   <div className="bg-primary/20 p-2 rounded-lg text-primary">
                     <Cpu size={24} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">System</p>
                     <p className="text-sm font-bold text-white">Online</p>
                   </div>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 cursor-pointer hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;