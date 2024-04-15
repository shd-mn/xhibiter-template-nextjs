import Image from 'next/image';
import gradient from '@/public/images/gradient.jpg';
import heroImg from '@/public/images/hero.jpg';
import elements from '@/public/images/3D_elements.png';
import PrimaryBtn from '@/components/UI/PrimaryBtn';
import SecondaryBtn from '@/components/UI/SecondaryBtn';
export default function Hero() {
    return (
        <section className="hero relative">
            <div className="absolute left-0 top-0 -z-10">
                <Image
                    src={gradient}
                    alt="gradient"
                    className="w-full object-contain"
                />
            </div>
            <div className="mx-auto grid max-w-[1304px] items-center gap-12 px-8 py-36 md:grid-cols-[1fr_1.2fr] md:py-48 lg:gap-24">
                <div className="">
                    <h1 className="mb-6 text-center text-[40px] leading-tight md:text-start lg:text-[56px] xl:text-[68px]">
                        Buy, sell and collect NFTs.
                    </h1>
                    <p className="mb-5 inline-flex text-center text-xl text-t-clr md:text-start">
                        The world&apos;s largest digital marketplace for crypto
                        collectibles and non-fungible tokens
                    </p>
                    <div className='flex items-center mb-3 gap-3 max-md:justify-center'>
                        <PrimaryBtn title="Upload" href="#!" />
                        <SecondaryBtn title="Explore" href="#!" />
                    </div>
                </div>

                <div className="relative sm:px-5 md:px-10">
                    <div className="rotate-12 overflow-hidden rounded-[35%]">
                        <Image
                            src={heroImg}
                            alt=""
                            className="h-full w-full object-contain"
                            quality={100}
                        />
                    </div>
                    <div className="animate-move-y absolute left-0 top-0 h-full w-full">
                        <Image
                            src={elements}
                            alt=""
                            className="h-full w-full object-contain"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
