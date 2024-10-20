'use client';

import { motion } from 'framer-motion';

export default function AnimateErrorList({ children }) {
  return (
    <motion.div
      initial={{
        y: -100,
        // scale: 0.1,
        opacity: 0,
      }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        bounce: 0.3,
        duration: 0.8,
      }}
      exit={{
        scale: 0.2,
        opacity: 0,
      }}
      className="mt-2 p-4 rounded-md shadow-md flex items-center border border-gray-500 rounded-3xl"
    >
      {children}
    </motion.div>
  );
}
