'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CarListing from "@/components/Cars";
import Contact from "@/components/Contact";

export default function HomePage() {
  const [currentCar, setCurrentCar] = useState("/Image/Car.png");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // début fade-out

      setTimeout(() => {
        setCurrentCar(prev => {
          if (prev === "/Image/Car.png") return "/Image/Car2.png";
          else if (prev === "/Image/Car2.png") return "/Image/Car3.png";
          else return "/Image/Car.png";
        });
        setFade(true); // fade-in
      }, 500); // durée de la transition en ms
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="px-8 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h2 className="text-5xl font-bold mb-4">RENT THE <br /> PERFECT CAR</h2>
          <p className="text-gray-300 mb-6">Find the best rental deals with Car N Go</p>
          <Button className="bg-orange-400 hover:bg-yellow-400 text-white px-6 py-2">BOOK NOW</Button>
        </div>
        <div className="flex-1 w-full">
          <Image
            src={currentCar}
            alt="Rotating car image"
            width={600}
            height={400}
            className={`w-full h-auto transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
            priority
          />
        </div>
      </section>

      {/* Car Cart Placeholder */}
      <CarListing />

      {/* Contact */}
      <Contact />
    </main>
  );
}
