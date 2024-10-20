import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import CustomButton from './CustomButton/CustomButton';

export default function AnimateFilters({ children }) {
  const [showFilter, setShowFilters] = useState(false);

  return (
    <>
      <div className="flex justify-end items-center mb-6">
        <CustomButton
          type="secondary"
          onClick={() => {
            setShowFilters(!showFilter);
          }}
        >
          FILTERS
        </CustomButton>
      </div>
      <AnimatePresence>
        {showFilter && (
          <motion.div
            className="flex justify-between items-end gap-4 mb-6"
            initial={{
              x: 0,
              scale: 0.1,
              opacity: 0,
            }}
            animate={{
              x: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{
              type: 'spring',
              bounce: 0.3,
              duration: 0.4,
            }}
            exit={{
              scale: 0.2,
              opacity: 0,
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
