import { useState } from 'react';
import Image from 'next/image';
import imgUrl from '../../../../../public/assets/images/homePage/ProductFullbackImage.jpg';

function FallbackImage({
  src, alt, defaultSrc, ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      {...props}
      onError={() => setImgSrc(imgUrl)}
    />
  );
}

export default FallbackImage;
