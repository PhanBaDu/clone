import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from '@/assets/logo.svg';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
    navbar_left,
    navbar_right,
    TypeNavbar,
} from '@/features/app/constants/navbar-href';
import { cn } from '@/lib/utils';
import { Check, Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import setLanguageValue from '@/i18n/action';
import { useLocale, useTranslations } from 'next-intl';

export default function Navbar() {
    const t = useTranslations('app_header');

    return (
        <div className="flex flex-col gap-2 justify-between py-2">
            {/* Navbar links */}
            <div className="flex w-full justify-between items-center">
                <div className="flex-1 flex justify-start gap-8">
                    {navbar_left.map((item, index) => (
                        <Left
                            href={item.href}
                            icon={item.icon}
                            label={t(item.label)}
                            line={item.line}
                            key={index}
                            actions={item.actions}
                        />
                    ))}
                </div>
                <div className="flex-1 flex justify-end items-center gap-8">
                    {navbar_right.map((item, index) => (
                        <Right
                            href={item.href}
                            icon={item.icon}
                            label={t(item.label)}
                            line={item.line}
                            key={index}
                        />
                    ))}
                </div>
            </div>
            {/* Search */}
            <div className="w-full flex justify-between items-center gap-20">
                <Link href={'/'} className="flex-2">
                    <Logo className="w-12" />
                </Link>
                <div className="flex-1 flex items-center gap-1 justify-center relative border rounded p-1">
                    <Input
                        className="bg-transparent shadow-none placeholder:text-xs text-secondary-foreground border-none"
                        placeholder={t('search_text')}
                    ></Input>
                    <Button className="w-16 bg-primary duration-200">
                        <Search className="text-muted" strokeWidth={3} />
                    </Button>
                </div>
                <div className="flex-2 flex items-center justify-end text-muted-foreground">
                    <ShoppingBag className="cursor-pointer text-primary" />
                </div>
            </div>
        </div>
    );
}

function Left({ href, icon: Icon, label, line, actions }: TypeNavbar) {
    const handleChangeLanguage = (value: string) => {
        setLanguageValue(value);
    };

    const locale = useLocale();

    if (actions === 'link') {
        return (
            <Link href={href} className="relative">
                <Button
                    className={cn(
                        `p-0 text-xs flex gap-1 hover:underline-offset-4 hover:decoration-secondary-foreground ${
                            line &&
                            "after:content-[' '] after:h-[13px] after:w-[1px] after:rounded-full after:absolute after:-right-4 after:top-[50%] after:bg-muted-foreground/50 after:translate-y-[-50%] left-[50%]"
                        }`,
                    )}
                    variant={'link'}
                >
                    <span className="text-xs text-secondary-foreground font-semibold">
                        {label}
                    </span>
                    <Icon
                        className="text-secondary-foreground"
                        strokeWidth={2}
                        size={10}
                    />
                </Button>
            </Link>
        );
    }

    if (actions === 'language') {
        return (
            <div className={cn('flex items-center')}>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={`p-0 text-xs text-secondary-foreground font-semibold flex gap-[6px] items-center bg-transparent ${
                                    line &&
                                    "after:content-[' '] after:h-[13px] after:w-[1px] after:rounded-full after:absolute after:-right-4 after:top-[50%] after:bg-muted-foreground/50 after:translate-y-[-50%] left-[50%]"
                                }`}
                            >
                                {label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="flex w-[130px] flex-col">
                                    <Button
                                        onClick={() =>
                                            handleChangeLanguage('vi')
                                        }
                                        className="w-full p-2 text-xs flex justify-between items-center"
                                        variant={'ghost'}
                                    >
                                        <span className="text-xs text-secondary-foreground font-semibold">
                                            Tiếng việt
                                        </span>
                                        {locale === 'vi' && (
                                            <div className="flex items-center gap-2">
                                                <Check
                                                    strokeWidth={3}
                                                    className="text-primary"
                                                />
                                            </div>
                                        )}
                                    </Button>

                                    <Button
                                        onClick={() =>
                                            handleChangeLanguage('en')
                                        }
                                        className="w-full p-2 text-xs flex justify-between items-center text-secondary-foreground font-semibold"
                                        variant={'ghost'}
                                    >
                                        <span>English</span>
                                        {locale === 'en' && (
                                            <div className="flex items-center gap-2">
                                                <Check
                                                    strokeWidth={3}
                                                    className="text-primary"
                                                />
                                            </div>
                                        )}
                                    </Button>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        );
    }
}

function Right({ href, icon: Icon, label, line }: TypeNavbar) {
    return (
        <Link href={href} className="relative flex">
            <Button
                variant={'link'}
                className={cn(
                    `p-0 text-xs flex text-secondary-foreground font-semibold gap-1 hover:underline-offset-4 hover:decoration-secondary-foreground ${
                        line &&
                        "after:content-[' '] after:h-[13px] after:w-[1.5px] after:rounded-full after:absolute after:-right-4 after:top-[50%] after:bg-muted-foreground/50 after:translate-y-[-50%] left-[50%]"
                    }`,
                )}
            >
                <span>{label}</span>
                <Icon strokeWidth={2.2} />
            </Button>
        </Link>
    );
}
