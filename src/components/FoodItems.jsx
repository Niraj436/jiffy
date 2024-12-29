import React from 'react';

const FoodItems = () => {
	return (
		<div className='flex items-center justify-between px-1'>
			<div className='flex flex-col gap-y-1 items-center'>
				<div>
					<img
						src='/images/image1.png'
						className='h-8'
						alt=''
					/>
				</div>
				<div className='text-xs font-semibold'>Burger</div>
			</div>
			<div className='flex flex-col gap-y-1 items-center'>
				<div>
					<img
						src='/images/image3.png'
						className='h-9'
						alt=''
					/>
				</div>
				<div className='text-xs font-semibold'>Pizza</div>
			</div>

			<div className='flex flex-col gap-y-1 items-center'>
				<div>
					<img
						src='/images/image4.png'
						className='h-10'
						alt=''
					/>
				</div>
				<div className='text-xs font-semibold'>Momo</div>
			</div>
			<div className='flex flex-col gap-y-1 items-center'>
				<div>
					<img
						src='/images/image2.png'
						className='h-10'
						alt=''
					/>
				</div>
				<div className='text-xs font-semibold'>Birayani</div>
			</div>
			<div className='flex flex-col gap-y-1 items-center'>
				<div>
					<img
						src='/images/image3.png'
						className='h-10'
						alt=''
					/>
				</div>
				<div className='text-xs font-semibold'>Pizza</div>
			</div>
		</div>
	);
};

export default FoodItems;
