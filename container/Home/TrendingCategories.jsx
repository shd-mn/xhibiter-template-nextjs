'use client';
import Image from 'next/image';
import { useState } from 'react';
import lightImg from '@/public/images/26a1.png';
import {
    trendingCategoriesBtns,
    trendingCategoriesData,
} from './data/trendingCategoriesData';
import { CheckIcon, ChevronIcon } from '@/data/icons';
import Checkbox from '@/components/UI/Checkbox';
import CategoryCard from '@/components/UI/CategoryCard';
function TrendingCategories() {
    const [show, setShow] = useState(false);

    return (
        <section className="py-24">
            <div className="container">
                <header className="mb-8">
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <Image src={lightImg} alt="" className="h-6 w-6" />
                        <h2 className="text-center text-3xl dark:text-white ">
                            Trending categories
                        </h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <ul className="flex flex-wrap items-center gap-3">
                            {trendingCategoriesBtns.map((Item, idx) => (
                                <li key={idx}>
                                    <button
                                        type="button"
                                        className={`flex items-center gap-1 rounded-lg border px-3 py-[6px] font-calSans text-sm text-t-clr duration-200 hover:bg-primary-hover hover:text-white ${Item.name === 'All' && 'bg-slate-200'}`}
                                    >
                                        {Item.icon && (
                                            <span>
                                                <Item.icon className="h-4 w-4" />
                                            </span>
                                        )}
                                        <span className="pt-[2px]">
                                            {Item.name}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="relative">
                            <button
                                type="button"
                                className="flex items-center gap-1 rounded-lg border px-3 py-[6px] font-calSans text-sm text-t-clr"
                                onClick={() => setShow(!show)}
                            >
                                <span className="pt-[2px]">
                                    Price: Low to High
                                </span>
                                <span className="ml-8">
                                    <ChevronIcon
                                        className={`h-4 w-4 ${show && 'rotate-180'}`}
                                    />
                                </span>
                            </button>
                            <div
                                className={`${show ? 'flex' : 'hidden'} absolute top-full z-20 w-full flex-col gap-2 rounded-md bg-white px-2 py-4 shadow-lg`}
                            >
                                <span className="px-3 font-calSans text-sm text-t-clr">
                                    Sort By
                                </span>
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between rounded-lg px-3 py-1 text-start font-calSans text-sm  duration-200 hover:bg-gray-100"
                                >
                                    <span className="pt-[2px]">
                                        Price: Low to High
                                    </span>
                                    <span>
                                        <CheckIcon className="h-4 w-4 text-primary-hover" />
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between rounded-lg px-3 py-1 text-start font-calSans text-sm duration-200 hover:bg-gray-100"
                                >
                                    <span className="pt-[2px] text-slate-600">
                                        Price: High to Low
                                    </span>
                                </button>
                                <span className="px-3 font-calSans text-sm text-t-clr">
                                    Options
                                </span>

                                <Checkbox title="Verified Only" />
                                <Checkbox title="NFSW Only" />
                                <Checkbox title="Show Lazy Minted" />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    {trendingCategoriesData.map((item) => (
                        <CategoryCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrendingCategories;
