import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

import "@/assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brasoul Beauty Care",
  description:
    "Na BRASOUL, pensamos, criamos e desenvolvemos cosméticos mais saudáveis, naturais e com alta performance. Escolhemos a biodiversidade da Amazônia e seus ingredientes naturais para proporcionar beleza limpa às nossas fórmulas. Descubra produtos sustentáveis, inspirados na riqueza da natureza brasileira, livre de testes em animais.",
  keywords: [
    "BRASOUL",
    "shampoo",
    "condicionador",
    "conditioner",
    "Daily Glow",
    "BTX Repair",
    "Sublime",
    "Radiant",
    "Brasil",
    "Brazil",
    "Ingredientes Naturais",
    "Natural Ingredients",
    "Beleza",
    "Beauty",
    "Care",
    "Cuidados",
    "Natural",
    "Comésticos",
    "Comestics",
    "Cruelty Free",
    "Não testado em animais",
    "Capilar",
    "Hair",
    "Skin",
    "Pele",
    "Amazon",
    "Amazônia",
  ],
  authors: {
    name: "TYOU Tecnologia",
    url: "https://www.instagram.com/tyoutecnologia/",
  },
  icons: "/favicon.png",
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Brasoul Beauty Care",
    description:
      "Na BRASOUL, pensamos, criamos e desenvolvemos cosméticos mais saudáveis, naturais e com alta performance. Escolhemos a biodiversidade da Amazônia e seus ingredientes naturais para proporcionar beleza limpa às nossas fórmulas. Descubra produtos sustentáveis, inspirados na riqueza da natureza brasileira, livre de testes em animais.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
