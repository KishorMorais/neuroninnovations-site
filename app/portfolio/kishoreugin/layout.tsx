import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Kishor Eugin | Business Analysis, Data & Digital Transformation",

  description:
    "Portfolio of Kishor Eugin — a technology-driven professional experienced in Business Analysis, Data Analysis, Digital Transformation, Change Management and Android Development.",

  keywords: [
    "Kishor Eugin",
    "Business Analyst",
    "Business Analytics",
    "Data Analyst",
    "Digital Transformation",
    "Change Management",
    "Android Developer",
    "Christchurch",
    "New Zealand",
  ],

  authors: [
    {
      name: "Kishor Eugin",
    },
  ],

  openGraph: {
    title: "Kishor Eugin | Portfolio",
    description:
      "Business Analysis, Data & Digital Transformation portfolio of Kishor Eugin.",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}