'use client';
import useGetRestaurants from '@/hooks/useGetRestaurants';
import Star from './icons/Star';
import Container from './Container';

const Explore = () => {
  const { restaurants, loading } = useGetRestaurants();

  return (
    <div>
      <div className='flex gap-x-4 items-center mb-2'>
        <h1 className='py-2 text-secondary-content text-sm'>Explore</h1>
        <div className='flex-1 h-[1px] bg-slate-300'></div>
      </div>
      <div className='grid grid-cols-2 gap-x-2 gap-y-2 place-items-center '>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
          : restaurants?.map((item) => {
              return (
                <div key={item._id}>
                  <img
                    alt='image'
                    className='rounded-md h-32 w-44'
                    src={`${item.image}`}
                  />
                  <div className='text-xs font-bold text-brand pt-3'>
                    {item.name}
                  </div>
                  <div className='text-[10px] text-secondary-content'>
                    {item.location}
                  </div>
                  <div className='flex items-center gap-x-1 pb-2'>
                    <div>
                      <Star />
                    </div>
                    <div className='text-xs'>{item.rating}</div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export const Skeleton = ({ className = 'h-32 w-44' }) => (
  <div className={`animate-pulse bg-[#e0e5f4] rounded-md ${className}`}></div>
);
export default Explore;
