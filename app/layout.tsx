import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, JetBrains_Mono, Manrope } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-display",
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Luis Felipe Guilhão — Desenvolvedor Front-end & Mobile",
  description:
    "Desenvolvedor front-end e mobile especializado em React, Next.js, Vue, Nuxt e React Native. Interfaces rápidas, acessíveis e com acabamento de produto.",
  authors: [{ name: "Luis Felipe G Silva" }],
  keywords: [
    "desenvolvedor front-end",
    "desenvolvedor mobile",
    "React",
    "Next.js",
    "React Native",
    "portfólio",
  ],
  openGraph: {
    title: "Luis Felipe Guilhão — Desenvolvedor Front-end & Mobile",
    description:
      "Interfaces rápidas, acessíveis e com acabamento de produto. React, Next.js, Vue, Nuxt e React Native.",
    locale: "pt_BR",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0C",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bricolage.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      >
        <SmoothScroll>
          <SpeedInsights />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
