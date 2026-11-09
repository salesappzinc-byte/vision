import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "600"],
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Clearpath",
    template: "%s · Clearpath",
  },
  description:
    "Direction A foundation — free gateway course preview for people learning who, why, how, and what AI is.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${ibmPlex.variable}`}>
      <body className="shell">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
