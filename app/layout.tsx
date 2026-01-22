import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { Background, PageWrapper } from "@/components/layout";
import { LenisProvider } from "@/components/providers";
import { KeyboardNav, SwipeNav, NavigationHint } from "@/components/common";
import { MenuBar } from "@/components/features/menu-bar";
import { Avatar } from "@/components/ui/avatar";
import { TopBar } from "@/components/layout/TopBar";
import { ChatWidget } from "@/components/features/chat";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Łukasz Szczęsny | Frontend Developer",
  description: "Frontend Developer specializing in React.js, TypeScript, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.variable} dark`}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <LenisProvider>
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pastel-orange focus:text-gray-900 focus:rounded-lg focus:font-medium"
              >
                Skip to main content
              </a>
              <Background />
              <PageWrapper>
                <TopBar avatarText="szczesny.dev" />
                <main
                  id="main-content"
                  className="w-full flex-1"
                  style={{ viewTransitionName: "page-content" }}
                >
                  {children}
                </main>
              </PageWrapper>
              <KeyboardNav />
              <SwipeNav />
              <NavigationHint />
              <ChatWidget />
            </LenisProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
