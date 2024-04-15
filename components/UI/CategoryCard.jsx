import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon, HisotryIcon, MenuIcon } from '@/data/icons';

function CategoryCard({ item }) {
    const [show, setShow] = useState(false);
    return (
        <div className="relative h-full select-none rounded-[20px] border p-5 transition-shadow hover:shadow-lg">
            <div className="relative mb-3 aspect-square w-full">
                <Link href={item.href} passHref className="flex h-full w-full">
                    <Image
                        src={item.image}
                        alt={item.name}
                        quality={100}
                        className="h-full w-full rounded-xl object-cover"
                    />
                </Link>
                <span className="absolute bottom-0 left-4 translate-y-1/2">
                    <Link
                        href={item.creatorLink}
                        passHref
                        className="h-6 w-6 rounded-full border-2 border-white"
                    >
                        <Image
                            src={item.creator}
                            alt="creator"
                            className="w-full rounded-full object-cover"
                        />
                    </Link>
                    <Link
                        href={item.ownerLink}
                        passHref
                        className="-ml-2 h-6 w-6 rounded-full border-2 border-white"
                    >
                        <Image
                            src={item.owner}
                            alt="creator"
                            className="w-full rounded-full object-cover"
                        />
                    </Link>
                </span>
            </div>
            <div className="mb-3 flex items-center justify-between">
                <Link
                    href={item.href}
                    passHref
                    className="flex w-full items-center justify-between font-calSans text-h-clr duration-200 hover:text-primary-hover"
                >
                    {item.name}
                </Link>
                <div className="relative inline-block">
                    <button
                        type="button"
                        className="flex items-center justify-between rounded-full p-2 text-t-clr duration-200 hover:bg-slate-200"
                        onClick={() => setShow(!show)}
                    >
                        <MenuIcon className="h-4 w-4" />
                    </button>
                    <div
                        className={`${show ? 'flex' : 'hidden'} absolute bottom-full right-0 w-44 flex-col gap-2 rounded-md bg-white px-2 py-3 shadow-lg`}
                    >
                        <button
                            type="button"
                            className="w-full rounded-lg px-3 py-1 text-start font-calSans text-sm text-slate-500 duration-200 hover:bg-gray-100"
                        >
                            New Bid
                        </button>
                        <span className="inline-block border-b px-1"></span>
                        <button
                            type="button"
                            className="w-full rounded-lg px-3 py-1 text-start font-calSans text-sm text-slate-500 duration-200 hover:bg-gray-100"
                        >
                            Refresh Metadata
                        </button>
                        <button
                            type="button"
                            className="w-full rounded-lg px-3 py-1 text-start font-calSans text-sm text-slate-500 duration-200 hover:bg-gray-100"
                        >
                            Share
                        </button>
                        <button
                            type="button"
                            className="w-full rounded-lg px-3 py-1 text-start font-calSans text-sm text-slate-500 duration-200 hover:bg-gray-100"
                        >
                            Report
                        </button>
                    </div>
                </div>
            </div>
            <p className="mb-5">{item.price}</p>

            <div className="flex items-center justify-between">
                <button
                    type="button"
                    className="font-calSans text-sm text-primary"
                >
                    Buy Now
                </button>

                <Link
                    href="#!"
                    className="flex items-center gap-1 font-calSans text-sm text-slate-500 duration-200 hover:text-primary-hover"
                >
                    <span>
                        <HisotryIcon className="h-4 w-4" />
                    </span>
                    <span className="pt-[4px]">View History</span>
                </Link>
            </div>
            <div className="absolute right-9 top-9 z-10 flex items-center gap-x-1 rounded-lg bg-white px-2 py-1">
                <button
                    type="button"
                    className="border-none text-t-clr outline-none hover:text-primary-hover"
                >
                    <HeartIcon className="h-4 w-4" />
                </button>
                {item.like}
            </div>
        </div>
    );
}

export default CategoryCard;
