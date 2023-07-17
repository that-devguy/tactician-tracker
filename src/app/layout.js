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
      <body className={`m-4 ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
