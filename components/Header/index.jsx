import Image from 'next/image';
import React from 'react';
import logoImg from '@/public/images/logo.png';
import Link from 'next/link';
import Navbar from './Navbar';
import HeaderAction from './HeaderAction';
function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 h-24 w-full backdrop-blur-md">
            <div className="mx-auto flex h-full w-full max-w-[1775px] items-center justify-between px-6 sm:px-8">
                <div className="flex w-full items-center justify-between">
                    <Link href="/" passHref className="inline-block">
                        <Image
                            src={logoImg}
                            alt="logo"
                            className="w-[130px] object-contain"
                        />
                    </Link>
                    <Navbar />
                    <HeaderAction />
                </div>
            </div>
        </header>
    );
}

export default Header;
