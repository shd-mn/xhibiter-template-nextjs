import { calSans, dmSans } from './fonts';
import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Xhibiter | NFT Marketplace Reactjs Template',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${calSans.variable} ${dmSans.variable}`}>
            <body className={`${dmSans.className} text-dark-clr`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
