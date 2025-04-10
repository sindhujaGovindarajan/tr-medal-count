import React from "react";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Olympic Medal Count</title>
        <meta name="description" content="Olympic Medal Count Mini App" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
