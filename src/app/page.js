import Container from '@/components/Container';
import Explore from '@/components/Explore';
import FoodItems from '@/components/FoodItems';
import Burger from '@/components/icons/burger';
import Location from '@/components/icons/Location';
import JiffyLogo from '@/components/JiffyLogo';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-background max-w-[430px] mx-auto'>
      <Container>
        <div className='pt-4 flex justify-between items-center '>
          <JiffyLogo />

          <Burger />
        </div>

        <div className='flex items-center gap-x-1 mt-4'>
          <div>
            <Location />
          </div>

          <h1 className='text-xs text-slate-500'>
            The Gardens, Panipokhari, Maharajgunj, Kathmandu
          </h1>
        </div>
        <div className='pt-5'>
          <Search />
        </div>
        <div className='pt-5'>
          <FoodItems />
        </div>
        <div className='pt-3'>
          <Link href={'/quests'}>
            <img src='/images/banner.png' alt='banner image' />
          </Link>
        </div>
        <div className='py-2'>
          <Explore />
        </div>
      </Container>
      <div className='sticky bottom-0 bg-background'>
        <Navbar />
      </div>
    </div>
  );
}
