import Container from '@/components/Container';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const Profile = () => {
  let bagdes = [
    { name: 'Newari Passa', image: '/images/newari_pasa.png' },
    { name: 'Mithila Mitra', image: '/images/mithila_mitra.png' },
    { name: 'Tibetan Rokpa', image: '/images/tibetan_rokpa.png' },
    { name: 'Sakahaari Sikaari', image: '/images/sakahaari_sikaari.png' },
  ];
  return (
    <>
      <div className='bg-background max-w-[430px] mx-auto min-h-[calc(100vh)]'>
        <Container>
          <Header />
          <div className='mt-4 flex items-center gap-x-3 py-3'>
            <div>
              <img
                src='/images/samipHandsome.png'
                alt='profile image'
                className='rounded-full w-12'
              />
            </div>
            <div>
              <div>Samip Poudel</div>
              <div className='pb-1 text-[12px] text-secondary-content font-medium '>
                98469116444
              </div>
            </div>
          </div>
          <div className='flex items-center gap-x-2 py-3'>
            <h1 className='pb-1 text-xs text-secondary-content font-medium'>
              Achievements
            </h1>
            <div className='w-full bg-slate-300 h-[1px]'></div>
          </div>
          <div className='grid grid-cols-2 gap-y-6 py-3'>
            {bagdes.map((badge, index) => (
              <div
                className='flex flex-col items-center justify-center'
                key={index}
              >
                <img src={badge.image} alt='badge' className='w-[60px]' />
                <p className='text-xs font-medium text-slate-900 mt-2'>
                  {badge.name}
                </p>
              </div>
            ))}
          </div>
          <div className='flex flex-col justify-center gap-y-3 py-3'>
            <h1 className='mt-4 text-xs text-secondary-content font-semibold'>
              Settings
            </h1>
            <p className='text-sm pt-1 pb-2 text-slate-900'>Language</p>
            <div className='w-full bg-slate-300 h-[1px]'></div>
            <p className='text-sm py-2 text-slate-900'>Permissions</p>
            <div className='w-full bg-slate-300 h-[1px]'></div>
          </div>

          <div className='flex flex-col justify-center gap-y-3 py-3'>
            <h1 className='pb-1 text-xs text-secondary-content font-semibold'>
              Help & Legal
            </h1>
            <p className='text-sm text-slate-900 pt-1 pb-2'>
              Emergency Support
            </p>
            <div className='w-full bg-slate-300 h-[1px]'></div>

            <p className='text-sm text-slate-900 py-2'>Help</p>
            <div className='w-full bg-slate-300 h-[1px]'></div>
          </div>
        </Container>
        <div className='sticky bottom-0 bg-background'>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Profile;
