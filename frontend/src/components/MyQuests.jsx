import Link from 'next/link';
import React from 'react';
import { cuisineColors } from '../../constants/cuisine-ui';

const MyQuests = ({ item }) => {
  const completedPercentage = Math.floor(
    (item.challengesCompleted / item.foodChallenges.length) * 100
  );

  const isChallengeStarted = item.challengesCompleted > 0;
  const accentColor = cuisineColors[item.name].accent;
  const accentColorSecondary = cuisineColors[item.name].accentSecondary;

  return (
    <div>
      <div>
        <div
          style={{
            background: `linear-gradient(to top left, ${accentColor}, ${accentColorSecondary})`,
          }}
          className='relative rounded-lg h-[123px] flex flex-col justify-center pl-6 text-white my-3'
        >
          <div className='flex gap-x-2 items-center'>
            {completedPercentage !== 0 && (
              <CircularProgressBar
                size={35}
                strokeWidth={5}
                progress={item.completedPercentage}
                color='white'
              />
            )}
            <div>
              <h3 className='font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent'>
                {item.name}
              </h3>
              <p className='text-[9px]'>{item.desc}</p>
            </div>
          </div>
          <div className='mt-3'>
            <button className='bg-white/80 text-brand text-[0.65rem] px-5 py-[0.5rem] rounded-md font-semibold'>
              <Link href={`/quests/${item._id}`}>
                {isChallengeStarted == true ? 'Continue' : 'Start'}
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
  strokeColor = 'rgba(255,255,255,0.2)',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={strokeColor}
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
        fill={color}
      >
        {progress}%
      </text>
    </svg>
  );
};
export default MyQuests;
