'use client';
import Container from '@/components/Container';
import Explore from '@/components/Explore';
import FoodItems from '@/components/FoodItems';
import Header from '@/components/Header';

import Location from '@/components/icons/Location';
import JiffyLogo from '@/components/JiffyLogo';
import LocationBar from '@/components/LocationBar';
import MyQuests from '@/components/MyQuests';
import Navbar from '@/components/Navbar';
import QuestBanner from '@/components/QuestBanner';
import Search from '@/components/Search';
import useGetRestaurants from '@/hooks/useGetRestaurants';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<div className='bg-background max-w-[430px] mx-auto'>
				<Container>
					<Header />
					<LocationBar />

					<div className='pt-5'>
						<Search />
					</div>
					<div className='pt-5'>
						<FoodItems />
					</div>
					<div className='pt-3'>
						<Link href={'/quests'}>
							<QuestBanner />
						</Link>
					</div>
					<div className='py-2'>
						<Explore />
					</div>
				</Container>
				<div className='sticky bottom-0 bg-background'>
					<Navbar />
				</div>
			</div>
		</>
	);
}
