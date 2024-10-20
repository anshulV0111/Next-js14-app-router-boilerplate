/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import './CustomGameCardStyle.scss';
import PlayIcon from '@/shared/Icons/layout1/Icons/iconComponents/Play';
import CasinoGameImage from './CasinoGameImage';
import imgUrl from '../../../../../public/assets/images/homePage/ProductFullbackImage.jpg';

function getValidIconUrl(iconUrl) {
  // If iconUrl contains an opening bracket without closing, we clean it up
  if (typeof iconUrl === 'string' && iconUrl.startsWith('["')) {
    // Remove opening and any stray closing brackets or spaces
    const updatedIconUrl = iconUrl.replace(/[\\[\]"]+/g, '');
    return updatedIconUrl;
  }

  // Check if iconUrl is an array and use the first element if it is
  if (Array.isArray(iconUrl)) {
    return iconUrl[0]; // Return the first element of the array
  }

  // Check if iconUrl is a valid string starting with 'https://'
  if (typeof iconUrl === 'string' && iconUrl.startsWith('https://')) {
    return iconUrl; // Return the valid string
  }

  // Fallback if iconUrl is invalid
  return imgUrl; // Provide a fallback image
}

export default function CardContent({
  iconUrl,
  onGameClick,
  title,
  price,
  // handleFavouriteGame,
  // casinoGameId,
  // id,
  // isFavorite,
}) {
  const validIconUrl = getValidIconUrl(iconUrl);
  return (
    <div>
      <div className="game-card">
        <div className="game-card-body">
          <div className="game-img-wrap">
            <Image
              width={10000}
              height={10000}
              src={validIconUrl}
              alt="Image"
              key={iconUrl}
              className="blured-bg-img"
            />
            <div className="game-img-box">
              <CasinoGameImage
                src={validIconUrl || imgUrl}
                alt="image"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="!static h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="game-card-overlay">
          {/* <CustomButton
          onClick={() => handleFavouriteGame(casinoGameId || id)}
          defaultButtonStyle="base-btn default-btn only-icon favorite-btn"
        >
          {isFavorite ? <HeartFillIcon /> : <HeartStrokeIcon />}
        </CustomButton> */}

          <button type="button" className="play-btn" onClick={onGameClick}>
            <PlayIcon />
          </button>
        </div>
      </div>
      <div>
        <p style={{ fontSize: 12, color: 'white' }}>{title}</p>
        <p style={{ fontSize: 12, color: 'white' }}>
          $
          {' '}
          {price}
        </p>
      </div>
    </div>
  );
}
