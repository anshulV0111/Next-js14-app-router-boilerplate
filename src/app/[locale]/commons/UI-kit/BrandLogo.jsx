'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ApplicationLogo({ redirectLink, brandLogoClass }) {
  const router = useRouter();

  return (
    <div
      className={`${brandLogoClass} brand-logo-box`}
      onClick={() => router.push(redirectLink)}
    >
      <Image
        width={10000}
        height={10000}
        src="/assets/layout2/images/logo/brand-logo.svg"
        alt="Brand Logo"
      />
    </div>
  );
}
