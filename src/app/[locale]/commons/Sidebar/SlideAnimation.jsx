'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './SidebarStyle.scss';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import MenuArrowIcon from '@/shared/Icons/layout1/Icons/iconComponents/Menu-Arrow';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setIsSidebarOpen } from '@/redux/slices/general.slice';

export function Button({ label, className }) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        router.push('/layout2/casino');
      }}
      className={`${className}`}
    >
      {label}
    </button>
  );
}

export function SidebarIcon({ toggleOpenSidebar, isSidebarOpen }) {
  return (
    <div className={`sidebar-toggle-btn-box ${isSidebarOpen ? '' : 'sidebar-toggle-expand'}`}>
      <button type="button" className="sidebar-toggle-btn" onClick={toggleOpenSidebar}>
        <MenuArrowIcon />
      </button>
    </div>
  );
}

function SlideAnimation({ children }) {
  // const [isOpen, setIsOpen] = useState(true)

  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector((state) => state.general);

  const toggleOpenSidebar = () => {
    dispatch(setIsSidebarOpen(!isSidebarOpen));
  };

  return (
    <>
      <AnimatePresence>
        <SidebarIcon toggleOpenSidebar={toggleOpenSidebar} isSidebarOpen={isSidebarOpen} />
        <aside className={`${isSidebarOpen ? 'sidebar-expand' : ''}`}>
          {children}
        </aside>
      </AnimatePresence>
    </>
  );
}

export default SlideAnimation;
