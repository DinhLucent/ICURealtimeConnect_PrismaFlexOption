import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import './landing.css';

const fontBody = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontTitle = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-title',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: 'ICU-B Connect | Clinical CRRT Monitoring Platform',
  description:
    'Real-time PrismaFlex monitoring for ICU: treatment visibility, alarm severity, pressure trends, and audit-ready clinical workflow.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'ICU-B Connect | Clinical CRRT Monitoring Platform',
    description:
      'Real-time PrismaFlex monitoring for ICU: treatment visibility, alarm severity, and audit-ready workflow.',
    images: ['/og-image.svg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICU-B Connect | Clinical CRRT Monitoring Platform',
    description:
      'Real-time PrismaFlex monitoring for ICU: treatment visibility, alarm severity, and audit-ready workflow.',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontBody.variable} ${fontTitle.variable} ${fontMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
