import { Gitlab, Link as LinkClone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <i className="flex justify-between text-[10px] fixed bottom-5 left-5 right-5 text-muted-foreground">
            <span className="flex items-center gap-1">
                <Gitlab size={12} strokeWidth={1} /> v_0.0.1
            </span>
            <Link
                href={'https://www.facebook.com/profile.php?id=61560170980112'}
                className="flex items-center gap-1 hover:underline hover:text-primary hover:duration-300"
            >
                <LinkClone size={12} strokeWidth={1} />
                {t('info_text')}
            </Link>
        </i>
    );
}
