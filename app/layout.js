import "./globals.css";
import { Orbit } from "next/font/google";

const inter = Orbit({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "I love world of warcraft classic hardcore.",
  description: "월드 오브 워크래프트 클래식 하드코어는 세계 최고의 게임이다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
