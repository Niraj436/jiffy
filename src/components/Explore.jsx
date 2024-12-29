import Image from 'next/image';
import React from 'react';
import Star from './icons/Star';

const Explore = () => {
	return (
		<div>
			<h1 className='py-2 text-secondary-content'>Explore</h1>
			<div className='grid grid-cols-2 gap-x-2 gap-y-2 '>
				<div>
					<img
						alt='image'
						className='rounded-md'
						src={'/images/image.jpg'}
					/>
					<div className='text-xs font-bold text-brand pt-2'>
						The Gardens, PaniPokhari
					</div>
					<div className='text-[9px] text-secondary-content'>
						Maharajgunj, Kathmandu
					</div>
					<div className='flex items-center gap-x-1'>
						<div>
							<Star />
						</div>
						<div className='text-[9.5px]'>4.5</div>
					</div>
				</div>
				<div>
					<img
						alt='image'
						className='rounded-md'
						src={'/images/image-2.jpg'}
					/>
					<div className='text-xs font-bold text-brand pt-2'>
						Smile Chinese Restaurant
					</div>
					<div className='text-[9px] text-secondary-content'>
						Raniban, Nagarjun
					</div>
					<div className='flex items-center gap-x-1'>
						<div>
							<Star />
						</div>
						<div className='text-[9.5px]'>4.5</div>
					</div>
				</div>
				<div>
					<img
						alt='image'
						className='rounded-md'
						src={'/images/image1.jpg'}
					/>
					<div className='text-xs font-bold text-brand pt-2'>Fruit Ninja</div>
					<div className='text-[9px] text-secondary-content'>
						Jhamsikhek, Kathmandu
					</div>
					<div className='flex items-center gap-x-1'>
						<div>
							<Star />
						</div>
						<div className='text-[9.5px]'>4.5</div>
					</div>
				</div>
				<div>
					<img
						alt='image'
						className='rounded-md'
						src={'/images/image-2.jpg'}
					/>
					<div className='text-xs font-bold text-brand pt-2'>
						Smile Chinese Resturant
					</div>
					<div className='text-[9px] text-secondary-content'>
						Raniban, Nagarjun
					</div>
					<div className='flex items-center gap-x-1'>
						<div>
							<Star />
						</div>
						<div className='text-[9.5px]'>4.5</div>
					</div>
				</div>
				<div>
					<img
						alt='image'
						className='rounded-md'
						src={'/images/image1.jpg'}
					/>
					<div className='text-xs font-bold text-brand pt-2'>Fruit Ninja</div>
					<div className='text-[9px] text-secondary-content'>
						Jhamsikhek, Kathmandu
					</div>
					<div className='flex items-center gap-x-1'>
						<div>
							<Star />
						</div>
						<div className='text-[9.5px]'>4.4</div>
					</div>
				</div>
				<div>
					<img
						alt='image'
						className='rounded-md'
						src={'/images/image-2.jpg'}
					/>
					<div className='text-xs font-bold text-brand pt-2'>
						Smile Chinese Resturant
					</div>
					<div className='text-[9px] text-secondary-content'>
						Raniban, Nagarjun
					</div>
					<div className='flex items-center gap-x-1'>
						<div>
							<Star />
						</div>
						<div className='text-[9.5px]'>4.5</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Explore;
