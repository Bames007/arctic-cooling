import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins, Gantari } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gantari = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arcticpeakcooling.com"),
  title: "Arctic Peak Cooling | Professional AC Services in Dubai",
  description:
    "Professional air conditioning services trusted by corporations, hotels, and residences across Dubai. DEWA-certified technicians with 15+ years of expertise.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Arctic Peak Cooling | Professional AC Services in Dubai",
    description:
      "Professional air conditioning services trusted by corporations, hotels, and residences across Dubai. DEWA-certified technicians with 15+ years of expertise.",
    images: ["/og-image.png"],
    type: "website",
    locale: "en_US",
    siteName: "Arctic Peak Cooling",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arctic Peak Cooling | Professional AC Services in Dubai",
    description:
      "Professional air conditioning services trusted by corporations, hotels, and residences across Dubai.",
    images: ["/og-image.png"],
  },
  manifest: "/site.webmanifest",
  keywords: [
    "AC repair Dubai",
    "air conditioning service",
    "AC maintenance Dubai",
    "AC installation",
    "emergency AC service",
    "DEWA certified technicians",
    "corporate AC services",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1e40af", // Blue color matching the brand
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${gantari.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        {/* Background gradient - Cool blue theme for cooling company */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50/50 -z-10" />

        {/* Scrollable content */}
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
