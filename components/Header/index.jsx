import Image from 'next/image';
import React from 'react';
import logoImg from '@/public/images/logo.png';
import Link from 'next/link';
import Navbar from './Navbar';
function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 h-24">
      <div className="mx-auto flex h-full w-[1775px] items-center justify-between px-8">
        <div>
          <Link href="/" passHref className="flex items-center">
            <Image
              src={logoImg}
              alt="xhibiter"
              className="h-7 object-contain"
            />
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
