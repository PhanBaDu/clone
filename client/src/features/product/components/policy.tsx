import Logo from '@/assets/logo.svg';
import { Box, ChevronsRight, MoveRight, ShieldCheck } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';

export default function Policy() {
    return (
        <div className="flex items-center gap-1">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="p-0">
                            <p className="flex gap-1 font-semibold">
                                An tâm khi mua tại <Logo className="w-4" />
                                Shopping
                            </p>
                            <div className="flex">
                                <MoveRight
                                    strokeWidth={4}
                                    className="ml-1 mt-[2.5px] text-muted-foreground"
                                    size={14}
                                />
                                <ChevronsRight
                                    strokeWidth={4}
                                    className="mt-[2.5px] text-muted-foreground"
                                    size={14}
                                />
                            </div>
                            <div className="ml-1 flex gap-1 items-center">
                                <ShieldCheck
                                    strokeWidth={3}
                                    className="text-primary"
                                    size={14}
                                />
                                <span>Trả hàng miễn phí 15 ngày</span>
                            </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-[500px] flex flex-col p-3">
                                <h2 className="font-bold text-sm flex gap-1">
                                    An tâm khi mua tại <Logo className="w-5" />
                                    Shopping
                                </h2>
                                <Separator className="border-red-500 mt-2 mb-2" />
                                <div className="flex gap-4 items-start">
                                    <div>
                                        <Box
                                            className="text-primary"
                                            strokeWidth={1.3}
                                            size={30}
                                        />
                                    </div>
                                    <div className="text-muted-foreground">
                                        <h3>Trả hàng miễn phí 15 ngày</h3>
                                        <p>
                                            Miễn phí Trả hàng trong 15 ngày để
                                            đảm bảo bạn hoàn toàn có thể yên tâm
                                            khi mua hàng ở Shopping.
                                        </p>
                                        <p>
                                            Ngoài ra, tại thời điểm nhận hàng,
                                            bạn có thể đồng kiểm và được trả
                                            hàng miễn phí.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
        // <div className="flex items-center gap-1">

        //     <div className="flex gap-1 items-center">
        //         <span>Trả hàng miễn phí 15 ngày</span>
        //         <ShieldCheck
        //             strokeWidth={3}
        //             className="text-primary"
        //             size={14}
        //         />
        //     </div>
        // </div>
    );
}
