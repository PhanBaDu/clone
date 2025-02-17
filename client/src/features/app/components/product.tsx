'use client';

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SkeletonProduct from '@/features/app/components/skeleton-product';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Product() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <SkeletonProduct />;
    }
    return (
        <HoverCard>
            <HoverCardTrigger className="rounded cursor-pointer shadow-sm">
                <Link href={'/product/1'}>
                    <Card className="shadow-none rounded relative hover:border overflow-hidden hover:border-primary duration-200">
                        <CardContent className="p-0">
                            <Image
                                src="/2.jpg"
                                alt="test"
                                width={1000}
                                height={200}
                                className="h-48 object-contain"
                            ></Image>
                        </CardContent>
                        <CardFooter className="p-2 text-sm flex flex-col gap-1 justify-start items-start">
                            <div className="flex gap-2 flex-wrap">
                                <span className="bg-none">
                                    Áo Thun AM Nam Nữ Form Rộng WEIRD
                                </span>
                            </div>
                            <div className="flex justify-between w-full gap-1 text-primary font-semibold items-center">
                                <div>
                                    <span>3e</span>
                                    <span className="text-xs underline ml-1">
                                        đ
                                    </span>
                                </div>
                                <Button className="text-xs px-[6px] py-[14px] h-0">
                                    Thêm giỏ
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </Link>
            </HoverCardTrigger>
            <HoverCardContent className="cursor-pointer w-full text-xs px-1 py-[6px] bg-primary text-muted border-none -mt-1 rounded-t-none">
                Tìm sản phẩm tương tự
            </HoverCardContent>
        </HoverCard>
    );
}
