'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { EthIcon, HeartIcon } from '@/data/icons';

function Slider({ data }) {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="!py-5"
            breakpoints={{

                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                820: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map((item, idx) => (
                <SwiperSlide key={idx} className="bg-red h-12">
                    <div className="select-none h-full rounded-[20px] border p-5 transition-shadow hover:shadow-lg">
                        <Link href={item.link} passHref className="mb-3 w-full">
                            <Image
                                src={item.image}
                                alt={item.name}
                                quality={100}
                                className="w-full rounded-xl object-cover"
                            />
                        </Link>
                        <Link
                            href={item.link}
                            passHref
                            className="mb-3 text-sm flex w-full items-center justify-between font-calSans text-h-clr"
                        >
                            {item.name}
                            <div className="flex items-center gap-1 rounded-md border px-1 py-[2px] font-dmSans text-green-500">
                                <EthIcon className="h-4 w-4" /> {item.bid} ETH
                            </div>
                        </Link>
                        <p className="mb-5">current bid {item.current}</p>

                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                className="font-calSans text-primary"
                            >
                                Place bid
                            </button>

                            <div className="flex items-center gap-x-1">
                                <button
                                    type="button"
                                    className="border-none text-t-clr outline-none hover:text-primary-hover"
                                >
                                    <HeartIcon className="h-4 w-4" />
                                </button>
                                {item.like}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
