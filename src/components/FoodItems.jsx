import React from 'react';

const FoodItems = () => {
  return (
    <div className='flex items-center justify-between px-1'>
      <div className='flex flex-col gap-y-1 items-center'>
        <div>
          <img src='/images/burger.png' className='h-10' alt='' />
        </div>
        <div className='text-xs font-semibold'>Burger</div>
      </div>
      <div className='flex flex-col gap-y-1 items-center'>
        <div>
          <img src='/images/pizza.png' className='h-10' alt='' />
        </div>
        <div className='text-xs font-semibold'>Pizza</div>
      </div>

      <div className='flex flex-col gap-y-1 items-center'>
        <div>
          <img src='/images/momo.png' className='h-10' alt='' />
        </div>
        <div className='text-xs font-semibold'>Momo</div>
      </div>
      <div className='flex flex-col gap-y-1 items-center'>
        <div>
          <img src='/images/biryani.png' className='h-10' alt='' />
        </div>
        <div className='text-xs font-semibold'>Biryani</div>
      </div>
      <div className='flex flex-col gap-y-1 items-center'>
        <div>
          <img src='/images/salad.png' className='h-10' alt='' />
        </div>
        <div className='text-xs font-semibold'>Salad</div>
      </div>
    </div>
  );
};

export default FoodItems;
