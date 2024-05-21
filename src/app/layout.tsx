import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "../utils/context/CartContext";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getSession } from "next-auth/react";
import SessionWrapper from "../components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "McDonald's Take Home",
  description: "Generated by Carina",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch the session on the server side.
  const session = await getSession();
  return (
    <html lang="en">
      <SessionWrapper session={session}>
        <CartProvider>
          <body>
            <NavBar />
            {children}
            <Footer />
          </body>
        </CartProvider>
      </SessionWrapper>
    </html>
  );
}
