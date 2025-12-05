import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '../constants';
import { Code, Terminal, Zap } from 'lucide-react';
import  myimage from '../assets/Hero.webp';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 blur-lg"></div>
               <img 
                //  src="https://picsum.photos/600/600?grayscale" 
                 src={myimage}
                 alt="Profile" 
                 className="relative rounded-xl border-2 border-slate-700 w-full object-cover shadow-2xl"
               />
               
               {/* Floating Badges */}
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-xl flex items-center gap-3"
               >
                 <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                    <Terminal size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-gray-400">Experience</p>
                   <p className="font-bold">3+ Years</p>
                 </div>
               </motion.div>
             </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed mb-8">
              {ABOUT_CONTENT.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                 <Code className="text-primary mb-2" size={24} />
                 <h3 className="font-semibold text-white mb-1">Clean Code</h3>
                 <p className="text-sm text-gray-400">Writing maintainable, scalable, and self-documenting software.</p>
               </div>
               <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                 <Zap className="text-secondary mb-2" size={24} />
                 <h3 className="font-semibold text-white mb-1">Performance</h3>
                 <p className="text-sm text-gray-400">Optimizing for Core Web Vitals and lightning-fast interactions.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;