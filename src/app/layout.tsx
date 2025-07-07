import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SFAGRO Decentralizing Agriculture with Blockchain",
  description: "SFAGRO is revolutionizing agriculture through blockchain technology, offering transparent transactions, NFT-based ownership, decentralized finance, and smart contracts for farmers, investors, and traders. Stake, trade, and earn rewards instantly in a trustless, community-driven ecosystem.",
  keywords: "SFAGRO, blockchain agriculture, decentralized farming, SFA token, NFT farming, smart contracts, DeFi agriculture, crypto farming, transparent supply chain, decentralized finance, agricultural investments"
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
