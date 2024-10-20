'use client';

import React, { Suspense, useState } from 'react';
import './SearchWidgetStyle.scss';
import SearchIcon from '@/shared/Icons/layout1/Icons/iconComponents/Search';
import CloseXIcon from '@/shared/Icons/layout1/Icons/iconComponents/Close-X';
// import { useRouter } from 'next/navigation';
import CustomButton from '../../UI-kit/CustomButton/CustomButton';
import Search from '../../UI-kit/Search';

export default function SearchWidget() {
  const [isVisible, setIsVisible] = useState(false);
  // const router = useRouter();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    // router.push('/layout2/casino');
  };

  return (
    <>
      <CustomButton
        defaultButtonStyle="base-btn default-btn only-icon"
        icon={<SearchIcon />}
        onClick={toggleVisibility}
      />

      <section
        className={`search-widget-section ${
          isVisible ? 'show-search-widget' : ''
        }`}
      >
        <div className="search-widget-wrap">
          <Suspense>
            <Search />
          </Suspense>

          <CustomButton
            defaultButtonStyle="base-btn default-btn only-icon"
            icon={<CloseXIcon />}
            onClick={toggleVisibility}
          />
        </div>
      </section>
    </>
  );
}
