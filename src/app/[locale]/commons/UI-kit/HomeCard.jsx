'use client';

import Image from 'next/image';
import {
  motion, MotionConfig,
} from 'framer-motion';
import { useState } from 'react';

export default function HomeCard({ item }) {
  const [isHover, setIsHover] = useState(false);

  const transition = {
    type: 'spring',
    duration: 0.7,
    bounce: 0.2,
  };

  return (
    <MotionConfig transition={transition}>
      <div className="w-full sm:w-1/2 lg:flex-1 py-2 lg:py-4 px-2">
        <div className="flex h-full relative items-center gap-4 border-2 border-arcCardBackground rounded-lg justify-evenly aspect-[534/496] p-4 w-full flex-col bg-grayBackground dark:bg-arcHomeBackGroundLayout2">
          <span className="font-medium text-base">{item.text}</span>
          <span className="">
            <motion.button
            //   ref={ref}
              initial={false}
              animate={isHover ? 'hover' : 'rest'}
              whileTap="press"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.2 },
                press: { scale: 1.1 },
              }}
              onHoverStart={() => {
                setIsHover(true);
              }}
              onHoverEnd={() => {
                setIsHover(false);
              }}
            >
              <motion.div
                className="shapes"
              >
                <span className="w-[100px] h-[100px] bg-[#E1C227] rounded-full filter blur-[50px] absolute top-[40%]" />
                <span>
                  <Image
                    src={item.image}
                    className="h-auto object-contain max-w-[215px] min-w-[215px] w-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />
                </span>
              </motion.div>

            </motion.button>
          </span>
        </div>
      </div>
    </MotionConfig>
  );
}
