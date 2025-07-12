//Contact/page.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, tu peux ajouter l’envoi vers une API ou un service (ex: EmailJS, Formspree)
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 font-sans">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-yellow-500 font-bold text-center mb-10">Contactez-nous</h1>

        <Card className="bg-zinc-900 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">Envoyez-nous un message</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <p className="text-green-400">Merci pour votre message. Nous vous répondrons bientôt !</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-1 text-sm text-gray-300">Nom</label>
                  <Input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="bg-black border border-zinc-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm text-gray-300">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Votre adresse email"
                    className="bg-black border border-zinc-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm text-gray-300">Message</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={5}
                    className="bg-black border border-zinc-700 text-white"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold w-full"
                >
                  Envoyer
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
