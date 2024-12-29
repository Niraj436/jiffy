import Container from '@/components/Container';

import Burger from '@/components/icons/Burger';
import JiffyLogo from '@/components/JiffyLogo';
import MyQuests from '@/components/MyQuests';
import Navbar from '@/components/Navbar';

import React from 'react';

const Quest = () => {
	const YourQuest = [
		{
			title: 'Newari Cuisine',
			description: 'From sweet yomari to delicious Samay Baji !',
			running: true,
			completed: false,
			type: 'normal',
		},
		{
			title: 'Mithili Cuisine',
			description: 'from soft Malpuwa to authentic Litti Chokha!',
			running: false,
			completed: false,
			type: 'normal',
		},
		{
			title: 'Tibetan Cuisine',
			description: 'From spicy laphong to warm Thenthuk',
			running: false,
			completed: false,
			type: 'normal',
		},
		{
			title: 'Vegeterain Cuisine',
			description: 'From fresh Salads to aromatic Panner Tikka!',
			running: false,
			completed: false,
			type: 'veg',
		},
	];

	const normalCuisine = YourQuest.filter((item) => {
		return item.type === 'normal';
	});
	const vegCuisine = YourQuest.filter((item) => {
		return item.type === 'veg';
	});

	return (
		<div className='bg-background max-w-[430px] mx-auto'>
			<Container>
				<div className='flex justify-between items-center '>
					<div>
						<JiffyLogo />
					</div>
					<div>
						<Burger />
					</div>
				</div>
				<div>
					<h1 className=' font-bold text-brand'>Culture Quest</h1>
					<p className='py-2 text-xs text-secondary-content'>
						Dive into exciting cuisines and conquer every quest.
					</p>
					{normalCuisine.map((item) => {
						return <MyQuests item={item} />;
					})}
				</div>
				<div>
					<h1 className=' font-bold text-brand'>Dietary Quests</h1>
					<p className='py-2 text-xs text-secondary-content'>
						Strict on your diet? We've got you covered!
					</p>
					{vegCuisine.map((item) => {
						return <MyQuests item={item} />;
					})}
				</div>
			</Container>
			<div className='sticky bottom-0 bg-background'>
				<Navbar />
			</div>
		</div>
	);
};

export default Quest;
