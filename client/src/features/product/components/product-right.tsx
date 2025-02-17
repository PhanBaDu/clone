import { Button } from '@/components/ui/button';
import Model from '@/features/product/components/model';
import Policy from '@/features/product/components/policy';
import { CircleSlash, Star } from 'lucide-react';

export default function ProductRight() {
    return (
        <div className="w-7/12 flex flex-col gap-2">
            <h2 className="font-medium text-xl">
                Áo Thun AM Nam Nữ Form Rộng WEIRD Áo Thun AM Nam Nữ Form Rộng
                WEIRD
            </h2>
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-1 decoration-primary">
                    <span className="font-semibold text-primary underline">
                        4.4
                    </span>
                    <div className="flex gap-1 items-center">
                        <Star
                            size={12}
                            className="text-yellow-500 fill-yellow-500"
                            strokeWidth={3}
                        />
                        <Star
                            size={12}
                            className="text-yellow-500 fill-yellow-500"
                            strokeWidth={3}
                        />
                        <Star
                            size={12}
                            className="text-yellow-500 fill-yellow-500"
                            strokeWidth={3}
                        />
                        <Star
                            size={12}
                            className="text-yellow-500 fill-yellow-500"
                            strokeWidth={3}
                        />
                        <Star
                            size={12}
                            className="text-yellow-500 fill-yellow-500"
                            strokeWidth={3}
                        />
                    </div>
                    <div className="flex items-center ml-5 gap-1">
                        <span className="font-semibold text-primary underline">
                            16k
                        </span>
                        <span className="text-muted-foreground">Đánh giá</span>
                    </div>
                </div>
                <Button variant={'destructive'}>
                    Tố cáo <CircleSlash />
                </Button>
            </div>
            <div className="w-full p-4 bg-muted text-primary text-lg font-bold">
                <span>160.000</span>
                <span className="underline ml-1">đ</span>
            </div>
            <Policy />
            <Model />
        </div>
    );
}
