'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Currency, detectUserLocation, GeolocationResponse } from './geolocation';

interface CurrencyContextValue {
  currency: Currency;
  country: string;
  isLoading: boolean;
  setCurrency: (currency: Currency) => void;
  refresh: () => Promise<void>;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

interface CurrencyProviderProps {
  children: ReactNode;
}

export function CurrencyProvider({ children }: CurrencyProviderProps) {
  const [currency, setCurrencyState] = useState<Currency>('USD');
  const [country, setCountry] = useState<string>('Unknown');
  const [isLoading, setIsLoading] = useState(true);

  const loadLocation = async () => {
    setIsLoading(true);
    try {
      const location: GeolocationResponse = await detectUserLocation();
      setCurrencyState(location.currency);
      setCountry(location.country);
    } catch (error) {
      console.error('Failed to detect location:', error);
      setCurrencyState('USD');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLocation();
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
  };

  const refresh = async () => {
    await loadLocation();
  };

  const value: CurrencyContextValue = {
    currency,
    country,
    isLoading,
    setCurrency,
    refresh,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
