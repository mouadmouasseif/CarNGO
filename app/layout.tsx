// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Menue from "@/components/Menus";
import WhatsappChat from "@/components/WhatsappChat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car N Go - Location de voiture au Maroc",
  description:
    "Louez une voiture facilement avec Car N Go, votre agence de confiance à Rabat. Véhicules récents, prix compétitifs, service client réactif.",
  keywords: [
    "location voiture Maroc",
    "Car N Go",
    "location voiture Rabat",
    "voiture pas cher Maroc",
    "voiture à louer Rabat",
    "agence location voiture",
    "location voiture aéroport Rabat",
    "voiture avec chauffeur Maroc",
  ],
  authors: [{ name: "Car N Go", url: "https://carngo.ma" }],
  creator: "Car N Go",
  publisher: "Car N Go",
  metadataBase: new URL("https://carngo.ma"),
  openGraph: {
    type: "website",
    url: "https://carngo.ma",
    title: "Car N Go - Location de voiture à Rabat-Salé, Maroc",
    description:
      "Découvrez les meilleurs tarifs pour la location de voiture à Rabat avec Car N Go. Large choix de véhicules pour tous vos déplacements.",
    siteName: "Car N Go",
    images: [
      {
        url: "https://carngo.ma/logo.png",
        width: 800,
        height: 600,
        alt: "Car N Go - logo",
      },
    ],
    locale: "fr_MA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car N Go - Location de voiture au Maroc",
    description:
      "Louez facilement votre voiture avec Car N Go. Qualité, service et prix imbattables à Rabat.",
    images: ["https://carngo.ma/logo.png"],
    creator: "@carngo_ma",
  },
  icons: {
    icon: "/Image/logo.png",
    shortcut: "/Image/logo.png",
    apple: "/Image/logo.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Image/logo.jpg" type="image/jpg" />
        <link rel="apple-touch-icon" href="/Image/logo.jpg" />
        <link rel="shortcut icon" href="/Image/logo.jpg" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={`bg-black text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menue />
        {children}
        <Footer />
        <WhatsappChat />
      </body>
    </html>
  );
}
