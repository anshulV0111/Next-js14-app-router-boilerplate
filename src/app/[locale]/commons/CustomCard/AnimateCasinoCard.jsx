import { CASINO_ANIMATION_CONFIG } from '@/constants';
import { AnimatePresence, motion } from 'framer-motion';

export default function AnimateCasinoCard({
  children, id, index,
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="relative mt-4 rounded-lg overflow-hidden group hover:cursor-pointer"
        key={id}
        {...CASINO_ANIMATION_CONFIG(2, index)}
        whileHover={{
          y: -5, scale: 1.05, zIndex: [0, 1],
        }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
