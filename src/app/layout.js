import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tactician Tracker - TFT Stats",
  description: "Team Fight Tactics Stats Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-brand-bg text-white ${inter.className}`}>
        <Navbar />
        <main className="px-10 py-5">{children}</main>
      </body>
    </html>
  );
}
