import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import AnimatedBackground from './components/AnimatedBackground';
import { HelipagosAuthProvider } from './context/HelipagosAuthContext';
import './globals.css'

const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Star Wars 8-bit Explorer',
  description: 'Explore the Star Wars universe in 8-bit style',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.className} bg-black text-white`}>
        <HelipagosAuthProvider>
          <AnimatedBackground />
          <div className="relative z-10">
            {children}
          </div>
        </HelipagosAuthProvider>
      </body>
    </html>
  )
}

