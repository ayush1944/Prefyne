import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Prefyne",
  description: "Prefyne: Prompt Engineering Made Easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen mx-auto bg-background text-foreground">
        <Providers>
            <Navbar />
            {children}
        </Providers>
      </body>
    </html>
  );
}
