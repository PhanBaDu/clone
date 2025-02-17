import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

export default function DarkMode() {
    const { setTheme, theme } = useTheme();

    return (
        <div className="flex items-center">
            {theme === 'dark' ? (
                <Button
                    onClick={() => setTheme('light')}
                    variant={'ghost'}
                    size="icon"
                >
                    <Moon size={18} />
                </Button>
            ) : (
                <Button
                    onClick={() => setTheme('dark')}
                    variant={'ghost'}
                    size="icon"
                >
                    <Sun size={18} />
                </Button>
            )}
        </div>
    );
}
