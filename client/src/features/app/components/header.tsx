import Navbar from '@/features/app/components/navbar';

export default function Header() {
    return (
        <div className="sticky shadow-primary-foreground shadow-sm bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/0.9 z-50 border-b top-0 left-0 right-0">
            <div className="text-xs max-w-6xl mx-auto">
                <Navbar />
            </div>
        </div>
    );
}
