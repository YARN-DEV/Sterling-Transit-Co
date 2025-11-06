import type { AppProps } from 'next/app';
import '../styles.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', weight: ['400','500','600','700','800'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} font-sans w-full min-h-screen m-0 p-0`}>
      <Component {...pageProps} />
    </div>
  );
}
