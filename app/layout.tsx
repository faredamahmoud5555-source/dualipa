import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SurpriseButton from "@/components/SurpriseButton";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "700", "800", "900"],
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  style: ["normal", "italic"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PULP. — Culture, uncensored.",
  description:
    "PULP. is the internet's favourite dispatch on style, sound, screen and everything in between.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${instrument.variable} ${inter.variable} ${spaceGrotesk.variable} bg-paper text-ink font-body antialiased`}
      >
        {children}
        <SurpriseButton />
      </body>
    </html>
  );
}
