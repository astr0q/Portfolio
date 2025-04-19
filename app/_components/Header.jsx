"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-zinc-800">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/" className="block text-teal-600">
              <span className="sr-only">Home</span>
              <Image
                src="/KK.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-8 w-auto border border-white"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-white transition-all duration-300 hover:text-gray-300 hover:scale-110"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-white transition-all duration-300 hover:text-gray-300 hover:scale-110"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className="text-white transition-all duration-300 hover:text-gray-300 hover:scale-110"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="mt-2 px-4 pb-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-white transition-all duration-300 hover:text-gray-300 block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-white transition-all duration-300 hover:text-gray-300 block"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className="text-white transition-all duration-300 hover:text-gray-300 block"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
