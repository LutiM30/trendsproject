import { Link } from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import React from 'react';

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, ref) => (
    <li>
      <Link asChild>
        <a
          ref={ref}
          className={classNames(
            'block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-accent/50',
            className
          )}
          {...props}
        >
          <div className='mb-[5px] font-medium leading-[1.2]'>{title}</div>
          <p className='leading-[1.4] text-foreground/80'>{children}</p>
        </a>
      </Link>
    </li>
  )
);

export default ListItem;
