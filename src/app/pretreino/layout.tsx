import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pré-treino | Energyze Suplementos",
  description: "Descrição sobre o pré-treino",
};

export default function PreTreinoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <link 
          rel="icon"
          href="/iconhomepage.png"
          type="image/png"
          sizes="any"
          />
      {children}
    </div>
  );
}
