import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <span className="absolute -left-[11px] top-1 bg-slate-900 border-2 border-primary rounded-full p-1 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <span className="text-sm font-mono text-primary bg-slate-800/50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {job.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <Briefcase size={16} />
                <span className="font-medium">{job.company}</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;