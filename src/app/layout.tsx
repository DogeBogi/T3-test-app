import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import TopNav from "./_components/TopNav";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {ClerkProvider,} from '@clerk/nextjs'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

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
    <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
          */
         routerConfig={extractRouterConfig(ourFileRouter)}
        />
          <body className="flex flex-col gap-4">
        <TopNav/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
