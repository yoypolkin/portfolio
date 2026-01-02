import React from 'react';
import './globals.css';
import NavLinks from '@/ui/nav-link';
import { Metadata } from 'next';
// import { geistMono } from '@/ui/fonts';

const baseUrl = 'https://yoypolkin.com';

export const metadata: Metadata = {
  title: {
    default: 'Illia Polovynko - Senior SDET & Test Automation Expert',
    template: '%s | Illia Polovynko',
  },
  description:
    'Senior Automation QA Engineer & SDET specializing in TypeScript, Playwright, test automation, CI/CD pipelines, and cloud infrastructure. Building robust test frameworks and automation solutions.',
  keywords: [
    'SDET',
    'Senior QA Engineer',
    'Test Automation',
    'Playwright',
    'TypeScript',
    'CI/CD',
    'Cloud Infrastructure',
    'Test Infrastructure',
    'Automation Engineer',
    'Quality Assurance',
    'Illia Polovynko',
  ],
  authors: [{ name: 'Illia Polovynko' }],
  creator: 'Illia Polovynko',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoypolkin.com',
    siteName: 'Illia Polovynko - SDET Portfolio',
    title: 'Illia Polovynko - Senior SDET & Test Automation Expert',
    description:
      'Senior Automation QA Engineer specializing in TypeScript, Playwright, web & mobile test automation frameworks, CI/CD pipelines, and cloud infrastructure.',
    images: [
      {
        url: `${baseUrl}/api/og`,
        width: 1200,
        height: 630,
        alt: 'Illia Polovynko - Senior SDET Portfolio',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://yoypolkin.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="flex min-h-screen">
          <aside className="fixed hidden h-screen w-64 flex-col bg-[#2a2a2a] p-6 text-white md:flex">
            <nav className="flex flex-col gap-8">
              <NavLinks></NavLinks>
            </nav>
            {/* <button
              className={`${geistMono} mt-auto rounded-lg bg-[#2783CF] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#2783CF]/50`}
            >
              Download CV
            </button> */}
          </aside>

          <main className="flex-1 bg-[#212121] p-8 md:ml-64">
            <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
