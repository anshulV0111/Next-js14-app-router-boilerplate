/* eslint-disable react/button-has-type */

'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function AccountTabs({
  text,
  value,
  accountTabsButton,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const matchTab = () => {
    const pathSegments = pathname.toLowerCase().split('/');
    return pathSegments.includes(value.toLowerCase());
  };

  return (
    <button
      className={`${accountTabsButton} account-tab-btn ${matchTab() ? 'account-tab-btn-active' : ''}`
        || ''}
      onClick={() => {
        router.push(value);
      }}
    >
      {text}
    </button>
  );
}
