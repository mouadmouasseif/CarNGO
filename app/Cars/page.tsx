"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const cars = [

  {
    name: "Peugeot 208",
    image: "/cars/peugeot-208.png",
    description: "Citadine agile idéale pour la ville.",
  },
 
  {
    name: "Hyundai Accent",
    image: "/cars/hyundai-accent.png",
    description: "Compacte fiable avec style et efficacité.",
  },
  {
    name: "Hyundai Tucson",
    image: "/cars/tucson.png",
    description: "Compacte fiable avec style et efficacité.",
  },
  {
    name: "Seat Ibiza",
    image: "/cars/ibiza.png",
    description: "Berline économique et spacieuse.",
  },
  {
    name: "Kia Sportage",
    image: "/cars/kia-sportage.png",
    description: "SUV moderne avec confort et performance.",
  },
  {
    name: "Dacia Logan",
    image: "/cars/Dacia-logan.png",
    description: "Berline économique et spacieuse.",
  },
  {
    name: "Hyundai Accent",
    image: "/cars/hyundai-accent.png",
    description: "Compacte fiable avec style et efficacité.",
  },
  {
    name: "Hyundai Tucson",
    image: "/cars/tucson.png",
    description: "SUV élégant et puissant.",
  },
  {
    name: "Seat Ibiza",
    image: "/cars/ibiza.png",
    description: "Polyvalente et dynamique pour tous vos trajets.",
  },
  {
    name: "Peugeot 308",
    image: "/cars/peugeot-308.jpg",
    description: "Berline raffinée et performante.",
  },
  {
    name: "Ford Focus",
    image: "/cars/ford-focus.jpg",
    description: "Conduite fluide et technologie moderne.",
  },
  {
    name: "Ford Fiesta",
    image: "/cars/ford-fiesta.jpg",
    description: "Compacte et sportive, parfaite en ville.",
  },
  {
    name: "Citroën C3",
    image: "/cars/citroen-c3.jpg",
    description: "Design unique et confort exceptionnel.",
  },
  {
    name: "Renault Mégane",
    image: "/cars/renault-megane.jpg",
    description: "Berline moderne alliant style et performance.",
  },
  {
    name: "Opel Corsa",
    image: "/cars/opel-corsa.jpg",
    description: "Citadine élégante, agile et économe.",
  },
  {
    name: "Dacia Sandero",
    image: "/cars/dacia-sandero.jpg",
    description: "La simplicité à petit prix.",
  },
  {
    name: "Dacia Stepway",
    image: "/cars/dacia-stepway.jpg",
    description: "Style crossover, esprit aventure.",
  },
  {
    name: "Dacia Duster",
    image: "/cars/dacia-duster.jpg",
    description: "SUV robuste et polyvalent.",
  },
  {
    name: "Renault Clio 4",
    image: "/cars/clio4.png",
    description: "Compacte au design moderne et fiable.",
  },
  {
    name: "Renault Clio 5",
    image: "/cars/clio5.png",
    description: "La nouvelle génération de Clio, raffinée et connectée.",
  },


];

export default function CarListing() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-6 py-12 bg-black text-white">
      <h1 className="text-3xl text-yellow-500 font-semibold mb-6 text-center">
        VOITURES DISPONIBLES À LA LOCATION
      </h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Rechercher une voiture (ex: Clio, Dacia...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Liste des voitures */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <Card key={index} className="bg-zinc-900 text-white">
              <CardContent className="p-4">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={400}
                  height={250}
                  className="rounded-xl w-full h-56 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-yellow-500">{car.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{car.description}</p>
                <a
                  href={`https://wa.me/212691145520?text=${encodeURIComponent(
                    `Bonjour, je souhaite réserver la voiture "${car.name}".\nDescription: ${car.description}\nMerci de me contacter pour plus d'informations.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="bg-yellow-500 hover:bg-yellow-300 text-white hover:text-gray-500 w-full">
                    RÉSERVER SUR WHATSAPP
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            Aucune voiture ne correspond à votre recherche.
          </p>
        )}
      </div>
    </section>
  );
}
