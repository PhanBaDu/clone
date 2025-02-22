import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    const locale = cookies().get('NEXT_LOCALE')?.value ? cookies().get('NEXT_LOCALE')?.value : 'vi';
    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
