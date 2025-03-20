import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "This is my gallery app",
  description: "This is my gallery app",
  icons: [{ rel: "icon", url: "/gachifavicon.png" }],
};

function TopNav(){
  return(
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
      <div>Gallery</div>
      <div>Sign In</div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col gap-4">
        <TopNav/>
        {children}
        </body>
    </html>
  );
}
