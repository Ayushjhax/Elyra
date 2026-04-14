import type { Metadata } from "next";
import { Inter, Space_Grotesk, Poppins, Great_Vibes, Playfair_Display, Allura, JetBrains_Mono, Playball } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const playball = Playball({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-playball",
});

export const metadata: Metadata = {
  title: "Built for the next era of trading. ",
  description: "AI-powered forecasting and hedging of everyday uncertainties via Kalshi markets.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} ${greatVibes.variable} ${playfairDisplay.variable} ${allura.variable} ${jetbrainsMono.variable} ${playball.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
