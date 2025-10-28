'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const LOCALES: { code: string; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'kh', label: 'ខ្មែរ' },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // 2. Get the locale-aware router and pathname
  const router = useRouter();
  const pathname = usePathname(); // This will be e.g., '/dashboard', not '/en/dashboard'
  const activeLocale = useLocale(); // This will be e.g., 'en'

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  // 3. The logic is now much simpler!
  function changeLocale(newLocale: string) {
    // router.push will automatically switch the locale prefix
    router.push(pathname, { locale: newLocale });
    setOpen(false);
  }

  return (
    <div className='relative inline-block' ref={ref}>
      <button
        aria-haspopup='menu'
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className='inline-flex cursor-pointer items-center justify-center rounded-md border-none bg-transparent p-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:ring-offset-2'
        title='Change language'
        type='button'
      >
        <svg
          className='h-5 w-5 text-blue-500'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden
        >
          <path
            d='M12 2a10 10 0 100 20 10 10 0 000-20z'
            stroke='currentColor'
            strokeWidth='1.5'
          />
          <path
            d='M2.5 12h19M12 2.5c2 2.5 3 6 3 9.5s-1 7-3 9.5M12 2.5C10 5 9 8.5 9 12s1 7 3 9.5'
            stroke='currentColor'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {open && (
        <div
          role='menu'
          className='absolute right-0 z-[60] mt-2 min-w-[140px] rounded-lg border border-gray-200 bg-white p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)] dark:bg-black'
        >
          {LOCALES.map((l) => (
            <button
              key={l.code}
              role='menuitem'
              // 4. Highlight the active language
              className={`block w-full cursor-pointer rounded-md border-none bg-transparent px-2.5 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                l.code === activeLocale ? 'font-bold text-blue-500' : ''
              }`}
              onClick={() => changeLocale(l.code)}
              type='button'
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
