import Image from 'next/image';
import ContentLoaderIcon from '../../../../../public/assets/images/animation-loader-1.gif';

export default function Loading() {
  return (
    <div className="full-body-loader">
      <Image unoptimized src={ContentLoaderIcon} alt="the gif" height={800} width={800} />
      <span>LOADING...</span>
    </div>
  );
}
