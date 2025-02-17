'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/assets/logo.svg';
import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('page_auth');
    const pathname = usePathname();

    return (
        <div className="fixed shadow-primary-foreground shadow-sm bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/0.9 z-50 border-b top-0 left-0 right-0">
            <div className="text-xs max-w-6xl mx-auto py-4 flex justify-between items-center">
                <Link href={'/'} className="flex-2">
                    <Logo className="w-12" />
                </Link>
                {pathname === '/login' ? (
                    <p className="uppercase text-primary text-base font-bold">
                        {t('title_login_text')}
                    </p>
                ) : (
                    <p className="uppercase text-primary text-base font-bold">
                        {t('title_signup_text')}
                    </p>
                )}
            </div>
        </div>
    );
}
