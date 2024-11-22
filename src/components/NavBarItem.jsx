import React from 'react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import ListItem from './ListItem';
import { Content, Item, Trigger, Link } from '@radix-ui/react-navigation-menu';

// listItems will be => [{to: "/path" ,title:"Path",description:"It Leads to path"}]
const NavBarItem = ({ trigger, listItems, to, title }) => {
  if (trigger) {
    return (
      <Item>
        <Trigger className='group flex select-none items-center justify-between gap-[2px] rounded px-3 py-2 text-[15px] font-medium leading-none outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground hover:bg-accent hover:text-accent-foreground'>
          {trigger}{' '}
          <CaretDownIcon
            className='relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180'
            aria-hidden
          />
        </Trigger>

        <Content className='absolute left-0 top-0 will-change-auto data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto'>
          <div className='m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr] bg-card rounded-md'>
            {/* <div className='row-span-3 grid'>
            <Link asChild>
              <a
                className='flex h-full w-full select-none flex-col justify-end rounded-md bg-accent p-[25px] no-underline outline-none focus:ring-2 focus:ring-accent'
                href='/'
              >
                <div className='mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-accent-foreground'>
                  Project Name
                </div>
              </a>
            </Link>
          </div> */}

            {listItems?.map((link) =>
              link?.description ? (
                <ListItem href={link?.to} title={link?.title}>
                  {link?.description}
                </ListItem>
              ) : (
                <ListItem href={link?.to} title={link?.title} />
              )
            )}
          </div>
        </Content>
      </Item>
    );
  } else if (to && title) {
    return (
      <Item className=''>
        <Link
          className='block select-none rounded px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none hover:bg-accent hover:text-accent-foreground'
          href={to}
        >
          {title}
        </Link>
      </Item>
    );
  } else {
    return <></>;
  }
};

export default NavBarItem;
