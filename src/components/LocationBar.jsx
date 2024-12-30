import Location from './icons/Location';

const LocationBar = () => {
  return (
    <div className='flex items-center gap-x-1 mt-4'>
      <div>
        <Location />
      </div>

      <h1 className='text-xs text-slate-500'>
        The Gardens, Panipokhari, Maharajgunj, Kathmandu
      </h1>
    </div>
  );
};

export default LocationBar;
