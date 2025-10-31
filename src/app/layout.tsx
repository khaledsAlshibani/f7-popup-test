'use client';

import F7Provider from './F7Provider';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <F7Provider>{children}</F7Provider>
      </body>
    </html>
  );
}
