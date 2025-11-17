'use client';

import React from 'react';
import { useCurrency } from '@/lib/currency-context';

interface PriceProps {
  priceNGN: number;
  priceUSD: number;
  className?: string;
  showCurrencyCode?: boolean;
  decimals?: number;
}

export function Price({
  priceNGN,
  priceUSD,
  className = '',
  showCurrencyCode = false,
  decimals = 2,
}: PriceProps) {
  const { currency, isLoading } = useCurrency();

  if (isLoading) {
    return (
      <span className={`animate-pulse ${className}`}>
        Loading...
      </span>
    );
  }

  const isNigeria = currency === 'NGN';
  const price = isNigeria ? priceNGN : priceUSD;
  const symbol = isNigeria ? '₦' : '$';
  const currencyCode = isNigeria ? 'NGN' : 'USD';

  const formattedPrice = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(price);

  return (
    <span className={className}>
      {symbol}
      {formattedPrice}
      {showCurrencyCode && <span className="ml-1 text-sm opacity-70">{currencyCode}</span>}
    </span>
  );
}

interface PriceRangeProps {
  minPriceNGN: number;
  maxPriceNGN: number;
  minPriceUSD: number;
  maxPriceUSD: number;
  className?: string;
  showCurrencyCode?: boolean;
  decimals?: number;
}

export function PriceRange({
  minPriceNGN,
  maxPriceNGN,
  minPriceUSD,
  maxPriceUSD,
  className = '',
  showCurrencyCode = false,
  decimals = 2,
}: PriceRangeProps) {
  const { currency, isLoading } = useCurrency();

  if (isLoading) {
    return (
      <span className={`animate-pulse ${className}`}>
        Loading...
      </span>
    );
  }

  const isNigeria = currency === 'NGN';
  const minPrice = isNigeria ? minPriceNGN : minPriceUSD;
  const maxPrice = isNigeria ? maxPriceNGN : maxPriceUSD;
  const symbol = isNigeria ? '₦' : '$';
  const currencyCode = isNigeria ? 'NGN' : 'USD';

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(price);

  return (
    <span className={className}>
      {symbol}
      {formatPrice(minPrice)} - {symbol}
      {formatPrice(maxPrice)}
      {showCurrencyCode && <span className="ml-1 text-sm opacity-70">{currencyCode}</span>}
    </span>
  );
}

interface CurrencySwitcherProps {
  className?: string;
}

export function CurrencySwitcher({ className = '' }: CurrencySwitcherProps) {
  const { currency, setCurrency, country } = useCurrency();

  const toggleCurrency = () => {
    const newCurrency = currency === 'NGN' ? 'USD' : 'NGN';
    setCurrency(newCurrency);
  };

  return (
    <button
      onClick={toggleCurrency}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-md border transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${className}`}
      title={`Switch currency (detected: ${country})`}
    >
      <span className="font-medium">
        {currency === 'NGN' ? '₦ NGN' : '$ USD'}
      </span>
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    </button>
  );
}
