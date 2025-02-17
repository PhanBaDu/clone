'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductLeft() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    return (
        <div className="w-5/12">
            <Image
                src={'/2.jpg'}
                alt="item"
                width={600}
                height={600}
                className="rounded w-full h-[460px] object-cover"
            ></Image>
            <Carousel className="w-full py-2">
                <CarouselContent className="-ml-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-1 md:basis-1/4 lg:basis-1/5"
                            onMouseEnter={() => setHoveredItem(item)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="p-1">
                                <Card
                                    className={`rounded p-0 cursor-pointer border-2 border-muted duration-300 ${
                                        hoveredItem === item
                                            ? 'bg-blue-500 text-white border-2 border-primary'
                                            : 'bg-gray-200'
                                    }`}
                                >
                                    <CardContent className="p-0">
                                        <Image
                                            src={'/2.jpg'}
                                            alt="item"
                                            width={100}
                                            height={100}
                                            className="rounded h-20 w-20"
                                        ></Image>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="-left-2 hover:text-primary" />
                <CarouselNext className="-right-2 hover:text-primary" />
            </Carousel>
        </div>
    );
}
