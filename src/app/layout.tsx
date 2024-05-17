import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WelcomeScreen from "./components/WelcomeScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Munchies",
  description: "A Umain work test.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <WelcomeScreen />
        {children}
      </body>
    </html>
  );
}
