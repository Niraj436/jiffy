import Challenges from '@/components/Challenges';
import Container from '@/components/Container';
import Burger from '@/components/icons/Burger';
import JiffyLogo from '@/components/JiffyLogo';
import Navbar from '@/components/Navbar';

import React from 'react';

const QuestDetail = () => {
	const items = [
		{
			name: 'Khuwa Yomari',
			location: 'Newa Lahana, Kritipur',
			image: '',
			completed: true,
		},
		{
			name: 'Juju Dhau',
			location: 'Madhikarmi Cafe, Bhaktapu',
			image: '',
			completed: false,
		},
		{
			name: 'Samay Baji',
			location: 'Madhikarmi Cafe, Bhaktapur',
			image: '',
			completed: false,
		},
	];
	return (
		<div className='bg-background max-w-[430px] mx-auto'>
			<div className='flex flex-col gap-y-5  bg-red-700 px-7 rounded-b-3xl text-white py-5'>
				<div className='flex justify-between items-center'>
					<div>
						<JiffyLogo />
					</div>
					<div>
						<Burger />
					</div>
				</div>
				<div>
					<h1 className='text-xl font-bold'>Newari cuisine</h1>
					<p className='text-xs'>Lorem ipsum dolor sit amet</p>
				</div>
			</div>
			<Container>
				<div className='flex justify-center items-center gap-x-5'>
					<div>Progress</div>
					<div className='flex flex-col gap-y-1'>
						<h1 className='text-brand'>7/10 Challanges Completed</h1>
						<p className='text-secondary-content text-xs'>
							You’re on track to earn your “Newari Pasa” badge, keep going.
						</p>
					</div>
				</div>
				<div className='flex items-center gap-x-2 py-4'>
					<h1 className='text-xs'>Challenges</h1>
					<div className='bg-gray-300 h-[1px] flex-1'></div>
				</div>
				{items.map((item) => {
					return <Challenges item={item} />;
				})}
			</Container>
			<div className='sticky bottom-0 bg-background'>
				<Navbar />
			</div>
		</div>
	);
};

export default QuestDetail;
