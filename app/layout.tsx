import type { Metadata } from "next";
import { ThemeProvider } from "@/function/theme-provider";
import "@/styles/global.css";
import { Playpen_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};

const playpen = Playpen_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const revalidate = 60;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={playpen.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}