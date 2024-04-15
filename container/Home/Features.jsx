import { featuresData } from './data/featuresData';

function Features() {
    return (
        <section className="bg-[#FDFAFD] py-24">
            <div className="container">
                <header className="mb-16">
                    <div className="flex items-center justify-center gap-4">
                        <h2 className="text-center text-3xl dark:text-white ">
                            Create and sell your NFTs
                        </h2>
                    </div>
                </header>

                <div className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {featuresData.map((Item, idx) => (
                        <article
                            key={idx}
                            className="flex flex-col items-center"
                        >
                            <div
                                className={`${Item.bgClr1} mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full`}
                            >
                                <div
                                    className={`${Item.bgClr2} flex h-12 w-12 items-center justify-center rounded-full text-white`}
                                >
                                    <span>
                                        <Item.icon className="h-6 w-6" />
                                    </span>
                                </div>
                            </div>
                            <h3 className="mb-3 font-calSans text-xl">
                                {Item.title}
                            </h3>
                            <p className="text-center text-t-clr">
                                {Item.desc}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mx-auto w-full sm:w-11/12 md:w-2/3">
                    <p className="mb-8 text-center text-xl text-t-clr">
                        Join our mailing list to stay in the loop with our
                        newest feature releases, NFT drops, and tips and tricks
                        for navigating Xhibiter
                    </p>
                    <form className="relative mx-auto flex w-full basis-3/12 items-center rounded-full border pe-[6px] ring-2 ring-transparent focus-within:ring-primary-hover sm:w-11/12  md:w-2/3">
                        <input
                            type="email"
                            className="w-full rounded-full border-t-clr py-3 ps-4 sm:ps-12 outline-none placeholder:text-t-clr"
                            placeholder="Email adress"
                        />
                        <span className="flex items-center justify-center rounded-full bg-primary px-3 md:px-6 py-1 md:py-[6px] text-white hover:bg-primary-hover">
                            Subscribe
                            
                        </span>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Features;
