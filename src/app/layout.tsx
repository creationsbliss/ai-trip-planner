import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/providers/Provider";
import { ConvexClientProvider } from "./ConvexClientProvider";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ai Trip Planner",
  description: "Your trusted trip planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className} suppressHydrationWarning>
          <ConvexClientProvider>
            <Provider>{children}</Provider>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
