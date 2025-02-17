import { Card, CardContent, CardFooter } from '@/components/ui/card';

import Crum from '@/features/product/components/crum';
import ProductLeft from '@/features/product/components/product-left';
import ProductRight from '@/features/product/components/product-right';

export default function ShowItem() {
    return (
        <div className="-mt-3 flex flex-col gap-3">
            <Crum />
            <Card className="rounded">
                <CardContent className="p-4 flex gap-4">
                    <ProductLeft />
                    <ProductRight />
                </CardContent>
                <CardFooter className="p-4">
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
}
