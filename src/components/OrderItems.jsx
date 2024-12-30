import React from 'react';

const OrderItems = ({ item }) => {
	return (
		<div className='flex justify-between'>
			<div>
				<h1 className='text-brand font-semibold'>{item.name}</h1>
				<h1 className='text-brand-light font-semibold'>Rs {item.price}</h1>
			</div>
			<div className='border-2 border-slate-300 flex justify-between  gap-x-3 p-4 items-center h-9 rounded-md'>
				<div className='text-brand-light font-bold'>+</div>
				<div className='text-brand'>{item.quantity}</div>
				<div className='text-brand-light font-bold'>-</div>
			</div>
		</div>
	);
};

export default OrderItems;
