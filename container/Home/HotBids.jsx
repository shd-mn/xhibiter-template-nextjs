import Image from 'next/image';
import fireImg from '@/public/images/1f525.png';
import Slider from '@/components/UI/Slider';
import { hotBidData } from './data/hotBidsData';

function HotBids() {
    return (
        <section>
            <div className="container">
                <div className="mb-8 flex items-center justify-center gap-4">
                    <Image src={fireImg} alt="" className="h-6 w-6" />
                    <h2 className="text-center text-3xl dark:text-white ">
                        Hot Bids
                    </h2>
                </div>

                <Slider data={hotBidData} />
            </div>
        </section>
    );
}

export default HotBids;
