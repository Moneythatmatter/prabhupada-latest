import { NextResponse } from 'next/server';

export const revalidate = 600; // Cache for 10 minutes

interface OpenMeteoWeatherResponse {
  current?: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: number;
    weather_code: number;
    wind_speed_10m: number;
  };
}

interface OpenMeteoAqiResponse {
  current?: {
    time: string;
    us_aqi: number;
    pm2_5: number;
    pm10: number;
  };
}

function getWeatherDescription(code: number, isDay: boolean): { text: string; icon: string } {
  switch (code) {
    case 0:
      return {
        text: isDay ? 'Clear Beach Sky' : 'Clear Starry Night',
        icon: isDay ? 'sun' : 'moon',
      };
    case 1:
    case 2:
      return {
        text: isDay ? 'Partly Sunny & Breezy' : 'Partly Cloudy Night',
        icon: isDay ? 'cloud-sun' : 'cloud-moon',
      };
    case 3:
      return {
        text: 'Overcast Coastal Clouds',
        icon: 'cloud',
      };
    case 45:
    case 48:
      return {
        text: 'Morning Sea Mist & Fog',
        icon: 'fog',
      };
    case 51:
    case 53:
    case 55:
      return {
        text: 'Light Ocean Drizzle',
        icon: 'cloud-drizzle',
      };
    case 61:
    case 63:
    case 65:
      return {
        text: 'Refreshing Coastal Rain',
        icon: 'cloud-rain',
      };
    case 80:
    case 81:
    case 82:
      return {
        text: 'Passing Sea Showers',
        icon: 'cloud-rain',
      };
    case 95:
    case 96:
    case 99:
      return {
        text: 'Tropical Sea Thunderstorm',
        icon: 'cloud-lightning',
      };
    default:
      return {
        text: 'Pleasant Coastal Weather',
        icon: 'sun',
      };
  }
}

function getAqiDetails(aqi: number): {
  category: string;
  status: string;
  color: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  advice: string;
} {
  if (aqi <= 50) {
    return {
      category: 'Good',
      status: 'Fresh Ocean Air',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      advice: 'Perfect air quality for beach walks, swimming, and sunrise yoga.',
    };
  } else if (aqi <= 100) {
    return {
      category: 'Moderate',
      status: 'Pleasant & Clean Air',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      advice: 'Pleasant coastal conditions for temple visits and outdoor sightseeing.',
    };
  } else if (aqi <= 150) {
    return {
      category: 'Mildly Sensitive',
      status: 'Fair Air Quality',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      advice: 'Sensitive individuals may consider taking breaks during long outings.',
    };
  } else {
    return {
      category: 'Moderate-High',
      status: 'Air Quality Advisory',
      color: '#EF4444',
      textColor: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      advice: 'Stay hydrated and enjoy our indoor sea-view lounges.',
    };
  }
}

export async function GET() {


  const latitude = 19.789990372505034;
  const longitude = 85.80701311213159;

  try {
    const [weatherRes, aqiRes] = await Promise.all([
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&timezone=Asia%2FKolkata`,
        { next: { revalidate: 600 } }
      ),
      fetch(
        `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi,pm2_5,pm10&timezone=Asia%2FKolkata`,
        { next: { revalidate: 600 } }
      ),
    ]);

    if (!weatherRes.ok || !aqiRes.ok) {
      throw new Error('Failed to fetch from Open-Meteo API');
    }

    const weatherData: OpenMeteoWeatherResponse = await weatherRes.json();
    const aqiData: OpenMeteoAqiResponse = await aqiRes.json();

    const currentWeather = weatherData.current;
    const currentAqi = aqiData.current;

    const temperature = currentWeather ? Math.round(currentWeather.temperature_2m) : 31;
    const feelsLike = currentWeather ? Math.round(currentWeather.apparent_temperature) : 34;
    const humidity = currentWeather ? Math.round(currentWeather.relative_humidity_2m) : 75;
    const windSpeed = currentWeather ? Math.round(currentWeather.wind_speed_10m) : 16;
    const isDay = currentWeather ? Boolean(currentWeather.is_day) : true;
    const weatherCode = currentWeather ? currentWeather.weather_code : 0;
    const weatherInfo = getWeatherDescription(weatherCode, isDay);

    const aqiScore = currentAqi ? Math.round(currentAqi.us_aqi) : 52;
    const pm25 = currentAqi ? Number(currentAqi.pm2_5.toFixed(1)) : 14.2;
    const pm10 = currentAqi ? Number(currentAqi.pm10.toFixed(1)) : 22.8;
    const aqiDetails = getAqiDetails(aqiScore);

    return NextResponse.json({
      success: true,
      city: 'Puri Beach, Odisha',
      location: 'New Marine Drive Road, Puri',
      temperature,
      feelsLike,
      humidity,
      windSpeed,
      isDay,
      weatherCode,
      condition: weatherInfo.text,
      iconType: weatherInfo.icon,
      aqi: aqiScore,
      pm25,
      pm10,
      aqiCategory: aqiDetails.category,
      aqiStatus: aqiDetails.status,
      aqiColor: aqiDetails.color,
      aqiTextColor: aqiDetails.textColor,
      aqiBgColor: aqiDetails.bgColor,
      aqiBorderColor: aqiDetails.borderColor,
      advice: aqiDetails.advice,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching weather & AQI data:', error);
    // Fallback typical pleasant coastal data for Puri
    const fallbackAqiDetails = getAqiDetails(52);
    return NextResponse.json({
      success: true,
      isFallback: true,
      city: 'Puri Beach, Odisha',
      location: 'New Marine Drive Road, Puri',
      temperature: 30,
      feelsLike: 34,
      humidity: 76,
      windSpeed: 15,
      isDay: true,
      weatherCode: 1,
      condition: 'Pleasant Coastal Breeze',
      iconType: 'cloud-sun',
      aqi: 52,
      pm25: 14.5,
      pm10: 23.0,
      aqiCategory: fallbackAqiDetails.category,
      aqiStatus: fallbackAqiDetails.status,
      aqiColor: fallbackAqiDetails.color,
      aqiTextColor: fallbackAqiDetails.textColor,
      aqiBgColor: fallbackAqiDetails.bgColor,
      aqiBorderColor: fallbackAqiDetails.borderColor,
      advice: fallbackAqiDetails.advice,
      updatedAt: new Date().toISOString(),
    });
  }
}
