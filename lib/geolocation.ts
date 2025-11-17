export type Currency = 'NGN' | 'USD';

export interface GeolocationResponse {
  country: string;
  countryCode: string;
  currency: Currency;
}

const CACHE_KEY = 'user_currency_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000;

interface CacheData {
  currency: Currency;
  timestamp: number;
  country: string;
}

export async function detectUserLocation(): Promise<GeolocationResponse> {
  try {
    const cached = getCachedCurrency();
    if (cached) {
      return cached;
    }

    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch location');
    }

    const data = await response.json();

    const countryCode = data.country_code || data.country || '';
    const country = data.country_name || '';

    const isNigeria = countryCode.toUpperCase() === 'NG';
    const currency: Currency = isNigeria ? 'NGN' : 'USD';

    const result: GeolocationResponse = {
      country,
      countryCode,
      currency,
    };

    setCachedCurrency(result);

    return result;
  } catch (error) {
    console.error('Geolocation detection failed:', error);

    return {
      country: 'Unknown',
      countryCode: 'US',
      currency: 'USD',
    };
  }
}

function getCachedCurrency(): GeolocationResponse | null {
  if (typeof window === 'undefined') return null;

  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const data: CacheData = JSON.parse(cached);
    const now = Date.now();

    if (now - data.timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return {
      country: data.country,
      countryCode: data.country === 'Nigeria' ? 'NG' : 'US',
      currency: data.currency,
    };
  } catch (error) {
    console.error('Failed to read cached currency:', error);
    return null;
  }
}

function setCachedCurrency(location: GeolocationResponse): void {
  if (typeof window === 'undefined') return;

  try {
    const cacheData: CacheData = {
      currency: location.currency,
      timestamp: Date.now(),
      country: location.country,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Failed to cache currency:', error);
  }
}

export function clearCurrencyCache(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CACHE_KEY);
}
