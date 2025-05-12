'use client';

import { useState, useEffect } from 'react';

export function useLocaleFromCookie(defaultLocale = 'en') {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    const match = document.cookie.match(/NEXT_LOCALE=(\w+)/);
    if (match?.[1]) {
      setLocale(match[1]);
    }
  }, []);

  return locale;
}
