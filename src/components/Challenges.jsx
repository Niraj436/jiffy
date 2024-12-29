import React from 'react';
import Location from './icons/Location';
import TickIcn from './TickIcn';
import DotIcn from './icons/DotIcn';

const Challenges = ({ item }) => {
	return (
		<div className='py-3'>
			<div className='flex gap-x-4 gap-y-2'>
				<div
					className={`border-4 ${
						item.completed ? ' bg-green-600' : ''
					} border-green-600 h-12 w-24 rounded-full relative`}>
					<div className='absolute inset-0 flex items-center justify-center text-white'>
						{item.completed ? <TickIcn /> : <DotIcn />}
					</div>
				</div>
				<div>
					<div className=' flex justify-between'>
						<div className='pb-1'>
							<h1 className='text-brand font-bold'>{item.name}</h1>
							<div className='flex items-center gap-x-1'>
								<div>
									<Location />
								</div>
								<h1 className='text-secondary-content text-xs'>
									{item.location}
								</h1>
							</div>
						</div>
						<div>
							<button className='text-[#B81919] text-xs font-semibold'>
								Order now
							</button>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-x-2'>
						<div>
							<img
								src='/images/image-2.jpg'
								alt='image'
							/>
						</div>
						<div>
							<img
								src='/images/image-2.jpg'
								alt='image'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Challenges;
