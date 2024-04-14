import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/public/images/logo.png';
import {
    companyLinks,
    mYAccountLinks,
    marketplaceLinks,
} from './data/constants';
import FooterNav from './FooterNav';
import Social from './Social';

function Footer() {
    return (
        <footer className="dark:bg-dark-clr">
            <section className="pb-12 pt-24">
                <div className="container">
                    <div className="grid sm:grid-cols-2 md:grid-cols-[3fr_1fr_1fr_1fr] gap-10">
                        <div className="flex sm:w-2/3 flex-col items-start">
                            <Link href="/" passHref className="">
                                <Image
                                    src={logoImg}
                                    alt="xhibiter"
                                    className="mb-6 w-[130px] object-contain text-left"
                                />
                            </Link>
                            <p className="mb-12 text-t-clr">
                                Create, sell and collect truly rare digital
                                artworks. Powered by blockchain technology.
                            </p>
                            <Social />
                        </div>

                        <FooterNav
                            title="Marketplace"
                            data={marketplaceLinks}
                        />
                        <FooterNav title="Company" data={companyLinks} />
                        <FooterNav title="My Account" data={mYAccountLinks} />
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container">
                    <div className="flex flex-col items-center justify-between space-y-2  sm:flex-row sm:space-y-0">
                        <span className="text-sm text-t-clr">
                            © 2024 Xhibiter — Made by ib-themes
                        </span>
                        <ul className="flex flex-wrap space-x-4 text-sm dark:text-white">
                            <li>
                                <a
                                    href="#"
                                    className="text-t-clr hover:text-primary-hover dark:hover:text-primary-hover"
                                >
                                    Terms and conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-t-clr hover:text-primary-hover dark:hover:text-primary-hover"
                                >
                                    Privacy policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
