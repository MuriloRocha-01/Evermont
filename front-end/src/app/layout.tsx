import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header"; 
import Footer from "../components/shared/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-montserrat', 
});

export const metadata: Metadata = {
  title: "Evermont Consultoria", // Título atualizado
  description: "Transformando dados em clareza estratégica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning={true}>
        <Header/>
        <main className="flex-grow">
          {children} 
        </main>
        <Footer/>
      </body>
    </html>
  );
}