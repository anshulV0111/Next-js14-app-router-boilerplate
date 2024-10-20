import React, { Suspense } from 'react';
import CasinoIcon from '@/shared/Icons/layout1/Icons/iconComponents/Casino';
import HomeIconIcon from '@/shared/Icons/layout1/Icons/iconComponents/HomeIconIcon';
import SlideAnimation from './SlideAnimation';
import NavItem from './NavItem';

async function Sidebar() {
  return (
    <Suspense>
      <SlideAnimation>
        <section className="sidebar-section">
          <ul>
            <NavItem
              icon={<HomeIconIcon />}
              href="/"
              label="Home"
            />
            <NavItem
              icon={<CasinoIcon />}
              href="/products"
              label="Products"
            />
          </ul>

          <hr className="horizontal-line" />

          {/* <ul>
          <NavItem
            href="/layout2/casino?category=Favorites"
            icon={<HeartFillIcon />}
            label="Favorites"
          />

          <li>
            <Link href="/layout2/account/wallet/transactions" className="nav-link">
              <span className="icon-box">
                <TransactionsIcon />
              </span>
              <span className="text">Transactions</span>
            </Link>
          </li>
        </ul> */}
        </section>
      </SlideAnimation>
    </Suspense>
  );
}

export default Sidebar;
