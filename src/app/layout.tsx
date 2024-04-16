/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Dragonfly App",
  description: "Generate predictive analytics for visual assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
