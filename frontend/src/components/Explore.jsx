'use client';
import Image from 'next/image';
import React from 'react';
import Star from './icons/Star';
import useGetRestaurants from '@/hooks/useGetRestaurants';

const Explore = () => {
	const { restaurants, loading } = useGetRestaurants();

	return (
		<div>
			<div className='flex gap-x-4 items-center mb-2'>
				<h1 className='py-2 text-secondary-content text-sm'>Explore</h1>
				<div className='flex-1 h-[1px] bg-slate-300'></div>
			</div>
			<div className='grid grid-cols-2 gap-x-2 gap-y-2 '>
				{restaurants?.map((item) => {
					return (
						<div key={item._id}>
							<img
								alt='image'
								className='rounded-md'
								src={`${item.image}`}
							/>
							<div className='text-xs font-bold text-brand pt-3'>
								{item.name}
							</div>
							<div className='text-[10px] text-secondary-content'>
								{item.location}
							</div>
							<div className='flex items-center gap-x-1 pb-2'>
								<div>
									<Star />
								</div>
								<div className='text-xs'>{item.rating}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Explore;
