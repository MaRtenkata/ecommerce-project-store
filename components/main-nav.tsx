'use client';

import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    lable: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {routes.map((route) => {
        return (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              route.active
                ? 'text-black dark:text-white'
                : 'text-neutral-500 dark:text-neutral-400'
            )}
          >
            {route.lable}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNav;
