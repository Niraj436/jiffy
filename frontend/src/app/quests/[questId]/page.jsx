import Challenges from '@/components/Challenges';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Burger from '@/components/icons/Burger';
import JiffyLogo from '@/components/JiffyLogo';
import { CircularProgressBar } from '@/components/MyQuests';
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
			<div className='relative flex flex-col gap-y-5  bg-red-700 rounded-b-3xl text-white pb-4'>
				<img
					className='absolute bottom-0 right-0 max-w-[95px]'
					src='/images/newari.png'
					alt='cuisine'
				/>
				<Container>
					<Header color='text-white' />
					<div className='mt-12'>
						<h3 className='text-xl font-black bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent'>
							Newari Cuisine
						</h3>
						<p className='text-[9px]'>
							From sweet Yomari to delicous Samay Baji!
						</p>
					</div>
				</Container>
			</div>
			<Container className='px-8'>
				<div className='flex justify-center items-center gap-x-5'>
					<div>
						<CircularProgressBar
							size={70}
							strokeWidth={8}
							progress={75}
							color='#B81919'
						/>
					</div>
					<div className='flex flex-col gap-y-1 py-2'>
						<h1 className='text-brand font-bold'>7/10 Challenges Completed</h1>
						<p className='text-secondary-content text-xs'>
							You’re on track to earn your “Newari Pasa” badge, keep going.
						</p>
					</div>
				</div>
				<div className='flex items-center gap-x-4 pt-4 pb-3'>
					<div className='flex gap-x-2 text-slate-500'>
						<ChallengeIcon className='size-5' />
						<h1 className='text-sm text-slate-500'>Challenges</h1>
					</div>
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

const ChallengeIcon = ({ className }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}>
		<polyline points='14.5 17.5 3 6 3 3 6 3 17.5 14.5' />
		<line
			x1='13'
			x2='19'
			y1='19'
			y2='13'
		/>
		<line
			x1='16'
			x2='20'
			y1='16'
			y2='20'
		/>
		<line
			x1='19'
			x2='21'
			y1='21'
			y2='19'
		/>
		<polyline points='14.5 6.5 18 3 21 3 21 6 17.5 9.5' />
		<line
			x1='5'
			x2='9'
			y1='14'
			y2='18'
		/>
		<line
			x1='7'
			x2='4'
			y1='17'
			y2='20'
		/>
		<line
			x1='3'
			x2='5'
			y1='19'
			y2='21'
		/>
	</svg>
);

export default QuestDetail;
