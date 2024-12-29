import React from 'react';
import Home from './icons/Home';
import Cart from './icons/Cart';
import Bell from './icons/Bell';
import Profile from './icons/Profile';

const Navbar = () => {
	return (
		<div className='flex justify-center gap-x-10 items-center py-4 border border-t-gray-300 '>
			<div className='flex flex-col items-center'>
				<div>
					<Home />
				</div>
				<div className='text-xs'>Home</div>
			</div>
			<div className='flex flex-col items-center'>
				<div>
					<Cart />
				</div>
				<div className='text-xs'>Orders</div>
			</div>
			<div className='flex flex-col items-center'>
				<div>
					<Bell />
				</div>
				<div className='text-xs'>Notifications</div>
			</div>
			<div className='flex flex-col items-center'>
				<div>
					<Profile />
				</div>
				<div className='text-xs'>Account</div>
			</div>
		</div>
	);
};

export default Navbar;
