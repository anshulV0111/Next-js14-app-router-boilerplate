'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

export default function NavItem({ icon, label, href }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const categoryParams = params.get('category');

  const getIfActive = () => {
    if (label === 'Home' && pathname === '/layout2') {
      return true;
    } if (label === 'Casino' && pathname === '/layout2/casino' && !categoryParams) {
      return true;
    } if (label === 'Favorites' && categoryParams?.includes('Favorites')) {
      return true;
    }
    return false;
  };
  return (
    <li>
      <Link href={href} className={`nav-link ${getIfActive() ? 'active' : ''}`}>
        <span className="icon-box">
          {icon}
        </span>
        <span className="text">{label}</span>
      </Link>
    </li>

  );
}
