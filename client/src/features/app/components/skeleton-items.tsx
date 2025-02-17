import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonItems() {
    return (
        <div className="relative w-[204px] h-[282px] bg-muted-foreground/30 rounded">
            <Skeleton className="w-full h-48 bg-muted" />
            <div className="p-2 flex flex-col gap-2">
                <Skeleton className="w-full h-4 bg-muted" />
                <Skeleton className="w-6/12 h-4 bg-muted" />
            </div>
            <div className="p-2">
                <Skeleton className="w-3/12 h-4 bg-muted" />
            </div>
            <Skeleton className="absolute bottom-2 right-2 w-4/12 h-7 bg-muted" />
        </div>
    );
}
