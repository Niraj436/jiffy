import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weights: [400, 500, 600, 700, 900] });

export const metadata = {
  title: 'Jiffy - Food Delivery Service',
  icons: [
    { rel: 'apple-touch-icon', url: 'apple-touch-icon.png' },
    { rel: 'icon', url: 'android-chrome-192.png' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
