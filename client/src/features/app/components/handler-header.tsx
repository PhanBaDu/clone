'use client';

import Header from '@/features/app/components/header';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HandlerHeader() {
    const pathname = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (pathname === '/login' || pathname === '/register') {
        return null;
    }

    if (isClient) {
        return <Header />;
    }

    return (
        <div className="sticky z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/0.9  py-4 border-b top-0 left-0 right-0 h-[107px]">
            <div className="text-xs max-w-6xl mx-auto flex flex-col gap-4 animate-pulse">
                <div className="flex w-full justify-between items-center">
                    <div className="flex-1 flex justify-start gap-8">
                        <p className="bg-muted rounded w-32 h-4"></p>
                        <p className="bg-muted rounded w-32 h-4"></p>
                    </div>
                    <div className="flex-1 flex justify-end items-center gap-8">
                        <p className="bg-muted rounded w-28 h-4"></p>
                        <p className="bg-muted rounded w-28 h-4"></p>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center gap-20">
                    <p className="bg-muted rounded w-8 h-8"></p>
                    <div className="flex-1 flex items-center gap-1 justify-between relative border rounded p-1">
                        <p className="bg-muted rounded w-full h-8"></p>
                        <p className="bg-muted rounded w-16 h-8"></p>
                    </div>
                    <div className="flex-2 flex items-center justify-end text-muted-foreground">
                        <p className="bg-muted rounded w-8 h-8"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
