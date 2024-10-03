import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { JetBrains_Mono, Pixelify_Sans, Roboto } from "next/font/google";

const pixel_init = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-pixelify",
})

const jbmono_init = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
  variable: "--font-jbmono",
})

const roboto_init = Roboto ({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
  variable: "--font-roboto"
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={` 
          // list of fonts
          ${pixel_init.variable} 
          ${roboto_init.variable}
          ${jbmono_init.variable} 
          ${clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable,
        )}`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <span className="text-default-600 text-xs">Copyright © 2024</span>
              <p className="text-primary text-xs">&nbsp;Paul De Silos</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
