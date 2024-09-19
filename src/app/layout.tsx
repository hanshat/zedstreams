import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { cn } from "@/lib/utils";
import Provider from "./_components/provider";
import { SiteHeader } from "@/components/site-headers/site-header";

export const metadata: Metadata = {
  title: "ZenStream - Your Ultimate Streaming Hub",
  description:
    "Stream your favorite anime, movies, and web series all in one place with ZenStream. Dive into endless entertainment, curated just for you.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "ZenStream - Stream Anime, Movies & Web Series",
    description:
      "Discover a world of entertainment with ZenStream. Enjoy high-quality streaming of anime, movies, and web series.",
    url: "http://localhost:3000",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "ZenStream Banner",
      },
    ],
    siteName: "ZenStream",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZenStream - Stream Anime, Movies & Web Series",
    description:
      "Watch anime, movies, and web series on ZenStream. Dive into non-stop entertainment.",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background")}>
        <Provider>
          <SiteHeader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
