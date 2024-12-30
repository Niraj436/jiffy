'use client';
import { LocationOutline } from '@/components/Challenges';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Location from '@/components/icons/Location';
import ReceiptIcn from '@/components/icons/ReceiptIcn';

import Navbar from '@/components/Navbar';

import OrderItems from '@/components/OrderItems';
import React, { useState } from 'react';
import { useQuestStore } from '../../../store/quest-store';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);

  const cart = useQuestStore((state) => state.cart);
  const selectedQuest = useQuestStore((state) => state.selectedQuest);

  console.log({ cart });

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const DELIVERY_CHARGE = 50;

  const grandTotal = total + DELIVERY_CHARGE;

  const router = useRouter();

  const completeOrder = () => {
    setOrderLoading(true);
    fetch('http://localhost:3001/api/quests/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        questId: selectedQuest,
        cart: cart,
      }),
    }).then((res) => {
      setOrderSuccess(true);
      setOrderLoading(false);
    });
  };

  const clickHandler = () => {
    router.back();
  };

  return (
    <>
      <div className='bg-background max-w-[430px] min-h-screen mx-auto'>
        <Container>
          <Header />
          {orderSuccess ? (
            <div className='flex flex-col items-center gap-y-4 pt-16'>
              <CircleTick />
              <h3 className='text-slate-900 font-medium'>
                Your Order has been confirmed!
              </h3>

              <button
                className='border-2 border-brand-light py-2 px-4 rounded-md text-xs mt-2'
                onClick={clickHandler}
              >
                Go Back
              </button>
            </div>
          ) : cart.length > 0 ? (
            <>
              <h1 className='text-brand font-bold text-lg py-2 mt-4'>
                Your Cart
              </h1>
              <div className='p-4 border border-slate-300 rounded-md flex flex-col gap-y-3 gap-x-1'>
                <div className='flex items-center gap-x-1'>
                  <div>
                    <LocationOutline className='size-4 stroke-slate-500' />
                  </div>
                  <h1 className='text-secondary-content text-xs'>
                    {cart[0].restaurantId.name}
                  </h1>
                </div>
                <div className='flex flex-col gap-y-3'>
                  {cart.map((item) => {
                    return <OrderItems key={item.name} item={item} />;
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
                <div className='text-brand-light font-semibold'>Rs {total}</div>
              </div>
              <div className='flex items-center justify-between pb-2'>
                <div className='text-primary-content text-sm'>
                  Delivery charge
                </div>
                <div className='text-brand-light font-semibold'>
                  Rs {DELIVERY_CHARGE}
                </div>
              </div>
              <div className='w-full bg-slate-300 h-[1px] mt-2'></div>
              <div className='flex items-center justify-between py-4'>
                <div className='text-primary-content font-bold'>Total</div>
                <div className='text-brand-light font-semibold'>
                  Rs {grandTotal}
                </div>
              </div>
              <div>
                <button
                  onClick={completeOrder}
                  className='bg-brand-light w-full flex items-center justify-center py-3 font-semibold rounded-md text-white text-xs'
                >
                  {orderLoading ? <Spinner /> : <></>}
                  Place Order
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className='text-brand font-bold text-lg py-2 mt-4'>
                Your Cart is Empty!
              </h1>
            </>
          )}
        </Container>
      </div>
      <div className='sticky bottom-0 bg-background mx-auto w-[430px]'>
        <Navbar />
      </div>
    </>
  );
};

export const Spinner = ({ className = 'size-3 -ml-1 mr-3 text-white' }) => (
  <svg
    className={`${className} animate-spin `}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    ></circle>
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    ></path>
  </svg>
);

const CircleTick = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1}
    stroke='currentColor'
    className='size-28 stroke-green-600'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
    />
  </svg>
);

export default Cart;
