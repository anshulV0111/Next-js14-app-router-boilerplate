import {
  useCallback, useEffect, useRef, useState,
  useTransition,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
// import { useAppSelector } from '@/redux/hooks';
// import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { PRODUCT_FETCH_COUNT } from '@/constants';
import { getProductListAction, revalidateAction } from '@/actions/product.actions';

const useProductList = ({
  initialData, searchParams, token, layoutPath,
}) => {
  const [page, setPage] = useState(1);
  const [games, setGames] = useState(initialData?.data);
  const [count, setCount] = useState(initialData?.count);
  const [gamesLoading, startTransition] = useTransition();
  const router = useRouter();
  // const { userData } = useAppSelector((state) => state.auth);
  const refFav = useRef();
  const pathname = usePathname();
  const { t } = useTranslation();
  const layoutPathName = pathname?.split('/')?.length <= 2 ? `${layoutPath}/` : '';

  useEffect(() => () => {
    if (refFav?.current) {
      revalidateAction(pathname);
    }
  }, []);

  const loadMoreGames = async () => startTransition(async () => {
    const apiGames = await getProductListAction(
      page + 1,
      PRODUCT_FETCH_COUNT,
      searchParams?.query,
    );
    if (apiGames?.data?.length) {
      setGames([...games, ...apiGames.data]);
      setCount(apiGames.count);
      setPage(page + 1);
    }
  });

  // const handleFavouriteGame = async (casinoGameId) => {
  //   if (!token) {
  //     router.push(`/${layoutPath}/login`);
  //   } else {
  //     const data = await favoriteGameAction({
  //       casinoGameId,
  //       userId: userData?.user?.id,
  //     });
  //     const parsedData = JSON.parse(data);
  //     if (parsedData?.data?.success) {
  //       let updatedData = [];
  //       const gamesClone = _.cloneDeep(games);
  //       if (gamesClone.length && gamesClone[0].casinoGameId) {
  //         updatedData = gamesClone.filter((item) => item.casinoGameId !== casinoGameId);
  //         setCount(count - 1);
  //       } else {
  //         updatedData = gamesClone.map((item) => {
  //           if (!item?.casinoGameId && item.id === casinoGameId) {
  //             return {
  //               ...item,
  //               isFavorite: !item.isFavorite,
  //             };
  //           }
  //           return item;
  //         });
  //       }

  //       setGames(updatedData);
  //       console.log('added');
  //       refFav.current = true;
  //     // }
  //     } else {
  //       console.log('something went wrong!');
  //     }
  //   }
  //   // console.log('data',)
  // };

  const onGamePlayRedirect = useCallback(
    (gme) => {
      if (token) {
        if (gme?.casinoProviderId && gme.uniqueId) router.push(`${layoutPathName}play-casino/${gme.uniqueId}/${gme.casinoProviderId}/${gme?.name?.EN}/${gme.demoAvailable}`);
        else router.push(`${layoutPathName}play-casino/${gme?.casinoGame?.uniqueId}/${gme?.casinoGame?.casinoProviderId}/${gme?.casinoGame?.name?.EN}/${gme?.casinoGame?.demoAvailable}`);
      } else {
        router.push(`/${layoutPath}/login`);
      }
    },
    [token],
  );

  const onViewRedirect = (gme) => {
    router.push(`/view-product/${gme.id}`);
  };

  return {
    loadMoreGames,
    onGamePlayRedirect,
    games,
    // handleFavouriteGame,
    onViewRedirect,
    count,
    gamesLoading,
    t,
  };
};

export default useProductList;
