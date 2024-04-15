'use client';
import { useEffect } from 'react';
import Search from './Search';
import {
    recourseLinks,
    exploreLinks,
    homeLinks,
    pageLinks,
} from './data/contants';
import { useStore } from '@/zustand/store';
import Dropdown from './Dropdown';
import Link from 'next/link';

function Navbar() {
    const { theme, setTheme } = useStore();
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, [setTheme]);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, [theme]);

    return (
        <div className="flex flex-1 items-center justify-between md:px-12 xl:pl-[8%] xl:pr-[3%]">
            <Search />
            <nav className="hidden lg:flex h-full items-center">
                <Dropdown
                    title="Home"
                    data={homeLinks}
                    className="w-[400px] grid-cols-2 px-5 py-8 group-hover:grid"
                    itemClass="justify-between"
                />
                <Dropdown
                    title="Pages"
                    data={pageLinks}
                    className="w-[460px] grid-cols-2 px-5 py-8 group-hover:grid"
                    itemClass="justify-between"
                />
                <Dropdown
                    title="Explore"
                    data={exploreLinks}
                    className="w-[400px] grid-cols-2 px-5 py-8 group-hover:grid"
                />
                <Dropdown
                    title="Resources"
                    data={recourseLinks}
                    className="w-[200px] flex-col px-5 py-4 group-hover:flex"
                />

                <Link
                    href="#!"
                    type="button"
                    className={`h-full p-3 font-calSans hover:text-primary-hover`}
                >
                    Create
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
