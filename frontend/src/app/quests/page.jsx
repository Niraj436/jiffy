'use client'
import Container from '@/components/Container';
import Header from '@/components/Header';
import LocationBar from '@/components/LocationBar';
import MyQuests from '@/components/MyQuests';
import Navbar from '@/components/Navbar';
import useGetQuests from '@/hooks/useGetQuests';

const Quest = () => {
	const { quests, loading } = useGetQuests();
    
  const YourQuest = [
    {
      title: 'Newari Cuisine',
      description: 'From sweet Yomari to delicious Samay Baji!',
      completed: false,
      challengesCompleted: 6,
      totalChallenges: 8,
      type: 'cultural',
      accent: '#7F1414',
      accentSecondary: '#B81919',
      image: '/images/newari.png',
    },
    {
      title: 'Mithila Cuisine',
      description: 'From soft Malpuwa to authentic Litti Chokha!',
      completed: false,
      challengesCompleted: 0,
      totalChallenges: 5,
      type: 'cultural',
      accent: '#0E91A8',
      accentSecondary: '#06B6D4',
      image: '/images/mithila.png',
    },
    {
      title: 'Tibetan Cuisine',
      description: 'From spicy Laphing to warm Thenthuk!',
      completed: false,
      challengesCompleted: 0,
      totalChallenges: 10,
      type: 'cultural',
      accent: '#D88B09',
      accentSecondary: '#FEAF2A',
      image: '/images/tibetan.png',
    },
    {
      title: 'Vegeterian Cuisine',
      description: 'From fresh Salads to aromatic Panner Tikka!',
      completed: false,
      challengesCompleted: 0,
      totalChallenges: 8,
      type: 'dietary',
      accent: '#65A30D',
      accentSecondary: '#65A30D',
      image: '/images/vegeterian.png',
    },
  ];

  const normalCuisine = YourQuest.filter((item) => {
    return item.type === 'cultural';
  });

  const vegCuisine = YourQuest.filter((item) => {
    return item.type === 'dietary';
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
          {normalCuisine.map((item) => {
            return <MyQuests item={item} />;
          })}
        </div>
        <div>
          <h1 className='mt-6 font-bold text-brand'>Dietary Quests</h1>
          <p className='text-xs text-secondary-content'>
            Strict on your diet? We've got you covered!
          </p>
          {vegCuisine.map((item) => {
            return <MyQuests item={item} />;
          })}
        </div>
      </Container>
      <div className='sticky bottom-0 bg-background'>
        <Navbar />
      </div>
    </div>
  );
};

export default Quest;
