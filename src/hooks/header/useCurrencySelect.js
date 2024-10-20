import { postDefaultCurrencyAction } from '@/actions/auth.actions';
// import getSettingsDataAction, { getAllCurrenciesAction } from '@/actions/general.actions';

import { useAppSelector } from '@/redux/hooks';
// import {
//   setAllCurrenciesData, setSettingsData,
// } from '@/redux/slices/auth.slice';

import { useEffect, useMemo, useState } from 'react';

const useCurrencySelect = () => {
  // const dispatch = useAppDispatch();
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const { userData } = useAppSelector((state) => state.auth);

  const toggleCurrencyMenu = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  // const getSettingsData = async () => {
  //   try {
  //     const data = await getSettingsDataAction();
  //     const parsedData = JSON.parse(data);
  //     if (parsedData?.data) {
  //       dispatch(setSettingsData(parsedData?.data));
  //     }
  //   } catch (err) {
  //     console.log('err', err);
  //   }
  // };

  // const getAllCurrenciesData = async () => {
  //   try {
  //     const data = await getAllCurrenciesAction();
  //     if (data?.data && data?.data?.currencies?.length) {
  //       dispatch(setAllCurrenciesData(data?.data?.currencies));
  //     }
  //   } catch (err) {
  //     console.log('err', err);
  //   }
  // };

  const currencies = useMemo(() => (
    userData?.user?.wallets
      ? userData?.user?.wallets?.map((wallet) => ({
        code: wallet.currency.symbol,
        label: `${wallet.amount.toFixed(2)}`,
        value: wallet.id,
      })) : [{ code: '$', label: '$0.00' }]), [userData]);

  const onSelectCurrency = async (currency) => {
    const userCurrencyData = userData?.user?.wallets?.find(
      (item) => item?.currency?.isDefault === true,
    );

    if (userCurrencyData?.currency?.id !== currency.value) {
      const res = await postDefaultCurrencyAction({
        walletId: currency.value,
      });
      const paresdRes = JSON.parse(res);
      if (paresdRes?.data?.success) {
        setSelectedCurrency(currency);
      } else {
        console.log('something went wrong while selecting wallet');
      }
    }
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  useEffect(() => {
    if (userData) {
      const defaultCurrency = userData?.user?.wallets?.find(
        (def) => def.isDefault === true,
      );
      setSelectedCurrency(
        {
          code: defaultCurrency?.currency?.symbol,
          label: defaultCurrency?.amount.toFixed(2),
          value: defaultCurrency?.id,
        },
      );
    }
  }, [userData]);

  // useEffect(() => {
  //   getSettingsData();
  //   getAllCurrenciesData();
  // }, []);

  const onShowMenuLabel = (currency) => `${currency.code} ${currency.label}`;

  return {
    selectedCurrency,
    currencies,
    isCurrencyOpen,
    toggleCurrencyMenu,
    onSelectCurrency,
    onShowMenuLabel,
    setIsCurrencyOpen,
  };
};

export default useCurrencySelect;
