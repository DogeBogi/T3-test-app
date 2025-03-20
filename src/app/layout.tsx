import "~/styles/globals.css";
import TopNav from "./_TopNav/TopNav";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {ClerkProvider,} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "This is my gallery app",
  description: "This is my gallery app",
  icons: [{ rel: "icon", url: "/gachifavicon.png" }],
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col gap-4">
        <TopNav/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
