import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import "@/styles/global.scss";
import { gilroy, inter } from './fonts/fonts';

export const metadata = {
  title: "HRWC | Home",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gilroy.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}