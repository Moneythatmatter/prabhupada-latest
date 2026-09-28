'use client';

import { useState, useEffect, useCallback } from 'react';
import { type WeatherAQIData } from '@/lib/weather';

export type { WeatherAQIData };

const CACHE_KEY = 'prabhupada_weather_aqi_v1';
const CACHE_EXPIRY = 10 * 60 * 1000;

export function useWeatherData(initialData?: WeatherAQIData | null) {
  const [data, setData] = useState<WeatherAQIData | null>(initialData || null);
  const [loading, setLoading] = useState<boolean>(!initialData);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (ignoreCache = false) => {
    if (!ignoreCache && typeof window !== 'undefined') {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_EXPIRY) {
            setData(parsed.data);
            setLoading(false);
            return;
          }
        }
      } catch {
        // sessionStorage error fallback
      }
    }

    try {
      setLoading(true);
      const res = await fetch('/api/weather');
      if (!res.ok) throw new Error('Failed to fetch weather & AQI');
      const json: WeatherAQIData = await res.json();
      setData(json);
      setError(null);

      if (typeof window !== 'undefined') {
        try {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              data: json,
              timestamp: Date.now(),
            })
          );
        } catch {
          // ignore
        }
      }
    } catch (err: unknown) {
      console.error('Weather hook error:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // If server passed initialData, populate cache and skip network fetch on mount
    if (initialData) {
      setData(initialData);
      setLoading(false);
      if (typeof window !== 'undefined') {
        try {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              data: initialData,
              timestamp: Date.now(),
            })
          );
        } catch {
          // ignore
        }
      }
      return;
    }

    fetchWeather();
  }, [fetchWeather, initialData]);

  return {
    data,
    loading,
    error,
    refresh: () => fetchWeather(true),
  };
}
