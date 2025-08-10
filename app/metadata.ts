import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Location Voiture Maroc | Rabat, Salé, Kénitra - CarRent Morocco",
  description:
    "Agence de location de voitures au Maroc. Louez votre véhicule à Rabat, Salé, Kénitra. Large choix: Dacia Logan, Renault Clio, Peugeot 208, Toyota Yaris. Prix compétitifs, service 24h/7j.",

  keywords: [
    "location voiture maroc",
    "location voiture rabat",
    "location voiture salé",
    "location voiture kénitra",
    "rent car morocco",
    "agence location voiture",
    "dacia logan location",
    "renault clio location",
    "peugeot 208 location",
    "toyota yaris location",
    "location voiture pas cher maroc",
    "location longue durée maroc",
  ],

  authors: [{ name: "CarRent Morocco" }],
  creator: "CarRent Morocco",
  publisher: "CarRent Morocco",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["ar_MA", "en_US"],
    url: "https://carrent-morocco.com",
    siteName: "CarRent Morocco",
    title: "Location Voiture Maroc | Rabat, Salé, Kénitra - CarRent Morocco",
    description:
      "Agence de location de voitures au Maroc. Louez votre véhicule à Rabat, Salé, Kénitra. Large choix de voitures populaires au Maroc. Réservation en ligne facile.",
    images: [
      {
        url: "/Cars",
        width: 1200,
        height: 630,
        alt: "CarRent Morocco - Location de voitures au Maroc",
        type: "cars/clio4.png",
      },
      {
        url: "/Cars",
        width: 1200,
        height: 630,
        alt: "Flotte de voitures disponibles - Dacia, Renault, Peugeot, Toyota",
        type: "cars/dacia-logan.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "/Cars",
    creator: "@CarRentMorocco",
    title: "Location Voiture Maroc | Rabat, Salé, Kénitra",
    description:
      "Agence de location de voitures au Maroc. Large choix de véhicules populaires. Réservation facile et prix compétitifs.",
    images: ["/cars/cilio4.png"],
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "any" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#1e40af",
      },
    ],
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: "https://carrent-morocco.com",
    languages: {
      "fr-MA": "https://carrent-morocco.com",
      "ar-MA": "https://carrent-morocco.com/ar",
      "en-US": "https://carrent-morocco.com/en",
    },
  },

  category: "business",

  other: {
    "msapplication-TileColor": "#1e40af",
    "theme-color": "#1e40af",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "geo.region": "MA",
    "geo.placename": "Rabat, Salé, Kénitra",
    "geo.position": "34.020882;-6.841650",
    ICBM: "34.020882, -6.841650",
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}
