import Link from 'next/link';
import React from 'react';

const MyQuests = ({ item }) => {
	const completedPercentage = Math.floor(
		(item.challengesCompleted / item.totalChallenges) * 100
	);

	console.log({ completedPercentage });

	const isChallengeStarted = item.challengesCompleted > 0;
	return (
		<div>
			<div>
				<div
					style={{
						background: `linear-gradient(to top left, ${item.accent}, ${item.accentSecondary})`,
					}}
					className='relative rounded-lg h-[123px] flex flex-col justify-center pl-6 text-white my-3'>
					<div className='flex gap-x-2 items-center'>
						{completedPercentage !== 0 && (
							<CircularProgressBar
								size={35}
								strokeWidth={5}
								progress={75}
								color='white'
							/>
						)}
						<div>
							<h3 className='font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent'>
								{item.title}
							</h3>
							<p className='text-[9px]'>{item.description}</p>
						</div>
					</div>
					<div className='mt-3'>
						<button className='bg-white/80 text-brand text-[0.65rem] px-5 py-[0.5rem] rounded-md font-semibold'>
							<Link href={'/quests/1'}>
								{isChallengeStarted == true ? <>Continue</> : <>Start</>}
							</Link>
						</button>
					</div>
					<img
						className='absolute bottom-0 right-0 max-w-[90px]'
						src={item.image}
						alt='cuisine'
					/>
				</div>
			</div>
		</div>
	);
};

export const CircularProgressBar = ({
	size = 100,
	strokeWidth = 10,
	progress = 50,
	color = '#4caf50',
}) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (progress / 100) * circumference;

	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				stroke='rgba(255,255,255,0.2)'
				strokeWidth={strokeWidth}
				fill='none'
			/>

			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				stroke={color}
				strokeWidth={strokeWidth}
				fill='none'
				strokeLinecap='round'
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				style={{ transition: 'stroke-dashoffset 0.35s ease-in-out' }}
				transform={`rotate(-90 ${size / 2} ${size / 2})`}
			/>
			<text
				x='50%'
				y='50%'
				dominantBaseline='middle'
				textAnchor='middle'
				fontSize={size / 5}
				fontWeight={700}
				fill={color}>
				{progress}%
			</text>
		</svg>
	);
};
export default MyQuests;
