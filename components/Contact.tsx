"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="text-center grid grid-cols-1 sm:grid-cols-2 flex-col gap-6 bg-black text-white px-6 py-16">
      {/* Form Section */}
      <section className="flex justify-center">
        <Card className="w-full max-w-xl bg-zinc-900 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-yellow-500 mb-4">Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} className="bg-zinc-800 border-zinc-700 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre email" {...field} className="bg-zinc-800 border-zinc-700 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre message" {...field} className="bg-zinc-800 border-zinc-700 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-orange-500 hover:bg-orange-400 text-white">Envoyer</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>

      {/* Social Media & Location Section */}
      <section className="flex flex-col justify-center gap-6">
        <Card className="w-full bg-zinc-900 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-yellow-500 mb-4">Social Media</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4 text-3xl">
              <a href="https://www.instagram.com/"><Instagram className="text-pink-500 hover:text-pink-400" /></a>
              <a href="https://www.facebook.com/"><Facebook className="text-blue-500 hover:text-blue-400" /></a>
              <a href="#"><Twitter className="text-sky-400 hover:text-sky-300" /></a>
              <a href="https://www.linkedin.com/company/club-nautique-palge-rabat/?viewAsMember=true"><Linkedin className="text-blue-700 hover:text-blue-600" /></a>
              <a href="https://api.whatsapp.com/send/?phone=212691145520&text&type=phone_number&app_absent=0"><FaWhatsapp className="text-green-500 hover:text-green-400" /></a>
              <a href="https://www.tiktok.com/@car.n.go?_t=ZN-8xfQUlLJZsU&_r=1"><FaTiktok className="text-white hover:text-gray-400" /></a>
            </div>
          </CardContent>
        </Card>

<Card className="w-full bg-zinc-900 text-white shadow-lg">
  <CardHeader>
    <CardTitle className="text-3xl font-bold text-yellow-500 mb-3">Localisation</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="w-full h-[100px] rounded-lg overflow-hidden">
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
    </div>
  );
}
