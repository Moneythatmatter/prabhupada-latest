'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  distance?: number;
};

/** Image that drifts inside an overflow-hidden frame while scrolling */
export function ParallaxImage({
  src,
  alt,
  sizes = '100vw',
  className = '',
  imageClassName = 'object-cover',
  distance = 40,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const travel = reduceMotion ? 0 : distance;
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [travel, -travel]), {
    stiffness: 90,
    damping: 28,
  });

  return (
    <div ref={ref} className={`relative h-full w-full overflow-hidden ${className}`}>
      <motion.div
        className="absolute left-0 right-0 top-[-18%] h-[136%] will-change-transform"
        style={{ y }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className={imageClassName} />
      </motion.div>
    </div>
  );
}
