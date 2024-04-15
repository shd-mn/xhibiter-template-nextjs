'use client';
import { useStore } from '@/zustand/store';
import { MobileNavIcon, Person, ThemeIcon, Wallet } from './data/icons';

function HeaderAction() {
    const { theme, setTheme } = useStore();

    return (
        <div className="flex items-center gap-2 md:gap-4">
            <button
                type="button"
                className="hidden h-10 w-10 items-center justify-center rounded-full border bg-white duration-200 hover:bg-primary-hover hover:text-white lg:flex"
            >
                <Wallet className="h-4 w-4" />
            </button>

            <div className="group">
                <button
                    type="button"
                    className="hidden h-10 w-10 items-center justify-center rounded-full border bg-white duration-200 hover:bg-primary-hover hover:text-white sm:flex"
                >
                    <Person className="h-4 w-4" />
                </button>
            </div>
            <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-white duration-200 hover:bg-primary-hover hover:text-white"
                // onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                <ThemeIcon className="h-4 w-4" />
            </button>
            <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-white duration-200 hover:bg-primary-hover hover:text-white lg:hidden"
            >
                <MobileNavIcon className="h-4 w-4" />
            </button>
        </div>
    );
}

export default HeaderAction;
