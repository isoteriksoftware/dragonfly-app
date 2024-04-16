import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const font = Urbanist({ subsets: ["latin"] });

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
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
