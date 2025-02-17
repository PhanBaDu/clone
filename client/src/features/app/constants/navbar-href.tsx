import { LogIn, LucideIcon, Store, UserPlus } from 'lucide-react';

export type CustomAction = 'language' | 'link';

export interface TypeNavbar {
    href: string;
    icon: LucideIcon;
    label: string;
    line: boolean;
    actions?: CustomAction;
}

export const navbar_left: TypeNavbar[] = [
    {
        href: '/seller/sign-in',
        icon: Store,
        label: 'seller_text',
        line: true,
        actions: 'link',
    },
    {
        href: '#',
        icon: Store,
        label: 'languages_text',
        line: false,
        actions: 'language',
    },
];

export const navbar_right: TypeNavbar[] = [
    {
        href: '/register',
        icon: UserPlus,
        label: 'register_text',
        line: true,
    },
    {
        href: '/login',
        icon: LogIn,
        label: 'login_text',
        line: false,
    },
];
