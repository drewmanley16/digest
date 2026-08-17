import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { beehiiv } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "digest.md · weekly AI news, tools, and takes",
  description:
    "A weekly newsletter on AI news, tools worth trying, and what I actually think. Written by Drew, CS student and software engineer at PayPal.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        {/* The subscribe form is a third-party iframe whose request chain is
            serial: loader -> api -> iframe document. Warming the connection and
            fetching the loader alongside our own JS takes a few hundred ms off
            the front of that chain. */}
        <link
          rel="preconnect"
          href="https://subscribe-forms.beehiiv.com"
          crossOrigin=""
        />
        <link rel="preload" as="script" href={beehiiv.loaderSrc} />
      </head>
      <body className="flex min-h-full flex-col">
        <Nav />
        {children}
        <Footer />
        {/* Beehiiv referral attribution — site-wide, position independent. */}
        <Script src={beehiiv.attributionSrc} strategy="afterInteractive" />
      </body>
    </html>
  );
}
