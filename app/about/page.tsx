'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-12">
      <section className="max-w-5xl mx-auto text-center mb-10">
        {/* Logo + nom entreprise */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/logo.jpg" // Assure-toi que l'image est bien dans public/images
            alt="Logo Car N Go"
            width={120}
            height={120}
            className="rounded-full border-4 border-yellow-400 shadow-md"
          />
          <h1 className="text-4xl font-bold text-yellow-500">À propos de Car N Go</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto space-y-8">
        <Card className="bg-zinc-900 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">Notre Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 text-sm leading-relaxed">
            Chez <strong>Car N Go</strong>, nous croyons que la location de voiture devrait être simple, rapide et abordable. Que vous soyez en voyage d'affaires, en vacances ou que vous ayez besoin d’un véhicule pour quelques jours, nous mettons à votre disposition un large choix de voitures pour répondre à tous vos besoins.
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">Pourquoi nous choisir ?</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 text-sm space-y-2">
            <ul className="list-disc list-inside">
              <li>Large gamme de véhicules récents et bien entretenus</li>
              <li>Tarifs compétitifs et transparents</li>
              <li>Assistance 24/7 et service client réactif</li>
              <li>Réservation facile en ligne</li>
              <li>Possibilité de livraison du véhicule à votre emplacement</li>
            </ul>
          </CardContent>
        </Card>

        {/* Coordonnées */}
        <Card className="bg-zinc-900 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">Nos Coordonnées</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 text-sm leading-relaxed space-y-2">
            <p><strong>Adresse :</strong> CAR N GO LOCATION DE VOITURE 11 Av. Lalla Amina, Salé 11000, Maroc</p>
            <p><strong>Téléphone :</strong> <a href="tel:+212691145520" className="text-yellow-400 hover:underline">+212 691-145520</a></p>
            <p><strong>Fix :</strong> <a href="tel:+212537866513" className="text-yellow-400 hover:underline">+212 537-866-513</a></p>
            <p><strong>Email :</strong> <a href="mailto:carngo@gmail.com" className="text-yellow-400 hover:underline">contact@carngo.ma</a></p>
          </CardContent>
        </Card>

        {/* Google Map */}
        <Card className="bg-zinc-900 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">Où nous trouver</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 text-sm space-y-4">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.3119751050613!2d-6.8064648000000005!3d34.0358676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b8ccc56138b%3A0xc74d7560870b1535!2sCAR%20N%20GO%20LOCATION%20DE%20VOITURE!5e0!3m2!1sfr!2sma!4v1752059510792!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
