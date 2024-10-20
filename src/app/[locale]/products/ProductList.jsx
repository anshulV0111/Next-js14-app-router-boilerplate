'use client';

import { SKELETON_CARD_COUNT_PRODUCT } from '@/constants';
import { getScreenSize } from '@/helpers/custom.helpers';
import useProductList from '@/hooks/product/useProductList';
import NoDataFound from '../commons/UI-kit/NoDataFound';
import CustomSkeleton from '../commons/UI-kit/CustomLoader';
import CustomButton from '../commons/UI-kit/CustomButton/CustomButton';
import Card from '../commons/CustomCard';

export default function ProductList({ initialData, searchParams }) {
  const {
    games, loadMoreGames, count, gamesLoading, t, onViewRedirect,
  } = useProductList({
    initialData, searchParams, layoutPath: 'layout1',
  });

  // const cardColCount = SKELETON_CARD_COUNT_PRODUCT?.[getScreenSize()];

  if (!games?.length) {
    return (
      <div className="w-full mt-10 mb-10 flex justify-center">
        <h1><NoDataFound /></h1>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(10%,_1fr))] max-sm:grid-cols-[repeat(auto-fill,_minmax(31%,_1fr))] max-md:grid-cols-[repeat(auto-fill,_minmax(21%,_1fr))] max-2md:grid-cols-[repeat(auto-fill,_minmax(18%,_1fr))] gap-y-[18px] gap-x-[12px] items-stretch ">
        {games?.map((item, i) => (
          <Card
            key={item.id}
            id={item.id}
            isFavorite={false}
            title={item?.title}
            price={item?.price}
            iconUrl={item?.images[0]}
            altImgUrl={item?.images[1] ? item?.images[1] : ''}
            onGameClick={() => onViewRedirect(item)}
            handleFavouriteGame={() => {}}
            casinoGameId={item.id}
            index={i}
            t={t}
          />
        ))}
      </div>

      {games?.length < count && (
        gamesLoading
          ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-4">
              <CustomSkeleton type="card" count={SKELETON_CARD_COUNT_PRODUCT?.[getScreenSize()]} />
            </div>
          )
          : (
            <div className="flex justify-center mt-8 mb-4">
              <CustomButton
                type="custom"
                onClick={loadMoreGames}
                customComponent={(
                  <div>
                    {t('loadMore')}
                  </div>
                )}
                defaultbuttonStyle="bg-arcCustomButton shadow-custom-inset hover:bg-gradient-button text-gray-800 hover:text-black font-bold py-2 px-4 rounded"
              />
            </div>
          )
      )}
    </>
  );
}
