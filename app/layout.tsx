import type { Metadata, Viewport } from "next"
import { Playfair_Display, Nunito } from "next/font/google"
import type { ReactNode } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Flor de Mandacaru — Bistrô Nordestino",
  description:
    "Bistrô Flor de Mandacaru: sabores autênticos do sertão nordestino em um ambiente acolhedor e sofisticado. Reserve sua mesa.",
  keywords: ["bistrô", "culinária nordestina", "restaurante", "Flor de Mandacaru", "comida regional"],
  openGraph: {
    title: "Flor de Mandacaru — Bistrô Nordestino",
    description: "Sabores autênticos do sertão em um ambiente acolhedor e sofisticado.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#b8451f",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  )
}
