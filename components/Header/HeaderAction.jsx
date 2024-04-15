'use client';
import { useStore } from '@/zustand/store';
import {
    CopyIcon,
    ExitIcon,
    MobileNavIcon,
    Person,
    SettingIcon,
    ThemeIcon,
    Wallet,
} from './data/icons';
import Link from 'next/link';
import { ChevronIcon, EthIcon, VirtualIcon } from '@/data/icons';
import { useState } from 'react';

function HeaderAction() {
    const { theme, setTheme } = useStore();
    const [show, setShow] = useState(false);

    return (
        <div className="flex items-center">
            <button
                type="button"
                className="hidden mx-2 h-10 w-10 items-center justify-center rounded-full border bg-white duration-200 hover:bg-primary-hover hover:text-white lg:flex"
            >
                <Wallet className="h-4 w-4" />
            </button>

            <div className="group relative h-full px-2">
                <button
                    type="button"
                    className="my-1 hidden h-10 w-10 items-center justify-center rounded-full border bg-white duration-200 group-hover:bg-primary-hover group-hover:text-white sm:flex"
                >
                    <Person className="h-4 w-4" />
                </button>
                <div
                    className={`absolute right-0 top-full hidden w-[240px] flex-col gap-x-2 whitespace-nowrap rounded-lg bg-white px-5 py-4 shadow-xl group-hover:flex`}
                >
                    <button
                        type="button"
                        className="flex items-center justify-between gap-2 py-2  font-calSans"
                    >
                        <span className="mt-[4px] overflow-hidden text-ellipsis">
                            0x7a86c0b064171007716bbd6af96676935799a63e
                        </span>
                        <span>
                            <CopyIcon className="h-4 w-4 text-t-clr" />
                        </span>
                    </button>
                    <div className="mb-2 rounded-lg border px-4 py-3">
                        <span className="text-sm text-t-clr">Balance</span>
                        <div className="flex items-center gap-1 px-1 py-[2px] font-dmSans text-xl text-green-500">
                            <EthIcon className="h-[18px] w-[18px]" /> 10 ETH
                        </div>
                    </div>
                    <Link
                        href="#!"
                        type="button"
                        className={`flex w-full items-center gap-3 whitespace-nowrap rounded-xl px-4 py-2 text-start font-calSans text-sm duration-100 hover:bg-gray-100`}
                    >
                        <span
                            className={`flex items-center justify-center rounded-full`}
                        >
                            <Person className="h-4 w-4" />
                        </span>

                        <span className="mt-[4px]">My Profile</span>
                    </Link>
                    <Link
                        href="#!"
                        type="button"
                        className={`flex w-full items-center gap-3 whitespace-nowrap rounded-xl px-4 py-2 text-start font-calSans text-sm duration-100 hover:bg-gray-100`}
                    >
                        <span
                            className={`flex items-center justify-center rounded-full`}
                        >
                            <SettingIcon className="h-4 w-4" />
                        </span>

                        <span className="mt-[4px]">Edit Profile</span>
                    </Link>
                    <div className="relative">
                        <button
                            type="button"
                            className={`flex w-full items-center gap-1 rounded-lg px-4 py-2 font-calSans text-sm hover:bg-gray-100 ${show && 'bg-slate-100'}`}
                            onClick={() => setShow(!show)}
                        >
                            <span className="">
                                <VirtualIcon className="h-5 w-5 text-dark-clr" />
                            </span>
                            <span className="pt-[2px]">Language</span>
                            <span className="ml-auto">
                                <ChevronIcon
                                    className={`h-4 w-4 ${show && 'rotate-180'}`}
                                />
                            </span>
                        </button>
                        <div
                            className={`${show ? 'flex' : 'hidden'} absolute left-1/2 top-full z-20 w-11/12 -translate-x-1/2 border flex-col gap-2 rounded-md bg-white px-2 py-4 shadow-lg`}
                        >
                            <button
                                type="button"
                                className="flex w-full items-center justify-between rounded-lg px-3 py-1 text-start font-calSans text-sm  duration-200 hover:bg-gray-100"
                            >
                                English
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center justify-between rounded-lg px-3 py-1 text-start font-calSans text-sm text-slate-600 duration-200 hover:bg-gray-100"
                            >
                                Español
                            </button>
                        </div>
                    </div>
                    <Link
                        href="#!"
                        type="button"
                        className={`flex w-full items-center gap-3 whitespace-nowrap rounded-xl px-4 py-2 text-start font-calSans text-sm duration-100 hover:bg-gray-100`}
                    >
                        <span
                            className={`flex items-center justify-center rounded-full`}
                        >
                            <ExitIcon className="h-4 w-4" />
                        </span>

                        <span className="mt-[4px]">Sign Out</span>
                    </Link>
                </div>
            </div>

            <button
                type="button"
                className="flex mx-2 h-10 w-10 items-center justify-center rounded-full border bg-white duration-200 hover:bg-primary-hover hover:text-white"
                // onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                <ThemeIcon className="h-4 w-4" />
            </button>
            <button
                type="button"
                className="flex mx-2 h-10 w-10 items-center justify-center rounded-full border bg-white duration-200 hover:bg-primary-hover hover:text-white lg:hidden"
            >
                <MobileNavIcon className="h-4 w-4" />
            </button>
        </div>
    );
}

export default HeaderAction;
