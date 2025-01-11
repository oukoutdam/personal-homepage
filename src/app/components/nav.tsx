"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import {JSX, useEffect, useState} from "react";

const navItems = {
  "/portfolio": {name: "Portfolio"},
  "/blog": {name: "Blog"},
  "/tools": {name: "Tools"},
}

export default function Navbar() : JSX.Element {
  const { theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false); // this is for hydration warinings, by not mounting the component on the server

  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <nav className="mb-12 lg:mb-16 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">Ouk Outdam&apos;s Page</Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, {name}]) => (
            <Link
              href={path}
              key={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <button 
            aria-label="Toggle Light and Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {
              mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                >
                  {theme === 'dark' ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                  )}
                </svg>
              )
            }
          </button>

        </div>
      </div>
    </nav>
  );
}