import Image from 'next/image';
import gradient from '@/public/images/gradient.jpg';
import heroImg from '@/public/images/hero.jpg';
export default function Hero() {
    return (
        <section className="hero relative h-[800px]">
            <div className="absolute left-0 top-0 -z-10">
                <Image
                    src={gradient}
                    alt="gradient"
                    className="w-full object-contain"
                />
            </div>
            <div className="mx-auto flex max-w-[1304px] px-8 py-48">
                <div className="w-[40%]">
                    <h1 className="text-[68px] leading-tight">
                        Buy, sell and collect NFTs.
                    </h1>
                    <p className="">
                        The world&apos;s largest digital marketplace for crypto
                        collectibles and non-fungible tokens
                    </p>
                </div>

                <div className="w-[60%]">
                    <div className="rotate-12 overflow-hidden rounded-[35%] border">
                        <Image
                            src={heroImg}
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
