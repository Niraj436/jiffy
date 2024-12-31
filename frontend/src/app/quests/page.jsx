'use client';
import Container from '@/components/Container';
import Header from '@/components/Header';
import LocationBar from '@/components/LocationBar';
import MyQuests from '@/components/MyQuests';
import Navbar from '@/components/Navbar';
import { API } from '@/config/config';
import { useEffect, useState } from 'react';
import { useQuestStore } from '../../../store/quest-store';
import { Skeleton } from '@/components/Explore';

const Quest = () => {
  const [loading, setLoading] = useState(false);

  const setQuests = useQuestStore((state) => state.setQuests);
  const quests = useQuestStore((state) => state.quests);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/api/quests`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);

        const finalQuests = data.questProgress
          .map((quest) => {
            return {
              ...quest,
              completedPercentage: Math.floor(
                (quest.challengesCompleted / quest.foodChallenges.length) * 100
              ),
            };
          })
          .sort((a, b) => b.completedPercentage - a.completedPercentage);

        console.log({ finalQuests });
        setQuests(finalQuests);
      });
  }, []);

  const CulturalQuests = quests.filter((item) => {
    return item.type === 'Cultural';
  });

  const DietaryQuests = quests.filter((item) => {
    return item.type === 'Dietary';
  });

  return (
    <div className='bg-background max-w-[430px] mx-auto'>
      <Container>
        <Header />
        <LocationBar />
        <div className='mt-4'>
          <h1 className='font-bold text-brand'>Cultural Quests</h1>
          <p className='text-xs text-secondary-content'>
            Dive into exciting cuisines and conquer every quest.
          </p>
          {loading ? (
            <div className='space-y-3 my-2'>
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton className='h-[128px] w-full' key={i} />
              ))}
            </div>
          ) : (
            CulturalQuests.map((item) => {
              return <MyQuests key={item.name} item={item} />;
            })
          )}
        </div>
        <div>
          <h1 className='mt-6 font-bold text-brand'>Dietary Quests</h1>
          <p className='text-xs text-secondary-content'>
            Strict on your diet? We've got you covered!
          </p>
          {loading ? (
            <div className='space-y-3 my-2'>
              {Array.from({ length: 1 }).map((_, i) => (
                <Skeleton className='h-[128px] w-full' key={i} />
              ))}
            </div>
          ) : (
            DietaryQuests.map((item) => {
              return <MyQuests key={item.name} item={item} />;
            })
          )}
        </div>
      </Container>
      <div className='sticky bottom-0 bg-background'>
        <Navbar />
      </div>
    </div>
  );
};

export default Quest;
