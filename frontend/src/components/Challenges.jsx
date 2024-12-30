'use client';
import { useRouter } from 'next/navigation';
import { useQuestStore } from '../../store/quest-store';
import DotIcn from './icons/DotIcn';
import TickIcn from './TickIcn';

const Challenges = ({ item, selectedQuest }) => {
  console.log({ item });
  console.log(item.images[1]);

  console.log(selectedQuest);

  const cart = useQuestStore((state) => state.cart);
  const setCart = useQuestStore((state) => state.setCart);
  const setSelectedQuest = useQuestStore((state) => state.setSelectedQuest);

  const router = useRouter();

  const orderHandler = () => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x._id === item._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
    setSelectedQuest(selectedQuest._id);
    router.push('/cart');
  };

  return (
    <div className=''>
      <div className='flex gap-x-4 gap-y-2'>
        <div className='flex flex-col items-center'>
          <div
            className={`border-2 ${
              item.completed
                ? ' bg-green-600 border-green-600 text-green-600'
                : 'border-slate-300 text-slate-300'
            } border-green-600 p-1 rounded-full flex items-center justify-center text-slate-300`}
          >
            {item.completed ? <TickIcn /> : <DotIcn />}
          </div>

          <div
            className={`${
              item.completed ? 'bg-emerald-500' : 'bg-slate-300'
            } flex-1 w-[2px]`}
          ></div>
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <div className='pb-2'>
              <h1 className='text-brand font-bold'>{item.name}</h1>
              <div className='flex items-center gap-x-1'>
                <div>
                  <LocationOutline className='size-4 stroke-slate-500' />
                </div>
                <h1 className='text-secondary-content text-xs'>
                  {item.restaurantId.name}
                </h1>
              </div>
            </div>

            <button
              onClick={orderHandler}
              className='border rounded border-brand-light py-1 px-3 text-brand-light text-xs font-semibold'
            >
              Order Now
            </button>
          </div>
          <div className='flex gap-x-[6px] pb-6'>
            <img
              className='h-[120px] aspect-[5/4] object-cover rounded-md'
              src={item.images[0]}
              alt='image'
            />
            <img
              className='h-[120px] aspect-[5/4] object-cover rounded-md'
              src={item.images[1]}
              alt='image'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LocationOutline = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={className}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
    />
  </svg>
);

export default Challenges;
