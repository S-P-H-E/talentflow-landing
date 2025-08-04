import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from './providers/posthog'
import PostHogPageViewComponent from "@/components/post-hog/post-hog-page-view";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talentflow | Join the Waitlist.",
  description: "Talentflow lets you create job applications and use AI to filter out bad candidates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <PostHogProvider>
          <Suspense fallback={null}>
            <PostHogPageViewComponent />
          </Suspense>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
