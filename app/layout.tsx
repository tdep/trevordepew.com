import '@/app/ui/global.css';
import { sansita } from "@/app/ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Trevor DePew',
    default: 'Trevor DePew'
  },
  description: "Trevor DePew's Personal Website.",
  metadataBase: new URL('https://trevordepew.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sansita.className} antialiased`}>{children}</body>
    </html>
  );
}
