"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="bg-background shadow-md z-50 sticky top-10 rounded-full">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" onClick={closeMenu}>
            <span>Home</span>
          </Link>
          <nav className="hidden md:block">
            <DesktopMenu closeMenu={closeMenu} />
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>
        <div
          className={`
          md:hidden absolute top-full left-0 right-0 
          shadow-md transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 bg-background translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          } 
          `}
        >
          <MobileMenu closeMenu={closeMenu} />
        </div>
      </header>
    </>
  );
}

interface MenuProps {
  closeMenu: () => void;
}

const DesktopMenu = ({ closeMenu }: MenuProps) => (
  <ul className="flex items-center space-x-8">
    <MenuItems closeMenu={closeMenu} />
  </ul>
);

const MobileMenu = ({ closeMenu }: MenuProps) => (
  <ul>
    <MenuItems closeMenu={closeMenu} />
  </ul>
);

const MenuItems = ({ closeMenu }: MenuProps) => (
  <>
    <li>
      <Link href="/about" onClick={closeMenu} className="block py-2 px-4">
        About
      </Link>
    </li>
    <li>
      <Link href="/projects" onClick={closeMenu} className="block py-2 px-4">
        Projects
      </Link>
    </li>
    <div>
      <ThemeToggle />
    </div>
  </>
);
