import "./globals.css";
import { Victor_Mono } from "next/font/google";

const inter = Victor_Mono({ subsets: ["vietnamese"], weight: "400" });

export const metadata = {
  title: "WXW.",
  description: "can you alive?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
