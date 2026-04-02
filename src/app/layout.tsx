import type { Metadata } from 'next';
import Header from '@/components/organisms/Header/Header';
import Footer from '@/components/organisms/Footer/Footer';
import '@/styles/globals.css';
import '@/styles/utilities.css';

export const metadata: Metadata = {
  title: 'Windra | Portfolio',
  description: 'QA Engineer × Full-Stack Developer — 정승용 (Windra)의 포트폴리오',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
