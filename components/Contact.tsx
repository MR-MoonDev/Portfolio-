import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Interested in working together? Let's connect.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
             <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Let's talk about your next project</h3>
             <p className="text-gray-400 text-lg leading-relaxed">
               I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
             </p>

             <div className="flex items-center gap-4 text-gray-300">
               <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                 <Mail size={24} />
               </div>
               <div>
                 <p className="text-sm text-gray-500">Email Me</p>
                 <a href="muhammadmuneebulraza@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">muhammadmuneebulraza@gmail.com</a>
               </div>
             </div>

             <div className="flex items-center gap-4 text-gray-300">
               <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-secondary">
                 <MapPin size={24} />
               </div>
               <div>
                 <p className="text-sm text-gray-500">Location</p>
                 <p className="text-lg font-medium">Hyderabad Pakistan</p>
               </div>
             </div>

             <div className="pt-8">
               <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Follow Me</h4>
               <div className="flex gap-4">
                 {SOCIAL_LINKS.map((link) => (
                   <a
                     key={link.platform}
                     href={link.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                   >
                     {link.icon}
                   </a>
                 ))}
               </div>
             </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;