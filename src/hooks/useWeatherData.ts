'use client';

import { useState, useEffect, useCallback } from 'react';

export interface WeatherAQIData {
  success: boolean;
  isFallback?: boolean;
  city: string;
  location: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  isDay: boolean;
  weatherCode: number;
  condition: string;
  iconType: string;
  aqi: number;
  pm25: number;
  pm10: number;
  aqiCategory: string;
  aqiStatus: string;
  aqiColor: string;
  aqiTextColor: string;
  aqiBgColor: string;
  aqiBorderColor: string;
  advice: string;
  updatedAt: string;
}

const CACHE_KEY = 'prabhupada_weather_aqi_v1';
const CACHE_EXPIRY = 10 * 60 * 1000;

export function useWeatherData() {
  const [data, setData] = useState<WeatherAQIData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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
    fetchWeather();
  }, [fetchWeather]);

  return {
    data,
    loading,
    error,
    refresh: () => fetchWeather(true),
  };
}
