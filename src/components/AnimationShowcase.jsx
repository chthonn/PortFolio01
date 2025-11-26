import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBox from './AnimatedBox';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const AnimationShowcase = () => {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Animation Showcase
      </motion.h1>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {['Fade In', 'Scale Up', 'Slide Right', 'Rotate', 'Bounce', 'Stagger'].map((text, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold mb-2">{text}</h3>
            <p className="text-gray-600">Hover or tap me!</p>
          </motion.div>
        ))}
      </motion.div>

      <AnimatedBox className="mt-16 text-center" delay={0.5}>
        <h2 className="text-3xl font-bold mb-4">Scroll Animation</h2>
        <p className="text-gray-600 mb-8">This section fades in as you scroll down</p>
        
        <motion.div 
          className="w-32 h-32 bg-blue-500 rounded-lg mx-auto"
          initial={{ scale: 0 }}
          whileInView={{ 
            scale: 1,
            rotate: 360,
            transition: { 
              type: 'spring',
              stiffness: 100,
              damping: 10 
            }
          }}
          viewport={{ once: true }}
        />
      </AnimatedBox>
    </div>
  );
};

export default AnimationShowcase;
