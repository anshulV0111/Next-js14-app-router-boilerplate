'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { motion } from 'framer-motion';

export default function Search({ hide, searchMainContainer }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    // params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    !hide
      ? (
        <div className={searchMainContainer || 'search-bar max-w-[40%]'}>
          <motion.input
            style={{
              background:
                    'linear-gradient(to right, #fff -200%, #fff -100%, #fff 0%, #fff 100%))',
            }}
            whileFocus={{
              background: [
                'linear-gradient(to right, rgb(255 232 26 / var(--tw-bg-opacity)) -200%, #FF7A00 -100%, rgb(255 232 26 / var(--tw-bg-opacity)) 0%,   #FF7A00 100%)',
                'linear-gradient(to right, rgb(255 232 26 / var(--tw-bg-opacity)) -100%, #FF7A00 0%,    rgb(255 232 26 / var(--tw-bg-opacity)) 100%, #FF7A00 200%)',
                'linear-gradient(to right, rgb(255 232 26 / var(--tw-bg-opacity)) 0%,    #FF7A00 100%,  rgb(255 232 26 / var(--tw-bg-opacity)) 200%, #FF7A00 300%)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            type="text"
            placeholder="Search Prodcuts"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get('query')?.toString()}
            className="dark:bg-arcSidebarListBackground bg-grayBackground border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 h-12 dark:arcHeaderBackground dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      )
      : <></>
  );
}
