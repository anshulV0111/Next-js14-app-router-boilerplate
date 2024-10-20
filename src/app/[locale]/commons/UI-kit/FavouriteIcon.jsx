import { memo } from 'react';

function FavouriteIcon({ fill }) {
  return (
    <div className="flex items-center justify-center w-[60px] h-[60px] bg-transparent rounded-full transition-transform duration-100 ease transform z-10 scale-75">
      <div
        className={`w-[100px] h-[100px] bg-[url('/assets/layout2/images/heart.png')] bg-left bg-no-repeat cursor-pointer absolute ${
          fill === 'red' ? 'animate-like' : ''
        }`}
        style={{ backgroundSize: 'cover', backgroundPositionX: '0px' }}
      />
    </div>
  );
}

export default memo(FavouriteIcon);
