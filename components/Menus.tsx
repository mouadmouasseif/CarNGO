"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
export default function Menue() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-800 px-4 sm:px-8 py-6 bg-black text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-yellow-500">CAR N GO</h1>
        <div className="flex flex-col items-center gap-4">
                  <Image
                    src="/images/logo.png" // Assure-toi que l'image est bien dans public/images
                    alt="Logo Car N Go"
                    width={90}
                    height={70}
                  />                </div>
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X className="text-yellow-500" /> : <Menu className="text-yellow-500" />}
          </Button>
        </div>

        <nav className="hidden lg:flex gap-6 text-sm">
          <a href="/." className="hover:text-yellow-500">HOME</a>
          <a href="/about" className="hover:text-yellow-500">ABOUT US</a>
          <a href="/Cars" className="hover:text-yellow-500">CARS</a>
          <a href="/Contact" className="hover:text-yellow-500">CONTACT</a>
        </nav>

        
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 px-4">
          <a href="/." className="hover:text-yellow-500">HOME</a>
          <a href="/about" className="hover:text-yellow-500">ABOUT US</a>
          <a href="/Cars" className="hover:text-yellow-500">CARS</a>
          <a href="/Contact" className="hover:text-yellow-500">CONTACT</a>
         
        </div>
      )}
    </header>
  );
}
