import React from 'react';

const DietaryQuest = () => {
	return (
		<div>
			<h1 className=' font-bold text-brand'>Dietary Quests</h1>
			<p className='py-2 text-xs text-secondary-content'>
				Strict on your diet? We've got you covered!
			</p>
			<div className='bg-[#65A30D] rounded-lg h-[123px] flex flex-col justify-center pl-6 text-white gap-y-2'>
				<div>Vegetrain Cuisine</div>
				<div className='text-xs'>
					From fresh Salads to aromatic Paneer Tikka!
				</div>
				<div className=''>
					<button className='bg-white text-brand text-[0.65rem] px-4 py-1 rounded-md font-semibold'>
						Let's Go
					</button>
				</div>
			</div>
		</div>
	);
};

export default DietaryQuest;
