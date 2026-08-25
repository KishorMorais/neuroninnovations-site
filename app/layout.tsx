import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neuron Innovations | Digital Products & IT Solutions",
  description:
    "Neuron Innovations builds digital products, web experiences, mobile applications and professional portfolio solutions for clients worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
