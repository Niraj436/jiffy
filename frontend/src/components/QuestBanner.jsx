import Link from 'next/link';
import React from 'react';

const QuestBanner = () => {
  return (
    <div>
      <div className='bg-gradient-to-br from-brand-light to-brand rounded-md'>
        <div className='relative rounded-lg h-[123px] flex flex-col justify-center pl-6 text-white my-3'>
          <div className='flex gap-x-2 items-center'>
            <div>
              <h3 className='font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent'>
                Embark On A Quest!
              </h3>
              <p className='text-[10px]'>Earn Vouchers & Rewards.</p>
            </div>
          </div>
          <div className='mt-3'>
            <button className='bg-white/80 text-brand text-[0.65rem] px-5 py-[0.5rem] rounded-md font-semibold'>
              Let's Go!
            </button>
          </div>
          <img
            className='absolute right-4 bottom-1/2 translate-y-1/2 max-w-[70px]'
            src={'/images/badge-demo.png'}
            alt='cuisine'
          />
        </div>
      </div>
    </div>
  );
};

export default QuestBanner;
