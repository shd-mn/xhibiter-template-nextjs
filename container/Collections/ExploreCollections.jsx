'use client';
import { useState } from 'react';
import { ChevronIcon } from '@/data/icons';
import { exploreCollectionsData } from './data/exploreCollectionsData';
import { trendingCategoriesBtns } from '../Home/data/trendingCategoriesData';
import ExploreCard from '@/components/UI/ExploreCard';
function ExploreCollections() {
    const [show, setShow] = useState(false);

    return (
        <section className="pb-24 pt-36 md:pt-48">
            <div className="container">
                <header className="mb-8">
                    <div className="mb-12 flex items-center justify-center gap-4">
                        <h2 className="text-center text-[30px] dark:text-white ">
                            Explore Collections
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
                                <span className="pt-[2px]">Trending</span>
                                <span className="ml-8">
                                    <ChevronIcon
                                        className={`h-5 w-5 ${show && 'rotate-180'}`}
                                    />
                                </span>
                            </button>
                            <div
                                className={`${show ? 'flex' : 'hidden'} absolute top-full z-20 w-full flex-col gap-2 rounded-md bg-white px-2 py-4 shadow-lg`}
                            >
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between rounded-lg px-3 py-1 text-start font-calSans text-sm  duration-200 hover:bg-gray-100"
                                >
                                    Trending
                                </button>
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between rounded-lg px-3 py-1 text-start font-calSans text-sm text-slate-600 duration-200 hover:bg-gray-100"
                                >
                                    Top
                                </button>
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between rounded-lg px-3 py-1 text-start font-calSans text-sm text-slate-600 duration-200 hover:bg-gray-100"
                                >
                                    Recent
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    {exploreCollectionsData.map((item) => (
                        <ExploreCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExploreCollections;
