import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">FC</span>
            </div>
            <span className="font-bold text-xl">Fatima Cake</span>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-pink-400 transition-colors"
            >
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Fatima Cake. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
