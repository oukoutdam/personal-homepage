'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { JSX, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './language-switcher';

const navItems = {
  '/resume': { name: 'Résumé' },
  // '/blog': { name: 'Blog' },
  '/projects': { name: 'Projects' },
  '/contact': { name: 'Contact' },
};

export default function Navbar(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // this is for hydration warinings, by not mounting the component on the server
  const t = useTranslations('Nav');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className='mb-2 py-5 lg:mb-4'>
      <div className='flex flex-col justify-between md:flex-row md:items-center'>
        <div className='flex items-center'>
          <Link href='/' className='text-3xl font-semibold tracking-tight'>
            {t('title')}
          </Link>
        </div>
        <div className='mt-6 flex flex-row items-center gap-4 md:ml-auto md:mt-0'>
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              href={path}
              key={path}
              className='relative flex align-middle text-lg transition-all hover:text-neutral-800 dark:hover:text-neutral-200'
            >
              {name}
            </Link>
          ))}
          <button
            aria-label='Toggle Light and Dark Mode'
            type='button'
            className='h-10 w-10 rounded p-3 focus:outline-none'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='currentColor'
                className='h-4 w-4 text-yellow-500 dark:text-yellow-500'
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                )}
              </svg>
            )}
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
