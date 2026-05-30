import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "World Explorer",
  description: "Country Explorer Project"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}