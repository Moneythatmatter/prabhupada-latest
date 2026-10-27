"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

interface RoomImageCarouselProps {
  images: string[];
  alt: string;
  badgeTitle?: string;
  className?: string;
  sizes?: string;
  aspectHeightClass?: string;
  priority?: boolean;
  onImageClick?: () => void;
  showThumbnails?: boolean;
  showDots?: boolean;
  showCounter?: boolean;
  autoPlayInterval?: number;
}

export const RoomImageCarousel: React.FC<RoomImageCarouselProps> = ({
  images = [],
  alt,
  badgeTitle,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  aspectHeightClass = "h-[250px] sm:h-[280px]",
  priority = false,
  onImageClick,
  showThumbnails = false,
  showDots = true,
  showCounter = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = images.length;

  const goToNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (total <= 1) return;
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    },
    [total]
  );

  const goToPrev = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (total <= 1) return;
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + total) % total);
    },
    [total]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setTouchStartX(null);
  };

  if (total === 0) {
    return (
      <div
        className={`relative w-full ${aspectHeightClass} bg-[#0C1827] flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-[#E8A317]/10 border border-[#E8A317]/30 flex items-center justify-center text-[#E8A317] mb-2.5">
          <Camera className="w-5 h-5" />
        </div>
        <span className="font-serif text-sm font-normal text-white/90 tracking-wide mb-1">
          Official Photo Pending
        </span>
        <span className="font-sans text-[10px] text-[#E8A317] font-light uppercase tracking-[0.18em]">
          Image Upload Pending
        </span>
      </div>
    );
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="w-full flex flex-col">
      <div
        className={`relative w-full ${aspectHeightClass} overflow-hidden bg-[#070F1A] select-none group/carousel ${className}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={onImageClick}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 32 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} - view ${currentIndex + 1} of ${total}`}
              fill
              sizes={sizes}
              priority={priority && currentIndex === 0}
              className="object-cover transition-transform duration-700 ease-out group-hover/carousel:scale-105"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#070F1A]/90 via-[#070F1A]/35 to-transparent pointer-events-none z-10" />
        {showCounter && total > 1 && (
          <div className="absolute top-3 right-3 z-20 pointer-events-none">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#070F1A]/80 backdrop-blur-md border border-white/15 text-[11px] font-sans font-medium text-white/95 shadow-md">
              <Camera className="w-3.5 h-3.5 text-[#E8A317]" />
              <span>
                {currentIndex + 1} / {total}
              </span>
            </div>
          </div>
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous photo"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#070F1A]/85 hover:bg-[#E8A317] text-white hover:text-[#070F1A] backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-200 shadow-lg opacity-90 sm:opacity-0 group-hover/carousel:opacity-100 hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next photo"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#070F1A]/85 hover:bg-[#E8A317] text-white hover:text-[#070F1A] backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-200 shadow-lg opacity-90 sm:opacity-0 group-hover/carousel:opacity-100 hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            {showDots && (
              <div
                className={`absolute ${badgeTitle ? "bottom-12" : "bottom-3"
                  } inset-x-0 z-20 flex justify-center items-center gap-1.5 pointer-events-auto`}
              >
                {images.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    aria-label={`Jump to photo ${dotIdx + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setDirection(dotIdx > currentIndex ? 1 : -1);
                      setCurrentIndex(dotIdx);
                    }}
                    className={`transition-all duration-300 rounded-full h-1.5 ${dotIdx === currentIndex
                      ? "w-5 bg-[#E8A317] shadow-[0_0_8px_rgba(232,163,23,0.7)]"
                      : "w-1.5 bg-white/50 hover:bg-white/90"
                      }`}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {badgeTitle && (
          <div className="absolute bottom-0 inset-x-0 z-10 p-3 pointer-events-none">
            <div className="relative overflow-hidden rounded-sm bg-gradient-to-r from-[#070F1A]/85 via-[#0C1827]/90 to-[#070F1A]/85 backdrop-blur-md px-4 py-2 sm:py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#E8A317]/70 to-transparent" />
              <div className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E8A317]/35 to-transparent" />
              <span className="relative font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#F0D78C] uppercase block text-center truncate">
                {badgeTitle}
              </span>
            </div>
          </div>
        )}
      </div>

      {showThumbnails && total > 1 && (
        <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 scrollbar-thin">
          {images.map((img, thumbIdx) => (
            <button
              key={img + thumbIdx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setDirection(thumbIdx > currentIndex ? 1 : -1);
                setCurrentIndex(thumbIdx);
              }}
              className={`relative shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${thumbIdx === currentIndex
                ? "border-[#E8A317] scale-105 shadow-md"
                : "border-transparent opacity-60 hover:opacity-100"
                }`}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${thumbIdx + 1}`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
