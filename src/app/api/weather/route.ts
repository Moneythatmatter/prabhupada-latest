import { NextResponse } from 'next/server';
import { getWeatherData } from '@/lib/weather';

export const revalidate = 600; // Cache for 10 minutes

export async function GET() {
  const data = await getWeatherData();

  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1800',
    },
  });
}
