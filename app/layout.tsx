import type { Metadata } from "next";
import "./globals.css";
import { LexendExaDisplay } from "@/utils/font";

export const metadata: Metadata = {
  title: "Obscura",
  description:
    "Obscura turns your words into stunning visuals — effortlessly and instantly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${LexendExaDisplay.className} font-sans bg-[#070710]`}>
        {children}
      </body>
    </html>
  );
}
