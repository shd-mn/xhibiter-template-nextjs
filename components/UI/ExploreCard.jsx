import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ExploreCard({ item }) {
    const [show, setShow] = useState(false);
    return (
        <div className="relative h-full select-none rounded-[20px] border p-5 transition-shadow hover:shadow-lg">
            <div className="relative mb-3 grid aspect-square w-full grid-cols-[2fr_1fr] grid-rows-3 gap-2">
                <Link
                    href={item.href}
                    passHref
                    className="row-span-full flex h-full w-full"
                >
                    <Image
                        src={item.image1}
                        alt={item.name}
                        quality={100}
                        className="h-full w-full rounded-xl object-cover"
                    />
                </Link>
                <Link href={item.href} passHref className="flex h-full w-full">
                    <Image
                        src={item.image2}
                        alt={item.name}
                        quality={100}
                        className="h-full w-full rounded-xl object-cover"
                    />
                </Link>
                <Link href={item.href} passHref className="flex h-full w-full">
                    <Image
                        src={item.image3}
                        alt={item.name}
                        quality={100}
                        className="h-full w-full rounded-xl object-cover"
                    />
                </Link>
                <Link href={item.href} passHref className="flex h-full w-full">
                    <Image
                        src={item.image4}
                        alt={item.name}
                        quality={100}
                        className="h-full w-full rounded-xl object-cover"
                    />
                </Link>
            </div>
            <div className="mb-3 flex items-center justify-between">
                <Link
                    href={item.href}
                    passHref
                    className="flex w-full items-center justify-between font-calSans text-h-clr duration-200 hover:text-primary-hover"
                >
                    {item.name}
                </Link>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
                <Link
                    href={item.creatorLink}
                    passHref
                    className="inline-flex items-center gap-2 text-sm"
                >
                    <Image
                        src={item.creatorImg}
                        alt="creator"
                        className="h-5 w-5 rounded-full object-cover"
                    />
                    by{' '}
                    <span className="font-medium text-primary">
                        {item.creatorName}
                    </span>
                </Link>
                <p className="text-sm">{item.count}</p>
            </div>
        </div>
    );
}

export default ExploreCard;
