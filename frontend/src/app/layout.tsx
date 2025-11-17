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
  title: "Exa + LiveKit Deep Researcher - Assistant de Recherche IA Vocale",
  description: "Agent de recherche approfondie autonome avec planification itérative, mises à jour de l'interface en temps réel via streaming RPC et clarification intelligente des requêtes. Démontre comment les agents vocaux peuvent mener des flux de recherche complets en plusieurs étapes.",
  keywords: ["IA vocale", "assistant de recherche", "Exa", "LiveKit", "recherche approfondie", "agent IA"],
  authors: [{ name: "LiveKit" }],
  openGraph: {
    title: "Exa + LiveKit Deep Researcher",
    description: "Assistant de Recherche IA Vocale - Recherche autonome avec mises à jour en temps réel",
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
