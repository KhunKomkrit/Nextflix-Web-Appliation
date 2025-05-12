'use client';

import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    const match = document.cookie.match(/NEXT_LOCALE=(\w+)/);
    if (match?.[1]) {
      setCurrentLocale(match[1]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/`;
    window.location.reload();
  };

  return (
    <select
      value={currentLocale}
      onChange={handleChange}
      className="bg-transparent text-white border border-white px-2 py-1 rounded"
    >
      <option value="en">EN</option>
      <option value="th">TH</option>
    </select>
  );
}
