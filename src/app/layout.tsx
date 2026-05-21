import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elixir.Doctor - Luxury Healthcare Tourism | Healing Without Borders",
  description: "World-class medical treatment, trusted specialists, and personalized care with the warmth of Atithi Devo Bhava.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen bg-dark-bg text-slate-100 selection:bg-brand-teal selection:text-dark-bg">
        {children}
      </body>
    </html>
  );
}
