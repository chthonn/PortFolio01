import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBox = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.17, 0.67, 0.83, 0.67]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;
