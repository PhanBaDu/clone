import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ArrowBigLeft, ArrowBigRight, ScanFace } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Login() {
    const t = useTranslations('page_auth');

    return (
        <div className="fixed top-[50%] left-[50%] -mt-6 translate-x-[-50%] translate-y-[-50%]">
            <Card className="w-96 rounded">
                <CardHeader className="text-center">
                    <CardTitle className="uppercase text-xl text-primary flex items-center justify-center gap-2">
                        {t('heading_login_text')} <ScanFace />
                    </CardTitle>
                    <CardDescription className="text-xs">
                        {t('description_login_text')}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <Button
                        variant={'outline'}
                        className="w-full text-xs font-bold flex items-center"
                    >
                        <FcGoogle /> {t('google_login_text')}
                    </Button>
                    <Button
                        variant={'outline'}
                        className="w-full text-xs font-bold flex items-center"
                    >
                        <FaFacebook className="text-sky-700" />{' '}
                        {t('facebook_login_text')}
                    </Button>
                </CardContent>
                <CardFooter className="flex gap-2 justify-between items-center w-full">
                    <Button
                        variant={'outline'}
                        className="flex-1 text-xs text-muted-foreground"
                        asChild
                    >
                        <Link href={'/'}>
                            <ArrowBigLeft />
                            {t('redirect_home_text')}
                        </Link>
                    </Button>

                    <Button
                        variant={'outline'}
                        className="flex-1 text-xs text-muted-foreground"
                        asChild
                    >
                        <Link href={'/register'}>
                            {t('redirect_signup_text')}
                            <ArrowBigRight />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
