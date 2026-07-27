'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';

type UseSectionParallaxOptions = {
  /** How far the layer moves in px (positive = moves opposite to scroll) */
  distance?: number;
  /** Offset range for the section scroll progress */
  offset?: ['start end' | 'end start' | 'start start' | 'end end', 'start end' | 'end start' | 'start start' | 'end end'];
};

/**
 * Smooth parallax tied to a section's scroll progress.
 * Returns ref for the section + y MotionValue for the moving layer.
 * Honors prefers-reduced-motion.
 */
export function useSectionParallax({
  distance = 80,
  offset = ['start end', 'end start'],
}: UseSectionParallaxOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const travel = reduceMotion ? 0 : distance;
  const rawY = useTransform(scrollYProgress, [0, 1], [travel, -travel]);
  const y = useSpring(rawY, { stiffness: 90, damping: 28, mass: 0.4 });

  return { ref, y, scrollYProgress, reduceMotion };
}

type ParallaxLayerProps = {
  children: React.ReactNode;
  className?: string;
  y: MotionValue<number>;
  scale?: MotionValue<number>;
  style?: React.CSSProperties;
};

/** Moving layer — wrap backgrounds / images with this */
export function ParallaxLayer({
  children,
  className = '',
  y,
  scale,
  style,
}: ParallaxLayerProps) {
  return (
    <motion.div
      className={`will-change-transform ${className}`}
      style={{ y, scale, ...style }}
    >
      {children}
    </motion.div>
  );
}

type FadeRiseProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Content that gently rises into view while scrolling */
export function FadeRise({
  children,
  className = '',
  delay = 0,
  y = 36,
}: FadeRiseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.85,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
