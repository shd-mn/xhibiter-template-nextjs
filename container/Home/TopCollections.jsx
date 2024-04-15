'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PrimaryBtn from '@/components/UI/PrimaryBtn';
import { topCollectionsData } from './data/topCollectionsData';
import { CheckIcon, ChevronIcon } from '@/data/icons';

function TopCollections() {
    const [show, setShow] = useState(false);
    return (
        <section className="bg-[#FDFAFD] py-24">
            <div className="container">
                <header className="mb-12 w-full text-center">
                    <h3 className="inline text-3xl">
                        Top collections over Last 24 Hours
                    </h3>
                    <div className="relative ml-1 inline-block">
                        <button
                            type="button"
                            className="inline-flex items-center font-calSans text-3xl text-primary"
                            onClick={() => setShow(!show)}
                        >
                            Last 24 Hours
                            <span>
                                <ChevronIcon className="h-6 w-6" />
                            </span>
                        </button>
                        <div
                            className={`${show ? 'flex' : 'hidden'} absolute top-full z-20 w-full flex-col gap-2 rounded-md bg-white px-2 py-3 shadow-lg`}
                        >
                            <button
                                type="button"
                                className="w-full rounded-lg px-3 py-1 text-start font-calSans duration-200 hover:bg-gray-100"
                            >
                                Last 24 Hours
                            </button>
                            <button
                                type="button"
                                className="w-full rounded-lg px-3 py-1 text-start font-calSans duration-200 hover:bg-gray-100"
                            >
                                Last 7 Days
                            </button>
                            <button
                                type="button"
                                className="w-full rounded-lg px-3 py-1 text-start font-calSans duration-200 hover:bg-gray-100"
                            >
                                Last 30 Days
                            </button>
                        </div>
                    </div>
                </header>

                <div className="mb-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
                    {topCollectionsData.map((item) => (
                        <Link
                            href={item.href}
                            passHref
                            key={item.id}
                            className="group grid grid-cols-[48px_1fr] gap-3 rounded-2xl border px-7 py-4 duration-200 hover:shadow-md"
                        >
                            <div className="relative">
                                <Image src={item.image} alt={item.name} />
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-dark-clr p-1 text-[12px] text-white">
                                        {item.id}
                                    </span>
                                    {item.viewed && (
                                        <span className="z-10 -mt-[6px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green-500 p-1 text-[12px] text-white">
                                            <CheckIcon className="h-2 w-2" />
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div>
                                <h4 className="duration-200 group-hover:text-primary-hover">
                                    {item.name}
                                </h4>
                                <span className="text-t-clr">
                                    {item.price} ETH
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center">
                    <PrimaryBtn title="Go to Rankings" href="#!" />
                </div>
            </div>
        </section>
    );
}

export default TopCollections;
