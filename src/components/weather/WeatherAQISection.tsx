'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sun,
  Moon,
  CloudSun,
  CloudMoon,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  Wind,
  Droplets,
  Gauge,
  Sparkles,
  Compass,
  RefreshCw,
} from 'lucide-react';
import { useWeatherData } from '@/hooks/useWeatherData';

const getWeatherIcon = (iconType: string, className = 'w-6 h-6') => {
  switch (iconType) {
    case 'sun':
      return <Sun className={`${className} text-[#E8A317] animate-spin-slow`} />;
    case 'moon':
      return <Moon className={`${className} text-[#C5A059]`} />;
    case 'cloud-sun':
      return <CloudSun className={`${className} text-[#E8A317]`} />;
    case 'cloud-moon':
      return <CloudMoon className={`${className} text-[#C5A059]`} />;
    case 'cloud':
      return <Cloud className={`${className} text-slate-300`} />;
    case 'cloud-rain':
      return <CloudRain className={`${className} text-cyan-400`} />;
    case 'cloud-drizzle':
      return <CloudDrizzle className={`${className} text-sky-300`} />;
    case 'cloud-lightning':
      return <CloudLightning className={`${className} text-amber-400 animate-pulse`} />;
    default:
      return <Sun className={`${className} text-[#E8A317]`} />;
  }
};

export const WeatherAQISection: React.FC = () => {
  const { data, loading, refresh } = useWeatherData();

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-[1320px] mx-auto px-4 sm:px-8 mb-10 sm:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#0C1827]/95 backdrop-blur-xl border border-[#C5A059]/30 rounded-lg shadow-2xl p-5 sm:p-7 text-white overflow-hidden"
      >
        {/* Decorative Top Golden Accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Header & Location Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-start gap-4 lg:gap-8 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-white/10 lg:pr-8 min-w-[260px]">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                  Live Beach Atmosphere
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                Puri Coastal Weather
              </h3>
              <p className="font-sans text-xs text-white/60 flex items-center gap-1.5 mt-0.5">
                <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                New Marine Drive · Ocean Front
              </p>
            </div>

            <button
              onClick={() => refresh()}
              disabled={loading}
              title="Refresh live weather & AQI"
              className="self-start sm:self-center p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all disabled:opacity-50"
              aria-label="Refresh weather data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#C5A059]' : ''}`} />
            </button>
          </div>

          {/* Grid of Weather & AQI Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 flex-1">
            {/* 1. Temperature & Sky */}
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-md p-3.5 sm:p-4 transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium tracking-wider uppercase text-white/60">
                  Temperature
                </span>
                {data ? getWeatherIcon(data.iconType, 'w-5 h-5') : <Sun className="w-5 h-5 text-[#E8A317]" />}
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {data ? `${data.temperature}°C` : '--°C'}
                  </span>
                  <span className="text-[11px] text-white/60">
                    Feels {data ? `${data.feelsLike}°C` : '--'}
                  </span>
                </div>
                <p className="text-[11px] text-[#C5A059] font-medium mt-1 truncate">
                  {data ? data.condition : 'Loading weather...'}
                </p>
              </div>
            </div>

            {/* 2. Air Quality Index (AQI) */}
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-md p-3.5 sm:p-4 transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium tracking-wider uppercase text-white/60 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Air Quality (AQI)
                </span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    data?.aqiBgColor || 'bg-emerald-500/10'
                  } ${data?.aqiTextColor || 'text-emerald-400'} border ${
                    data?.aqiBorderColor || 'border-emerald-500/30'
                  }`}
                >
                  {data ? data.aqiCategory : 'AQI'}
                </span>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {data ? data.aqi : '--'}
                  </span>
                  <span className="text-[10px] text-white/60">US AQI</span>
                </div>
                <p className="text-[11px] text-emerald-300 font-medium mt-1 truncate">
                  {data ? data.aqiStatus : 'Clean Marine Air'}
                </p>
              </div>
            </div>

            {/* 3. Ocean Wind & Sea Breeze */}
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-md p-3.5 sm:p-4 transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium tracking-wider uppercase text-white/60">
                  Sea Breeze
                </span>
                <Wind className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {data ? `${data.windSpeed}` : '--'}
                  </span>
                  <span className="text-[11px] text-white/60">km/h</span>
                </div>
                <p className="text-[11px] text-sky-300 font-medium mt-1 truncate">
                  {data && data.windSpeed > 20
                    ? 'Brisk Surf Breeze'
                    : 'Gentle Bay Breeze'}
                </p>
              </div>
            </div>

            {/* 4. Coastal Humidity & PM2.5 */}
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-md p-3.5 sm:p-4 transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium tracking-wider uppercase text-white/60">
                  Humidity & PM2.5
                </span>
                <Droplets className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {data ? `${data.humidity}%` : '--%'}
                  </span>
                  <span className="text-[11px] text-white/60">
                    PM2.5: {data ? data.pm25 : '--'}
                  </span>
                </div>
                <p className="text-[11px] text-blue-300 font-medium mt-1 truncate">
                  Pure Oceanfront
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory / Activity Tip bar */}
        {data?.advice && (
          <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-[#C5A059] font-medium">Guest Tip:</span>
              <span>{data.advice}</span>
            </div>
            <span className="text-[10px] text-white/40 tracking-wider">
              Updated live from Open-Meteo & Odisha Coastal Station
            </span>
          </div>
        )}
      </motion.div>
    </section>
  );
};
