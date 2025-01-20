import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/assets/monevity_logo_10.svg"
            width={34}
            height={34}
            alt="monevity logo"
            className="w-6 h-6 max-xl:w-3.5 max-xl:h-3.5"
          />
          <h1 className="sidebar-logo">Monevity</h1>
        </Link>
        {/* links that map to other pages */}
        {sidebarLinks.map((item) => {
          return (
            <Link href={item.route} key={item.label} className={cn()}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
