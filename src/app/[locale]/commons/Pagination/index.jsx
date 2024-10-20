/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/prefer-default-export */

'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import './PaginationStyle.scss';
import ChevronLeftIcon from '@/shared/Icons/layout1/Icons/iconComponents/Chevron-Left';
import ChevronRightIcon from '@/shared/Icons/layout1/Icons/iconComponents/Chevron-Right';

export function PaginationComponent({ pageCount }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const router = useRouter();
  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const getPaginationButtons = () => {
    const buttons = [];
    const maxVisible = 5; // Number of visible buttons

    if (pageCount <= maxVisible) {
      // If the number of pages is less than or equal to maxVisible, show all pages
      for (let i = 1; i <= pageCount; i += 1) {
        buttons.push(i);
      }
    } else {
      // Show first page, current page, last page, and ellipses
      buttons.push(1);

      if (currentPage > 3) {
        buttons.push('...');
      }

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(pageCount - 1, currentPage + 1);
        i += 1
      ) {
        buttons.push(i);
      }

      if (currentPage < pageCount - 2) {
        buttons.push('...');
      }

      buttons.push(pageCount);
    }

    return buttons;
  };

  const handlePageChange = (page) => {
    router.push(createPageURL(page), { replace: true, scroll: false });
  };

  return (
    <div className="pagination-wrap">
      <div className="pagination-box">
        <button
          type="button"
          onClick={
            () => router.push(createPageURL(currentPage - 1), { replace: true, scroll: false })
          }
          disabled={currentPage <= 1}
          className="pagination-btn only-icon"
        >
          <ChevronLeftIcon />
        </button>
        {getPaginationButtons().map((button) => (
          <button
            key={button}
            type="button"
            onClick={() => handlePageChange(button)}
            className={`pagination-btn ${currentPage === button ? 'active' : ''} font-bold py-2 px-4 rounded mr-2`}
            disabled={button === '...'}
          >
            {button}
          </button>
        ))}

        <button
          type="button"
          onClick={
            () => router.push(createPageURL(currentPage + 1), { replace: true, scroll: false })
          }
          disabled={currentPage >= pageCount}
          className="pagination-btn only-icon"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
