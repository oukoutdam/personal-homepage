import Link from "next/link";
import {JSX} from "react";

const navItems = {
  "/blog": {name: "Blog"},
  "/tools": {name: "Tools"},
}

export default function Navbar() : JSX.Element {
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
        </div>
      </div>
    </nav>
  );
}