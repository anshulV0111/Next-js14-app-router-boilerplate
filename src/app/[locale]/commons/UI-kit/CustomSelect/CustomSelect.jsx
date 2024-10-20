'use client';

import { memo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function CustomSelect({
  type,
  label,
  menuList,
  menuKey,
  isOpen,
  setIsOpen,
  onMenuLabel,
  onToggle,
  onMenuClick,
  containerStyle,
  selectStyle,
  menuContainerStyle,
  menuButtonStyle,
  menuHeader,
  menuSelections,
  handleSelectionClear,
  handleClearAll,
  icon,
}) {
  const menuRef = useRef(null);
  const { t } = useTranslation();
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      if (setIsOpen) setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  switch (type) {
    case 'multiSelect': {
      return (
        <div
          className={containerStyle || 'relative inline-block text-left'}
          key={Math.random()}
        >
          <div
            className={
              selectStyle
              || 'flex items-center gap-2 justify-center w-full rounded-md border border-slate-600 shadow-sm px-4 py-2 bg-slate-800 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500'
            }
          >
            {menuSelections?.length ? (
              <div className="flex flex-nowrap gap-2 w-[90%] overflow-x-auto providerSelection">
                <div className="flex items-center gap-4">
                  {menuSelections?.map((selection, index) => (
                    <div
                      key={`${selection?.id}`}
                      className="flex items-center dark:bg-arcTabsBackground bg-yellowIshFilter text-lightModeBlack dark:text-lightWhite rounded-md w-fit px-2 py-1"
                    >
                      <label onClick={onToggle} className="whitespace-nowrap">
                        {onMenuLabel(selection)}
                      </label>
                      {/* need change the structure */}
                      <button
                        type="button"
                        className="ml-2 text-white"
                        onClick={() => handleSelectionClear(selection, index)}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {t('clear')}
                          <path
                            d="M6 18L18 6M6 6l12 12"
                            stroke="#ffffff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                {/* need change the structure */}
                <i
                  type="button"
                  onClick={handleClearAll}
                  className="flex items-center dark:text-white rounded-md px-2 py-1 ml-2 cursor-pointer hover:opacity-80"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {t('clearAll')}
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
            ) : (
              <div className="cursor-pointer text-gray-400 " onClick={onToggle}>
                {label}
              </div>
            )}
            <button type="button" onClick={onToggle}>
              <svg
                className="-mr-1 ml-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                {t('arrowDown')}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <motion.div
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={
                isOpen
                  ? { width: '100%', height: '500px', opacity: 1 }
                  : { width: 0, height: 0, opacity: 0 }
              }
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className={
                menuContainerStyle
                || 'origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none'
              }
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              ref={type ? menuRef : ''}
            >
              <ul>
                {menuList?.map((menu, i) => (
                  <motion.list
                    initial={{ opacity: 0, scale: 0.3, x: -50 }}
                    animate={
                      isOpen
                        ? { opacity: 1, scale: 1, x: 0 }
                        : { opacity: 0, scale: 0.3, x: -50 }
                    }
                    transition={{
                      duration: 0.2,
                      delay: isOpen ? i * 0.1 : 0, // use the index to create a staggered effect
                    }}
                    whileHover={{
                      backgroundColor: 'rgb(46, 48, 53)',
                    }}
                    key={menu[menuKey]}
                    onClick={() => onMenuClick(menu, i)}
                  >
                    <label className="flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors dark:hover:bg-arcSidebarButtonHoverColor hover:bg-yellowIshFilter [&:has(input:checked)]:bg-blue-200">
                      <span className="ml-1">{onMenuLabel(menu)}</span>
                    </label>
                  </motion.list>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      );
    }

    default: {
      return (
        <div
          className={containerStyle || 'relative inline-block text-left'}
          key={Math.random()}
        >
          <button
            type="button"
            className={
              selectStyle
              || 'flex justify-center items-center gap-1 border-slate-600 shadow-sm  dark:bg-arcHeaderBackground bg-yellowIshFilter text-sm font-medium dark:text-white text-lightModeBlack hover:arcHeaderBackground focus:outline-none'
            }
            onClick={onToggle}
          >
            {icon}
            <span
              className="text-base font-medium max-md:hidden"
              style={{ color: '#fff' }}
            >
              {label}
            </span>

            <svg
              className={`h-4 w-4 text-[#5C5C5C] ${
                isOpen ? 'rotate-180' : ''
              } max-2md:ml-[8px]`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isOpen && (
            <div
              className={
                menuContainerStyle
                || 'origin-top-right absolute right-0 w-fit rounded-md shadow-lg dark:bg-arcCustomBackground bg-grayBackground ring-1 ring-black ring-opacity-5 focus:outline-none'
              }
              ref={type ? '' : menuRef}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              style={{
                backgroundColor: 'rgba(30, 32, 36)',
              }}
            >
              <motion.div
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={
                  isOpen
                    ? { width: 'auto', height: 'auto', opacity: 1 }
                    : { width: 0, height: 0, opacity: 0 }
                }
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                className="py-1"
                role="none"
              >
                {menuHeader}
                {menuList.map((menu, i) => (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.3, x: -50 }}
                    animate={
                      isOpen
                        ? { opacity: 1, scale: 1, x: 0 }
                        : { opacity: 0, scale: 0.3, x: -50 }
                    }
                    transition={{
                      duration: 0.2,
                      delay: isOpen ? i * 0.1 : 0, // use the index to create a staggered effect
                    }}
                    className={
                      menuButtonStyle
                      || 'flex mx-2 justify-start text-start text-white w-[-webkit-fill-available] px-4 py-2 text-sm bg-arcCustomBackground hover:bg-arcSidebarButtonHoverColor focus:outline-none max-2md:m-0'
                    }
                    whileHover={{
                      backgroundColor: 'rgb(46, 48, 53)',
                    }}
                    type="button"
                    key={menu[menuKey]}
                    onClick={() => onMenuClick(menu)}
                    role="menuitem"
                  >
                    {onMenuLabel(menu)}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      );
    }
  }
}

export default memo(CustomSelect);
