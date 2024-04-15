import { Wallet } from '@/components/Header/data/icons';
import { ImgCollectIcon, NftIcon, SaleIcon } from '@/data/icons';

export const featuresData = [
    {
        title: '1. Set up your wallet',
        desc: "Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplace in the top right corner.",
        icon: Wallet,
        bgClr1: 'bg-[#CDBCFF]',
        bgClr2: 'bg-[#8358ff]',
    },
    {
        title: '2. Create Your Collection',
        desc: 'Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.',
        icon: ImgCollectIcon,
        bgClr1: 'bg-[#C4F2E3]',
        bgClr2: 'bg-[#10b981]',
    },
    {
        title: '3. Add Your NFTs',
        desc: 'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats.',
        icon: NftIcon,
        bgClr1: 'bg-[#CDDFFB]',
        bgClr2: 'bg-[#428af8]',
    },
    {
        title: '4. List Them For Sale',
        desc: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!',
        icon: SaleIcon,
        bgClr1: 'bg-[#FFD0D0]',
        bgClr2: 'bg-[#ef4444]',
    },
];
