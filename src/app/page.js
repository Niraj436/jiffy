import Container from '@/components/Container';
import Explore from '@/components/Explore';
import Burger from '@/components/icons/burger';
import Location from '@/components/icons/Location';
import JiffyLogo from '@/components/JiffyLogo';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='bg-background max-w-[430px] mx-auto'>
			<Container>
				<div className='flex justify-between items-center'>
					<div>
						<JiffyLogo />
					</div>
					<div>
						<Burger />
					</div>
				</div>
				<div className='flex items-center gap-x-1'>
					<div>
						<Location />
					</div>
					<h1 className='text-xs text-text-secondary'>
						The Gardens, Panipokhari, Maharajgunj, Kathmandu
					</h1>
				</div>
				<div className='py-2'>
					<Explore />
				</div>
			</Container>
			<div className='sticky bottom-0'>
				<Navbar />
			</div>
		</div>
	);
}
