// src/app/layout.js
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";
import BackToTop from "./BackToTop";

export const metadata = {
  title: "Veikko Kiis | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <BackToTop />

        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "96aa7b3932fa4994b20c23b00c7610e4"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}