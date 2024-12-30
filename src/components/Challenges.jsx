import DotIcn from './icons/DotIcn';
import TickIcn from './TickIcn';

const Challenges = ({ item }) => {
  return (
    <div className='py-3'>
      <div className='flex items-start gap-x-4 gap-y-2'>
        <div
          className={`border-4 ${
            item.completed ? ' bg-green-600' : ''
          } border-green-600 mt-1 p-1 rounded-full flex items-center justify-center text-white`}
        >
          {item.completed ? <TickIcn /> : <DotIcn />}
        </div>
        <div>
          <div className='flex justify-between'>
            <div className='pb-2'>
              <h1 className='text-brand font-bold'>{item.name}</h1>
              <div className='flex items-center gap-x-1'>
                <div>
                  <LocationOutline className='size-4 stroke-slate-500' />
                </div>
                <h1 className='text-secondary-content text-xs'>
                  {item.location}
                </h1>
              </div>
            </div>
            <div>
              <button className='text-[#B81919] text-xs font-semibold'>
                Order now
              </button>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-1'>
            <div>
              <img src='/images/image-2.jpg' alt='image' />
            </div>
            <div>
              <img src='/images/image-2.jpg' alt='image' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationOutline = ({ className }) => (
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
