import "./globals.css";
import { StoryblokProvider } from "@/lib/providers/storyblok-provider";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: 'LEGO4DOLLAZ',
    template: '%s - LEGO4DOLLAZ',
  },
  description: 'The missing piece for you LEGO builds',
}

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en" className="h-full">
        <body className={`h-full ${inter.className}`}>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}