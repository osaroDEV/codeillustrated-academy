# Currency Switching System - Usage Guide

## Overview

The currency switching system automatically detects user location and displays prices in the appropriate currency:
- Nigerian users see prices in Naira (₦)
- All other users see prices in US Dollars ($)

## Components & Utilities

### 1. Geolocation Utility (`lib/geolocation.ts`)

Detects user location using IP geolocation API.

**Features:**
- Automatic location detection via ipapi.co
- 24-hour caching to reduce API calls
- Falls back to USD if detection fails
- Works entirely client-side

**API Used:** ipapi.co (Free, 1,000 requests/day, no API key required)

### 2. Currency Context (`lib/currency-context.tsx`)

Manages currency state across the application.

**Exports:**
- `CurrencyProvider` - Context provider component
- `useCurrency()` - Hook to access currency state

### 3. Price Components (`components/price.tsx`)

Three reusable components for displaying prices:

#### `<Price />` - Display a single price
#### `<PriceRange />` - Display a price range
#### `<CurrencySwitcher />` - Manual currency toggle button

## Usage Examples

### Basic Price Display

```tsx
import { Price } from '@/components/price';

function CourseCard() {
  return (
    <div>
      <h3>React Masterclass</h3>
      <Price
        priceNGN={50000}
        priceUSD={35}
      />
    </div>
  );
}
```

**Output:**
- Nigerian users: ₦50,000.00
- Other users: $35.00

### Price with Custom Styling

```tsx
import { Price } from '@/components/price';

function PricingCard() {
  return (
    <div className="text-center">
      <Price
        priceNGN={150000}
        priceUSD={99}
        className="text-4xl font-bold text-blue-600"
        showCurrencyCode={true}
        decimals={0}
      />
    </div>
  );
}
```

**Output:**
- Nigerian users: ₦150,000 NGN
- Other users: $99 USD

### Price Range Display

```tsx
import { PriceRange } from '@/components/price';

function ServicePricing() {
  return (
    <div>
      <h3>Consulting Services</h3>
      <PriceRange
        minPriceNGN={100000}
        maxPriceNGN={500000}
        minPriceUSD={65}
        maxPriceUSD={320}
        className="text-2xl font-semibold"
      />
    </div>
  );
}
```

**Output:**
- Nigerian users: ₦100,000.00 - ₦500,000.00
- Other users: $65.00 - $320.00

### Currency Switcher Button

```tsx
import { CurrencySwitcher } from '@/components/price';

function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1>Code Illustrated</h1>
      <CurrencySwitcher />
    </header>
  );
}
```

Displays a button that allows users to manually switch between NGN and USD.

### Using the useCurrency Hook

```tsx
'use client';

import { useCurrency } from '@/lib/currency-context';

function CustomPriceDisplay() {
  const { currency, country, isLoading, setCurrency } = useCurrency();

  if (isLoading) {
    return <div>Detecting location...</div>;
  }

  const price = currency === 'NGN' ? 75000 : 50;
  const symbol = currency === 'NGN' ? '₦' : '$';

  return (
    <div>
      <p>Your location: {country}</p>
      <p>Price: {symbol}{price.toLocaleString()}</p>
      <button onClick={() => setCurrency(currency === 'NGN' ? 'USD' : 'NGN')}>
        Switch Currency
      </button>
    </div>
  );
}
```

## Component Props

### Price Component

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `priceNGN` | number | Yes | - | Price in Nigerian Naira |
| `priceUSD` | number | Yes | - | Price in US Dollars |
| `className` | string | No | '' | Additional CSS classes |
| `showCurrencyCode` | boolean | No | false | Show currency code (NGN/USD) |
| `decimals` | number | No | 2 | Number of decimal places |

### PriceRange Component

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `minPriceNGN` | number | Yes | - | Minimum price in Naira |
| `maxPriceNGN` | number | Yes | - | Maximum price in Naira |
| `minPriceUSD` | number | Yes | - | Minimum price in USD |
| `maxPriceUSD` | number | Yes | - | Maximum price in USD |
| `className` | string | No | '' | Additional CSS classes |
| `showCurrencyCode` | boolean | No | false | Show currency code |
| `decimals` | number | No | 2 | Number of decimal places |

### CurrencySwitcher Component

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `className` | string | No | '' | Additional CSS classes |

## useCurrency Hook API

```tsx
const {
  currency,      // 'NGN' | 'USD' - Current currency
  country,       // string - Detected country name
  isLoading,     // boolean - Loading state
  setCurrency,   // (currency: Currency) => void - Manually set currency
  refresh        // () => Promise<void> - Re-detect location
} = useCurrency();
```

## Caching

The system caches the detected location for 24 hours to:
- Reduce API calls
- Improve performance
- Provide consistent experience

**Clear cache manually:**
```tsx
import { clearCurrencyCache } from '@/lib/geolocation';

clearCurrencyCache(); // Clears the cached location
```

## How It Works

1. **On page load:** `CurrencyProvider` calls `detectUserLocation()`
2. **Check cache:** Looks for cached location data (valid for 24 hours)
3. **API call:** If no cache, calls ipapi.co to get user's location
4. **Currency detection:** Sets currency to NGN if country is Nigeria, otherwise USD
5. **Cache result:** Stores result in localStorage
6. **Component update:** All `<Price />` components automatically show correct currency

## Environment Variables

No environment variables required for basic usage!

**Optional:** For higher API limits, add to `.env`:
```bash
NEXT_PUBLIC_IPAPI_KEY=your_api_key_here
```

## Alternative APIs

If you want to use a different geolocation API, update `lib/geolocation.ts`:

**ip-api.com** (Free, 45 requests/min):
```typescript
const response = await fetch('http://ip-api.com/json/');
const data = await response.json();
const countryCode = data.countryCode;
```

**ipgeolocation.io** (Free, 1,000 requests/day):
```typescript
const response = await fetch(
  `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IPGEO_KEY}`
);
```

## Troubleshooting

### Currency not updating
- Check browser console for API errors
- Clear cache: `localStorage.removeItem('user_currency_cache')`
- Verify network access to ipapi.co

### Always showing USD
- This is the fallback behavior if detection fails
- Check if API limit is reached (1,000/day for free tier)
- Use manual currency switcher

### Slow initial load
- First load requires API call
- Subsequent loads use cache (instant)
- Consider showing loading state with `isLoading`

## Performance

- **First load:** ~200-500ms (API call)
- **Cached loads:** Instant (localStorage)
- **Cache duration:** 24 hours
- **API limit:** 1,000 requests/day (free tier)

## Best Practices

1. Always provide both NGN and USD prices
2. Use realistic conversion rates
3. Update prices regularly if using dynamic rates
4. Show loading state for better UX
5. Test with VPN to verify location detection
6. Consider adding manual currency switcher
7. Cache API responses to reduce calls
