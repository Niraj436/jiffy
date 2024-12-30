import Image from 'next/image';
import React from 'react';
import Star from './icons/Star';

const Explore = () => {
  return (
    <div>
      <div className='flex gap-x-4 items-center mb-2'>
        <h1 className='py-2 text-secondary-content text-sm'>Explore</h1>
        <div className='flex-1 h-[1px] bg-slate-300'></div>
      </div>
      <div className='grid grid-cols-2 gap-x-2 gap-y-2 '>
        <div>
          <img alt='image' className='rounded-md' src={'/images/image.jpg'} />
          <div className='text-xs font-bold text-brand pt-3'>
            The Gardens, PaniPokhari
          </div>
          <div className='text-[10px] text-secondary-content'>
            Maharajgunj, Kathmandu
          </div>
          <div className='flex items-center gap-x-1 pb-2'>
            <div>
              <Star />
            </div>
            <div className='text-xs'>4.5</div>
          </div>
        </div>
        <div>
          <img alt='image' className='rounded-md' src={'/images/image-2.jpg'} />
          <div className='text-xs font-bold text-brand pt-2'>
            Smile Chinese Restaurant
          </div>
          <div className='text-[10px] text-secondary-content'>
            Raniban, Nagarjun
          </div>
          <div className='flex items-center gap-x-1'>
            <div>
              <Star />
            </div>
            <div className='text-xs'>4.5</div>
          </div>
        </div>
        <div>
          <img alt='image' className='rounded-md' src={'/images/image1.jpg'} />
          <div className='text-xs font-bold text-brand pt-2'>Fruit Ninja</div>
          <div className='text-[10px] text-secondary-content'>
            Jhamsikhek, Kathmandu
          </div>
          <div className='flex items-center gap-x-1'>
            <div>
              <Star />
            </div>
            <div className='text-xs'>4.5</div>
          </div>
        </div>
        <div>
          <img alt='image' className='rounded-md' src={'/images/image-2.jpg'} />
          <div className='text-xs font-bold text-brand pt-2'>
            Smile Chinese Resturant
          </div>
          <div className='text-[10px] text-secondary-content'>
            Raniban, Nagarjun
          </div>
          <div className='flex items-center gap-x-1'>
            <div>
              <Star />
            </div>
            <div className='text-xs'>4.5</div>
          </div>
        </div>
        <div>
          <img alt='image' className='rounded-md' src={'/images/image1.jpg'} />
          <div className='text-xs font-bold text-brand pt-2'>Fruit Ninja</div>
          <div className='text-[10px] text-secondary-content'>
            Jhamsikhek, Kathmandu
          </div>
          <div className='flex items-center gap-x-1'>
            <div>
              <Star />
            </div>
            <div className='text-xs'>4.4</div>
          </div>
        </div>
        <div>
          <img alt='image' className='rounded-md' src={'/images/image-2.jpg'} />
          <div className='text-xs font-bold text-brand pt-2'>
            Smile Chinese Resturant
          </div>
          <div className='text-[10px] text-secondary-content'>
            Raniban, Nagarjun
          </div>
          <div className='flex items-center gap-x-1'>
            <div>
              <Star />
            </div>
            <div className='text-xs'>4.5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
