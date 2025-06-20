"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  const handleContactUs = () => {
    window.open("https://wa.me/+905528535323", "_blank");
  };

  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">FC</span>
            </div>
            <span className="hidden font-bold text-xl text-gray-900 md:block">
              Fatima Cake
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/menu" className="hidden md:inline-flex">
              <Button variant="ghost">Menu</Button>
            </Link>
            <Button
              onClick={handleContactUs}
              className="bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
