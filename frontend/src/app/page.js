'use client';
import Container from '@/components/Container';
import Explore from '@/components/Explore';
import FoodItems from '@/components/FoodItems';
import Header from '@/components/Header';
import Burger from '@/components/icons/burger';
import Location from '@/components/icons/Location';
import JiffyLogo from '@/components/JiffyLogo';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import useGetRestaurants from '@/hooks/useGetRestaurants';
import Link from 'next/link';

export default function Home() {
	const { restaurants, loading } = useGetRestaurants();

	return (
		<>
			{!loading ? (
				<div className='bg-background max-w-[430px] mx-auto'>
					<Container>
						<Header />

						<div className='pt-5'>
							<Search />
						</div>
						<div className='pt-5'>
							<FoodItems />
						</div>
						<div className='pt-3'>
							<Link href={'/quests'}>
								<img
									src='/images/banner.png'
									alt='banner image'
								/>
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
			) : (
				<div className='bg-background max-w-[430px] mx-auto'>
					<img
						src='/images/Loading_screen.png'
						alt='Loading screen'></img>
				</div>
			)}
		</>
	);
}
