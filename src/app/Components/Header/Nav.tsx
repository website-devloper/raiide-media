'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { servicesData } from '../../data/services';

export default function Nav({ setMobileToggle }: any) {
  const pathname = usePathname();
  const services = Object.values(servicesData);

  const isActive = (href: string) => {
    if (href === '/home2') return pathname === '/' || pathname === '/home2';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMobile = () => setMobileToggle?.(false);

  return (
    <ul className="cs_nav_list fw-medium">
      <li className={isActive('/home2') ? 'current-menu-item' : ''}>
        <Link href="/home2" onClick={closeMobile}>
          Home
        </Link>
      </li>
      <li className={isActive('/about') ? 'current-menu-item' : ''}>
        <Link href="/about" onClick={closeMobile}>
          About
        </Link>
      </li>
      <li className={isActive('/service') ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
        <Link href="/service" onClick={closeMobile}>
          Services
        </Link>
        <ul className="sub-menu">
          {services.map((service) => (
            <li key={service.id}>
              <Link href={`/service/${service.id}`} onClick={closeMobile}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={isActive('/project') ? 'current-menu-item' : ''}>
        <Link href="/project" onClick={closeMobile}>
          Portfolio
        </Link>
      </li>
      <li className={isActive('/our-studios') ? 'current-menu-item' : ''}>
        <Link href="/our-studios" onClick={closeMobile}>
          Our Studios
        </Link>
      </li>
      <li className={isActive('/packs') ? 'current-menu-item' : ''}>
        <Link href="/packs" onClick={closeMobile}>
          Packs
        </Link>
      </li>
      <li className={isActive('/contact') ? 'current-menu-item' : ''}>
        <Link href="/contact" onClick={closeMobile}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
