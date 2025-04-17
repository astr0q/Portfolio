import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600 p-3">
          <Link href="/" className="block text-teal-600">
            <span className="sr-only">Home</span>
            <Image
              src="/KK.png"
              alt="Logo"
              width={100}
              height={50}
              className="h-15 w-auto"
              priority
            />
          </Link>
        </div>
        <p className="flex justify-center text-white transition-all duration-300 hover:text-gray-300">
          Kristers Kalkis
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <Link
              href="/"
              className="text-white transition-all duration-300 hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-white transition-all duration-300 hover:text-gray-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className="text-white transition-all duration-300 hover:text-gray-300"
            >
              Contacts
            </Link>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.instagram.com/kalkis_/ "
              rel="noreferrer"
              target="_blank"
              className="text-white transition-all duration-300 hover:text-gray-300 hover:rotate-12"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/astr0q"
              rel="noreferrer"
              target="_blank"
              className="text-white transition-all duration-300 hover:text-gray-300 hover:rotate-12"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.002-.067 1.502 1.049 1.502 1.049.89 1.57 2.34 1.117 2.91.854.092-.643.348-1.116.637-1.374-2.221-.25-4.552-1.116-4.552-4.96 0-1.094.392-1.989 1.04-2.686-.105-.25-.451-1.25.099-2.535 0 0 .844-.271 2.758 1.053 1.062-.296 2.213-.444 3.353-.447 1.14.003 2.29.151 3.352.447 1.914-1.324 2.758-1.053 2.758-1.053.551 1.285.205 2.285.099 2.535.648.698 1.04 1.592 1.04 2.686 0 3.847-2.336 4.708-4.562 4.954.36.308.693.922.693 1.856 0 1.34-.01 2.417-.01 2.74 0 .268.18.577.688.48C19.136 20.197 22 16.441 22 12.017 22 6.484 17.523 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
                <a
                    href="https://www.linkedin.com/in/kristers-kalkis-882633333/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition-transform duration-300 hover:rotate-12"
                >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.96 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
                    </svg>
                </a>
                </li>
        </ul>

        <div className="mt-6 text-center text-white text-sm">
          <p>&copy; 2025 Kristers Kalkis. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
