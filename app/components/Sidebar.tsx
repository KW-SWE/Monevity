'use client'; // client side component since we used the usePathname hook.

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/monevity_logo_10.svg"
            width={150}
            height={150}
            alt="monevity logo"
            className="w-50 h-50 max-w-xs max-h-xs sm:max-w-sm sm:max-h-sm md:max-w-md md:max-h-md lg:max-w-lg lg:max-h-lg xl:max-w-xl xl:max-h-xl place-content-center"
            // className="w-6 h-6 max-xl:w-3.5 max-xl:h-3.5"
          />
          <h1 className="sidebar-logo">Monevity</h1>
        </Link>
        <div>
          {/* links that map to other pages */}
          {sidebarLinks.map((item) => {
            //
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn('sidebar-link', {
                  'bg-bank-gradient': isActive,
                })}
              >
                <div className="relative size-6">
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    fill
                    className={cn({ 'brightness-[3] invert-0': isActive })}
                  />
                </div>
                <p className={cn('sidebar-label', { '!text-white': isActive })}>
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>
        USER
      </nav>
      <Footer user={user} />
    </section>
  );
};

export default Sidebar;
