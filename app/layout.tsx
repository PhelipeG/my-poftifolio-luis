import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "../components/header";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Reduzindo variantes de fonte para melhorar a performance
  display: 'swap', // Garante que o texto seja exibido com uma fonte de fallback enquanto a fonte principal carrega
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Portfolio Luis",
  description: "Este é o meu portfólio onde você pode encontrar meus projetos e informações sobre mim.",
  authors: [{ name: "Luis Felipe G Silva" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload das fontes e recursos críticos */}
        <link 
          rel="preload" 
          href="/images/hero-1.png" 
          as="image" 
        />
        {/* Preconnect para domínios externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Meta tags para melhorar SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        <SpeedInsights />
        <Header />
        {children}
      </body>
    </html>
  );
}
