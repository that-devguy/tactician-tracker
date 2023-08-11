import "./globals.css";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tactician Tracker - TFT Stats",
  description: "Team Fight Tactics Stats Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-brand-bg text-white ${inter.className}`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow px-10 py-5 mb-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
