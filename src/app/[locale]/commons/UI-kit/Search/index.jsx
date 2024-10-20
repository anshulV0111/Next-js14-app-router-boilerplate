'use client';

import './SearchStyle.scss';
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
  return !hide ? (
    <div className={searchMainContainer || 'search-bar-box'}>
      <motion.input
        type="text"
        placeholder="Search Prodcuts"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        className="search-input-field"
      />
    </div>
  ) : (
    <></>
  );
}
