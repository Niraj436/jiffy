'use client';

import { useParams } from 'next/navigation';
import Challenges from '@/components/Challenges';
import Container from '@/components/Container';
import Header from '@/components/Header';
import { CircularProgressBar } from '@/components/MyQuests';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { cuisineColors } from '../../../../constants/cuisine-ui';
import { useQuestStore } from '../../../../store/quest-store';
import { Skeleton } from '@/components/Explore';
import { Spinner } from '@/app/cart/page';

const QuestDetail = () => {
  const items = [
    {
      name: 'Khuwa Yomari',
      location: 'Newa Lahana, Kritipur',
      image: '',
      completed: true,
    },
    {
      name: 'Juju Dhau',
      location: 'Madhikarmi Cafe, Bhaktapur',
      image: '',
      completed: false,
    },
    {
      name: 'Samay Baji',
      location: 'Madhikarmi Cafe, Bhaktapur',
      image: '',
      completed: false,
    },
  ];

  const { questId } = useParams();

  const [selectedQuest, setSelectedQuest] = useState(null);

  const quests = useQuestStore((state) => state.quests);

  const moreQuestInfo = quests.find((q) => q._id === questId);

  useEffect(() => {
    fetch(`http://localhost:3001/api/quests/${questId}`)
      .then((res) => res.json())
      .then((data) => {
        const completedChallenges = data.questDetails.challenges;
        const finalChallenges = data.questDetails.foodChallenges.map((i) => {
          if (completedChallenges.find((j) => j.foodId._id === i._id)) {
            return {
              ...i,
              completed: true,
            };
          } else {
            return {
              ...i,
              completed: false,
            };
          }
        });

        const finalQuestDetails = {
          ...data.questDetails,
          foodChallenges: finalChallenges,
        };

        console.log({ finalQuestDetails });
        setSelectedQuest(finalQuestDetails);
      });
  }, [questId]);

  const accentColor = cuisineColors[selectedQuest?.name]?.accent;
  const accentColorSecondary =
    cuisineColors[selectedQuest?.name]?.accentSecondary;

  return !selectedQuest ? (
    <div className='max-w-[430px] h-screen flex items-center justify-center mx-auto bg-background'>
      <Spinner className='size-12 text-brand-light' />
    </div>
  ) : (
    <div className='bg-background max-w-[430px] mx-auto'>
      <div
        style={{ backgroundColor: accentColorSecondary }}
        className={`relative flex flex-col gap-y-5 overflow-hidden rounded-b-3xl text-white pb-4`}
      >
        <img
          className='absolute bottom-0 right-0 max-w-[95px]'
          src={selectedQuest.image}
          alt='cuisine'
        />
        <Container>
          <Header color='text-white' />
          <div className='mt-12'>
            <h3 className='text-xl font-black bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent'>
              {selectedQuest.name}
            </h3>
            <p className='text-[9px]'>{selectedQuest.desc}</p>
          </div>
        </Container>
      </div>
      <Container className='px-8'>
        <div className='flex justify-center items-center gap-x-5 pt-4'>
          <div>
            <CircularProgressBar
              size={70}
              strokeWidth={8}
              strokeColor='rgba(0,0,0,0.05)'
              progress={moreQuestInfo.completedPercentage}
              color={accentColorSecondary}
            />
          </div>
          <div className='flex flex-col gap-y-1 py-2'>
            <h1 className='text-brand font-bold'>
              {moreQuestInfo.challengesCompleted}/
              {selectedQuest.foodChallenges.length} Challenges Completed
            </h1>
            <p className='text-secondary-content text-xs'>
              You’re on track to earn your “Newari Pasa” badge, keep going.
            </p>
          </div>
        </div>
        <div className='flex items-center gap-x-4 pt-4 pb-4 mb-2'>
          <div className='flex gap-x-2 text-slate-500'>
            <ChallengeIcon className='size-5' />
            <h1 className='text-sm text-slate-500'>Challenges</h1>
          </div>
          <div className='bg-gray-300 h-[1px] flex-1'></div>
        </div>
        {selectedQuest.foodChallenges.map((item) => {
          return (
            <Challenges
              key={item.name}
              item={item}
              selectedQuest={selectedQuest}
            />
          );
        })}
        <div>
          <div className='flex gap-x-4 gap-y-2'>
            <div className='flex flex-col items-center'>
              <div
                className={`border-2 border-slate-300 text-slate-300 p-2 rounded-full flex items-center justify-center `}
              >
                <Lock className='size-4' />
              </div>

              <div className={`bg-slate-300 flex-1 w-[2px]`}></div>
            </div>
            <div>
              <div className='flex justify-between'>
                <div className='pb-2'>
                  <h1 className='text-brand font-bold mt-1'>Quest Complete!</h1>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className='sticky bottom-0 bg-background'>
        <Navbar />
      </div>
    </div>
  );
};

const Lock = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}
  >
    <path
      fillRule='evenodd'
      d='M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z'
      clipRule='evenodd'
    />
  </svg>
);

const ChallengeIcon = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <polyline points='14.5 17.5 3 6 3 3 6 3 17.5 14.5' />
    <line x1='13' x2='19' y1='19' y2='13' />
    <line x1='16' x2='20' y1='16' y2='20' />
    <line x1='19' x2='21' y1='21' y2='19' />
    <polyline points='14.5 6.5 18 3 21 3 21 6 17.5 9.5' />
    <line x1='5' x2='9' y1='14' y2='18' />
    <line x1='7' x2='4' y1='17' y2='20' />
    <line x1='3' x2='5' y1='19' y2='21' />
  </svg>
);

export default QuestDetail;
