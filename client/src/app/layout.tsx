import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import Footer from '@/features/app/components/footer';

import Header from '@/features/app/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import HandlerHeader from '@/features/app/components/handler-header';
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
});

export const metadata: Metadata = {
    title: 'Shopping',
    description: 'Shopping',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <NextIntlClientProvider messages={messages}>
                <body className={`${inter.className} antialiased`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <HandlerHeader />
                        <div className="max-w-6xl mx-auto text-sm pt-6 mb-20">
                            {children}
                        </div>
                        <Footer />
                    </ThemeProvider>
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
