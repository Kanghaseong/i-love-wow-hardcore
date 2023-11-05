import "./globals.css";
import { Victor_Mono } from "next/font/google";

const inter = Victor_Mono({ subsets: ["vietnamese"], weight: "400" });

export const metadata = {
  title: "I love world of warcraft classic hardcore.",
  description: "월드 오브 워크래프트 클래식 하드코어는 세계 최고의 게임이다.",
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
