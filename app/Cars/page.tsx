"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car } from "lucide-react";
import { Filter } from "lucide-react";

const cars = [
  {
    name: "Peugeot 208",
    image: "/cars/peugeot-208.png",
    description: "Citadine agile idéale pour la ville.",
    transmission: "manuelle",
    seats: 5,
    type: "citadine",
    marque: "Peugeot",
    Carburant: "diesel && essence",
    
  },
  {
    name: "Hyundai Accent",
    image: "/cars/hyundai-accent.png",
    description: "Compacte fiable avec style et efficacité.",
    transmission: "automatique",
    seats: 5,
    type: "berline",
    marque: "Hyundai",
    Carburant: "essence",  
  },
  {
    name: "Hyundai Tucson",
    image: "/cars/tucson.png",
    description: "Compacte fiable avec style et efficacité.",
    transmission: "automatique",
    seats: 5,
    type: "SUV",
    marque: "Hyundai",
    Carburant: "diesel",
  },
  {
    name: "Seat Ibiza",
    image: "/cars/ibiza.png",
    description: "Berline économique et spacieuse.",
    transmission: "manuelle",
    seats: 5,
    type: "berline",
    marque: "Seat",
    Carburant: "diesel && essence",
  },
  {
    name: "Kia Sportage",
    image: "/cars/kia-sportage.png",
    description: "SUV moderne avec confort et performance.",
    transmission: "automatique",
    seats: 5,
    type: "SUV",
    marque: "Kia",
    Carburant: "diesel",
  },
  {
    name: "Dacia Logan",
    image: "/cars/Dacia-logan.png",
    description: "Berline économique et spacieuse.",
    transmission: "manuelle",
    seats: 5,
    type: "berline",
    marque: "Dacia",
    Carburant: "diesel && essence",
  },
  {
    name: "Peugeot 308",
    image: "/cars/peugeot-308.jpg",
    description: "Berline raffinée et performante.",
    transmission: "automatique",
    seats: 5,
    type: "berline",
    marque: "Peugeot",
    Carburant: "diesel && essence",

  },
  {
    name: "Ford Focus",
    image: "/cars/ford-focus.jpg",
    description: "Conduite fluide et technologie moderne.",
    transmission: "manuelle",
    seats: 5,
    type: "berline",
    marque: "Ford",
    Carburant: "diesel",
  },
  {
    name: "Ford Fiesta",
    image: "/cars/ford-fiesta.jpg",
    description: "Compacte et sportive, parfaite en ville.",
    transmission: "automatique",
    seats: 5,
    type: "citadine",
    marque: "Ford",
    Carburant: "desiel && essence",
  },
  {
    name: "Citroën C3",
    image: "/cars/citroen-c3.jpg",
    description: "Design unique et confort exceptionnel.",
    transmission: "manuelle",
    seats: 5,
    type: "citadine",
    marque: "Citroën",
    Carburant: "desil && essence",
  },
  {
    name: "Renault Mégane",
    image: "/cars/renault-megane.jpg",
    description: "Berline moderne alliant style et performance.",
    transmission: "automatique",
    seats: 5,
    type: "berline",
    marque: "Renault",
    Carburant: "diesel",
  },
  {
    name: "Opel Corsa",
    image: "/cars/opel-corsa.jpg",
    description: "Citadine élégante, agile et économe.",
    transmission: "manuelle",
    seats: 5,
    type: "citadine",
    marque: "Opel",
    Carburant: "diesel",

  },
  {
    name: "Dacia Sandero",
    image: "/cars/dacia-sandero.jpg",
    description: "La simplicité à petit prix.",
    transmission: "manuelle",
    seats: 5,
    type: "citadine",
    marque: "Dacia",
    Carburant: "diesel",

  },
  {
    name: "Dacia Stepway",
    image: "/cars/dacia-stepway.jpg",
    description: "Style crossover, esprit aventure.",
    transmission: "manuelle",
    seats: 5,
    type: "SUV",
    marque: "Dacia",
    Carburant: "diesel",

  },
  {
    name: "Dacia Duster",
    image: "/cars/dacia-duster.jpg",
    description: "SUV robuste et polyvalent.",
    transmission: "manuelle",
    seats: 5,
    type: "SUV",
    marque: "Dacia",
    Carburant: "diesel",
  },
 
  {
    name: "Renault Clio 5",
    image: "/cars/clio5.png",
    description: "La nouvelle génération de Clio, raffinée et connectée.",
    transmission: "automatique",
    seats: 5,
    type: "citadine",
    marque: "Renault",
     Carburant: "diesel",

  }
];

export default function CarListing() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    transmission: "",
    seats: "",
    type: "",
    marque: "",
    Carburant: "",
  });

  const filteredCars = cars.filter((car) => {
    return (
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.transmission ? car.transmission === filters.transmission : true) &&
      (filters.seats ? car.seats === Number(filters.seats) : true) &&
      (filters.type ? car.type === filters.type : true) &&
      (filters.marque ? car.marque === filters.marque : true) &&
      (filters.Carburant ? car.Carburant === filters.Carburant : true)
    );
  });

    return (
    <section className="px-6 py-12 bg-black text-white">
      <h1 className="text-3xl text-yellow-500 font-semibold mb-6 text-center">
        VOITURES DISPONIBLES À LA LOCATION
      </h1>

      {/* Barre de recherche */}
      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Rechercher une voiture..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Bouton filtre mobile */}
      <div className="sm:hidden flex justify-center mb-4">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} /> Filtres
        </Button>
      </div>

      {/* Zone de filtres */}
      <div
        className={`flex flex-wrap gap-3 justify-center mb-10 transition-all duration-300 ${
          showFilters ? "block" : "hidden sm:flex"
        }`}
      >
        <select
          onChange={(e) =>
            setFilters({ ...filters, Carburant: e.target.value })
          }
          className="bg-zinc-800 text-white px-4 py-2 rounded-lg"
        >
          <option value="">Carburant</option>
          <option value="essence">Essence</option>
          <option value="diesel">Diesel</option>
          <option value="diesel && essence">Essence ou Diesel</option>
        </select>

        <select
          onChange={(e) =>
            setFilters({ ...filters, transmission: e.target.value })
          }
          className="bg-zinc-800 text-white px-4 py-2 rounded-lg"
        >
          <option value="">Transmission</option>
          <option value="automatique">Automatique</option>
          <option value="manuelle">Manuelle</option>
        </select>

        <select
          onChange={(e) => setFilters({ ...filters, seats: e.target.value })}
          className="bg-zinc-800 text-white px-4 py-2 rounded-lg"
        >
          <option value="">Places</option>
          <option value="5">5 places</option>
          <option value="7">7 places</option>
        </select>

        <select
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="bg-zinc-800 text-white px-4 py-2 rounded-lg"
        >
          <option value="">Type</option>
          <option value="SUV">4x4 / SUV</option>
          <option value="citadine">Citadine</option>
          <option value="berline">Berline</option>
        </select>

        <select
          onChange={(e) => setFilters({ ...filters, marque: e.target.value })}
          className="bg-zinc-800 text-white px-4 py-2 rounded-lg"
        >
          <option value="">Marque</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Seat">Seat</option>
          <option value="Kia">Kia</option>
          <option value="Dacia">Dacia</option>
          <option value="Ford">Ford</option>
          <option value="Citroën">Citroën</option>
          <option value="Renault">Renault</option>
          <option value="Opel">Opel</option>
        </select>
      </div>

      {/* Liste voitures */}
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
                <h3 className="text-xl font-bold mb-2 text-yellow-500">
                  {car.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{car.description}</p>
                <a
                  href={`https://wa.me/212691145520?text=${encodeURIComponent(
                    `Bonjour, je souhaite réserver la voiture "${car.name}".\nDescription: ${car.description}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="bg-yellow-500 hover:bg-yellow-300 text-white hover:text-gray-800 w-full">
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
