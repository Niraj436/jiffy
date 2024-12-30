'use client';
import React from 'react';
import Home from './icons/Home';
import Cart from './icons/Cart';
import Bell from './icons/Bell';
import Profile from './icons/Profile';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({ request }) => {
  const navlinks = [
    {
      title: 'Home',
      icon: Home,
      link: '/',
    },
    {
      title: 'Cart',
      icon: Cart,
      link: '/cart',
    },
    {
      title: 'Notifications',
      icon: Bell,
      link: '/notifications',
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
    <div className='flex justify-center gap-x-10 items-center py-4 border border-t-gray-300 '>
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
