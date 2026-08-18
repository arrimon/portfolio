import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Md Abu Rayhan Rimon | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Laravel and React.js, focused on engineering high-performance systems and seamless user experiences.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Laravel",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Md Abu Rayhan Rimon" }],
  openGraph: {
    title: "Md Abu Rayhan Rimon | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Laravel and React.js.",
    siteName: "Abu Rayhan Rimon",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Abu Rayhan Rimon | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Laravel and React.js.",
  },
  icons: { icon: "/arrimon-favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${dmSerif.variable} font-sans min-h-screen`}
      >
        <ThemeProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
