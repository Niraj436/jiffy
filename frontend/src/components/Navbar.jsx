import React from 'react';
import Home from './icons/Home';
import Cart from './icons/Cart';
import Bell from './icons/Bell';
import Profile from './icons/Profile';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='flex justify-center gap-x-10 items-center py-4 border border-t-gray-300 '>
			<div className='flex flex-col items-center cursor-pointer'>
				<div>
					<Link href={'/'}>
						<Home />
					</Link>
				</div>
				<div className='text-xs'>Home</div>
			</div>
			<div className='flex flex-col items-center'>
				<div>
					<Link href={'/cart'}>
						<Cart />
					</Link>
				</div>
				<div className='text-xs'>Orders</div>
			</div>
			<div className='flex flex-col items-center'>
				<div>
					<Link href={'/'}>
						<Bell />
					</Link>
				</div>
				<div className='text-xs'>Notifications</div>
			</div>
			<div className='flex flex-col items-center'>
				<div>
					<Link href={'/profile'}>
						<Profile />
					</Link>
				</div>
				<div className='text-xs'>Account</div>
			</div>
		</div>
	);
};

export default Navbar;
