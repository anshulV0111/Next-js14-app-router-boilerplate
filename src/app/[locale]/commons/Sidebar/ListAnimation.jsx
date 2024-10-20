'use client';

import { useAppSelector } from '@/redux/hooks';
import { motion } from 'framer-motion';

export default function ListAnimation({
  index, children,
}) {
  const { isSidebarOpen: isOpen } = useAppSelector((state) => state.general);

  return (
    <motion.list
      initial={{ opacity: 0, scale: 0.3, x: -50 }}
      animate={
      isOpen
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 }
      }
      transition={{
        duration: 0.4,
        delay: isOpen ? index * 0.1 : 0, // use the index to create a staggered effect
      }}
      className="dark:bg-arcSidebarListBackground dark:text-arcCustomButtonColor text-lightModeBlack "
    >
      {children}
    </motion.list>
  );
}
