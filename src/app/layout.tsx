import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display } from "next/font/google";
import "./globals.css";

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const bodyFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Isabella & Sebastian",
  description: "Invitación de boda de Isabella & Sebastian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${scriptFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
