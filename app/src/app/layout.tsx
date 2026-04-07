import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "УчётЛёгко — простая бухгалтерия для малого бизнеса",
  description:
    "Простой и доступный онлайн-учёт для малого бизнеса. Ведите бухгалтерию без бухгалтера.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
