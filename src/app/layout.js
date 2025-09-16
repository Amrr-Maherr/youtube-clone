import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/Provider/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: [
    "100", // Thin
    "300", // Light
    "400", // Regular
    "500", // Medium
    "700", // Bold
    "900", // Black
  ],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "YouTube",
  description: "Watch, upload, and explore videos online",
  icons: {
    icon: "/icons/youtube.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
