import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XSynergy — Decentralized Rewards Built for Web3",
  description: "XSynergy is a fully decentralized rewards platform powered by smart contracts on the Polygon blockchain. Join a new era of Web3 ownership and automated earning.",
  keywords: "XSynergy, Web3, Polygon, decentralized income, smart contracts, crypto rewards, blockchain affiliate, DeFi, passive income"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative text-lg leading-[1.4] ">
        {children}
      </body>
    </html>
  );
}
