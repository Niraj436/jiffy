import React from 'react';

const MyQuests = ({ item }) => {
	return (
		<div>
			<div>
				<div className='bg-[#65A30D] rounded-lg h-[123px] flex flex-col justify-center pl-6 text-white gap-y-2 my-3'>
					<div>{item.title}</div>
					<div className='text-xs'>{item.description}</div>
					<div className=''>
						<button className='bg-white text-brand text-[0.65rem] px-5 py-[0.5rem] rounded-md font-semibold'>
							{item.running == true ? <>Continue</> : <>Start</>}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyQuests;
