import { LocationOutline } from '@/components/Challenges';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Location from '@/components/icons/Location';
import ReceiptIcn from '@/components/icons/ReceiptIcn';

import Navbar from '@/components/Navbar';

import OrderItems from '@/components/OrderItems';
import React from 'react';

const Cart = () => {
  const items = [
    {
      name: 'Chicken Biryani (500gm)',
      price: 500,
      quantity: 1,
    },
    {
      name: 'Buff Momo',
      price: 200,
      quantity: 1,
    },
    {
      name: 'Mustang Aalu',
      price: 400,
      quantity: 1,
    },
  ];
  return (
    <>
      <div className='bg-background max-w-[430px] min-h-screen mx-auto'>
        <Container>
          <Header />
          <h1 className='text-brand font-bold text-lg py-2 mt-4'>Your Cart</h1>
          <div className='p-4 border border-slate-300 rounded-md flex flex-col gap-y-3 gap-x-1'>
            <div className='flex items-center gap-x-1'>
              <div>
                <LocationOutline className='size-4 stroke-slate-500' />
              </div>
              <h1 className='text-secondary-content text-xs'>
                Raniban, Nagarjun
              </h1>
            </div>
            <div className='flex flex-col gap-y-3'>
              {items.map((item) => {
                return <OrderItems item={item} />;
              })}
            </div>
          </div>
          <div className='flex items-center gap-x-2 pt-6 pb-2'>
            <div>
              <ReceiptIcn />
            </div>
            <div className='text-brand font-bold'>Receipt </div>
          </div>
          <div className='flex items-center justify-between pb-1'>
            <div className='text-primary-content text-sm'>
              Bill Total{' '}
              <span className='text-[10px] text-secondary-content font-medium'>
                (includes VAT, SD)
              </span>
            </div>
            <div className='text-brand-light font-semibold'>Rs 450</div>
          </div>
          <div className='flex items-center justify-between pb-2'>
            <div className='text-primary-content text-sm'>Delivery charge</div>
            <div className='text-brand-light font-semibold'>Rs 50</div>
          </div>
          <div className='w-full bg-slate-300 h-[1px] mt-2'></div>
          <div className='flex items-center justify-between py-4'>
            <div className='text-primary-content font-bold'>Total</div>
            <div className='text-brand-light font-semibold'>Rs 500</div>
          </div>
          <div>
            <button className='bg-brand-light w-full py-3 font-semibold rounded-md text-white text-xs'>
              Place Order
            </button>
          </div>
        </Container>
      </div>
      <div className='sticky bottom-0 bg-background mx-auto w-[430px]'>
        <Navbar />
      </div>
    </>
  );
};

export default Cart;
