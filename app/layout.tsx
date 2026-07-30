
import "./globals.css";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"], // Bold / ExtraBold
  variable: "--font-syne",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
});
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body className={syne.className}suppressHydrationWarning={true}>
      
        {children}

      </body>
    </html>
    </>
  )
}