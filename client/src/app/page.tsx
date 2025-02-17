import Products from '@/features/app/components/products';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('page_app');

    return (
        <div className="flex flex-col gap-5">
            <Card className="rounded border-b-4 border-b-primary shadow-none">
                <CardHeader className="p-5">
                    <CardTitle className="tracking-wider font-semibold uppercase text-sm text-center text-primary">
                        {t('title_text')}
                    </CardTitle>
                </CardHeader>
            </Card>
            <Products />
        </div>
    );
}
