//Next.js
import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";

//Global css
import "./globals.css";

//Theme provider
import { ThemeProvider } from "next-themes";

//Fonts
const interFont = Inter ({  subsets: ["latin"] });

const barlowFont = Barlow ({
  subsets: ["latin"],
  weight:['500','700'],
  variable:"--font-barlow",
});


//Metadata
export const metadata: Metadata = {
  title: "MarketEase.com",
  description: "MarketEase, shop and save like ever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowFont.variable} ${interFont.className}`}
      >
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
        
        {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
