import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baangre AI - Assistant de Recherche IA Vocale",
  description: "Démonstration d'un agent IA vocal pour la digitalisation. Recherche approfondie autonome, rapports structurés avec sources vérifiées, et interaction vocale naturelle.",
  keywords: ["IA vocale", "assistant de recherche", "digitalisation", "recherche approfondie", "agent IA", "IA pour entreprises"],
  authors: [{ name: "Baangre AI" }],
  openGraph: {
    title: "Baangre AI - Recherche IA Vocale",
    description: "Assistant de Recherche IA Vocale - Démonstration pour l'IA et la Digitalisation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
