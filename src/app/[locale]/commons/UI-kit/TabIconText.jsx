'use client';

import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function TabIconText({
  icon, text, value,
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <motion.div
      key={pathname.toLowerCase().includes(value) ? Math.random() : text}
      className="relative cursor-pointer w-[377px] h-[100px] justify-center py-5 px-4 rounded-lg flex items-center"
      // className="cursor-pointer flex items-center w-[377px]"
      onClick={() => router.push(`/layout2/account/${value}`)}
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          bounce: 0.3,
          duration: 0.4,
        }}
        className={
          pathname.toLowerCase().includes(value)
            ? 'absolute top-0 bottom-0 right-0 left-0 cursor-pointer justify-center py-5 px-4 rounded-lg flex items-center bg-Accountbackground'
            : 'display-none'
          }
      />
      <div className="rounded-full bg-gray-800 p-3 mr-4">
        {icon}
      </div>
      <h2 className="text-white text-lg font-semibold">{text}</h2>
    </motion.div>
  );
}
