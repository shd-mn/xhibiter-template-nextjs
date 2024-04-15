import Features from './Features';
import Hero from './Hero';
import HotBids from './HotBids';
import TopCollections from './TopCollections';
import TrendingCategories from './TrendingCategories';

export default function Home() {
    return (
        <main>
            <Hero />
            <HotBids />
            <TopCollections />
            <TrendingCategories />
            <Features />
        </main>
    );
}
