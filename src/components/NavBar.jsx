import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import NavBarItem from './NavBarItem';
import logo from '../images/tac-logo.svg';

const NavBar = () => {
  return (
    <div className='fixed inset-0 z-50 flex justify-center mx-10 mt-2 shadow-md h-fit bg-card rounded-2xl '>
      <div className='flex items-center justify-between w-full'>
        <img src={logo} alt='TapACall' className='max-w-48' />
        <NavigationMenu.Root className='z-50 flex items-center justify-center flex-grow p-1'>
          <NavigationMenu.List className='flex items-center m-0 list-none'>
            <NavBarItem to='/' title='Home' />
            <NavBarItem to='/blogs' title='Blog' />
            <NavBarItem to='/terms' title='Terms' />

            <NavigationMenu.Indicator className='top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn'>
              <div className='relative top-[70%] h-[10px] w-[10px] rotate-45 rounded-tl-[2px] bg-card' />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>
          <div className='perspective-[2000px] absolute left-0 top-full flex w-full justify-center'>
            <NavigationMenu.Viewport className='relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-card shadow-lg transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]' />
          </div>
        </NavigationMenu.Root>
        <div className='right-div'>{/* Content for the right div */}</div>
      </div>
    </div>
  );
};

export default NavBar;
