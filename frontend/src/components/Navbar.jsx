'use client';
import React from 'react';
import Home from './icons/Home';
import Cart from './icons/Cart';
import Profile from './icons/Profile';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Trophy from './icons/Trophy';

const Navbar = ({ request }) => {
  const navlinks = [
    {
      title: 'Home',
      icon: Home,
      link: '/',
    },
    {
      title: 'Quests',
      icon: Trophy,
      link: '/quests',
    },
    {
      title: 'Cart',
      icon: Cart,
      link: '/cart',
    },

    {
      title: 'Account',
      icon: Profile,
      link: '/profile',
    },
  ];

  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className='flex justify-between gap-x-10 px-8 items-center py-4 border border-t-gray-300 '>
      {navlinks.map((navlink, idx) => (
        <Link
          key={idx}
          className={`${
            navlink.link === pathname ? 'text-brand-light' : 'text-slate-600'
          } flex flex-col items-center justify-center cursor-pointer`}
          href={navlink.link}
        >
          <navlink.icon />
          <div className='text-xs pt-[3px]'>{navlink.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
