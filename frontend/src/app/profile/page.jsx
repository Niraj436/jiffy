import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import React from 'react';

const Profile = () => {
	let bagdes = [
		'/images/redBadge.png',
		'/images/greenBadge.png',
		'/images/yellowBadge.png',
		'/images/blueBadge.png',
	];
	return (
		<>
			<div className='bg-background max-w-[430px] mx-auto min-h-lvh'>
				<Container>
					<div className='flex items-center gap-x-3 py-3'>
						<div>
							<img
								src='/images/samipHandsome.png'
								alt='profile image'
								className='rounded-full w-12'
							/>
						</div>
						<div>
							<div>Samip Handsome</div>
							<div className='pb-1 text-[12px] text-secondary-content font-semibold'>
								98469116444
							</div>
						</div>
					</div>
					<div className='flex items-center gap-x-2 py-3'>
						<h1 className='pb-1 text-[10px] text-secondary-content font-semibold'>
							Achievements
						</h1>
						<div className='w-full bg-slate-300 h-[1px]'></div>
					</div>
					<div className='flex items-center justify-between py-3'>
						{bagdes.map((badge, index) => (
							<img
								key={index}
								src={badge}
								alt='badge'
								className=''
							/>
						))}
					</div>
					<div className='flex flex-col justify-center gap-y-3 py-3'>
						<h1 className='pb-1 text-[10px] text-secondary-content font-semibold'>
							Settings
						</h1>
						<h1>Language</h1>
						<div className='w-full bg-slate-300 h-[1px]'></div>
						<h1>Permissions</h1>
						<div className='w-full bg-slate-300 h-[1px]'></div>
					</div>

					<div className='flex flex-col justify-center gap-y-3 py-3'>
						<h1 className='pb-1 text-[10px] text-secondary-content font-semibold'>
							Help & Legal
						</h1>
						<h1>Emergency Support</h1>
						<div className='w-full bg-slate-300 h-[1px]'></div>

						<h1>Help</h1>
						<div className='w-full bg-slate-300 h-[1px]'></div>
					</div>
				</Container>
			</div>
			<div className='sticky bottom-0 bg-background mx-auto w-[430px]'>
				<Navbar />
			</div>
		</>
	);
};

export default Profile;
