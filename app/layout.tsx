import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Manrope } from "next/font/google";
import { Header } from "../components/header";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Portfolio Luis",
  description: "Este é o meu portfólio onde você pode encontrar meus projetos e informações sobre mim.",
  authors: [{ name: "Luis Felipe G Silva" }],
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bricolage.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <SpeedInsights />
        <Header />
        {children}
      </body>
    </html>
  );
}
