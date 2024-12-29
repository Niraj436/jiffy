import React from 'react';
import Microphone from './icons/Microphone';
import SearchIcn from './icons/SearchIcn';

const Search = () => {
	return (
		<div className='flex bg-white px-8 relative  py-1 rounded-md '>
			<div className='absolute left-2 top-2'>
				<SearchIcn />
			</div>
			<div className=''>
				<input
					type='text'
					placeholder='Search for "Biryani'
					className='px-2 outline-none placeholder:text-sm flex-1'
				/>
			</div>
			<div className='absolute right-2 top-2'>
				<Microphone />
			</div>
		</div>
	);
};

export default Search;
