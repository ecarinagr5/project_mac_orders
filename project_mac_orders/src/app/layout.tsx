import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "../utils/context/CartContext";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "McDonald's Take Home",
  description: "Generated by Carina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CartProvider>
        <body>
        <NavBar />
          {children}
          </body>
      </CartProvider>
    </html>
  );
}
