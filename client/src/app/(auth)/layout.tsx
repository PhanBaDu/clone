import Header from '@/features/auth/components/header';
import React from 'react';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
