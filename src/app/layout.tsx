import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TeleSoftas Africa | Best Partner for Growth",
    template: "%s | TeleSoftas Africa",
  },
  description: "Driving Africa’s digital transformation with systems built to last.",
  keywords: [
    "TeleSoftas Africa",
    "Enterprise Software",
    "Digital Transformation",
    "Product Engineering",
    "Growth Partner",
  ],
  metadataBase: new URL("https://telesoftas.africa"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/png 2.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/readyyy.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "https://telesoftas.africa/",
    title: "TeleSoftas Africa | Best Partner for Growth",
    description: "Driving Africa’s digital transformation with systems built to last.",
    siteName: "TeleSoftas Africa",
    images: [
      {
        url: "/telesoftas.jpeg",
        width: 1200,
        height: 630,
        alt: "TeleSoftas Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleSoftas Africa | Best Partner for Growth",
    description: "Driving Africa’s digital transformation with systems built to last.",
    images: ["/telesoftas.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
