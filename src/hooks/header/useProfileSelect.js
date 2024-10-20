import getUserDataAction from '@/actions/auth.actions';
import { signOut } from '@/helpers/cookie.helpers';
import { clientSignOut } from '@/helpers/cookie.helpers.client';
import { chatLogout } from '@/helpers/custom.helpers';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  setAuthToken, setUserData,
} from '@/redux/slices/auth.slice';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useProfileSelect = ({ layoutPath, authToken }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { userData } = useAppSelector((state) => state.auth);

  const getUserData = async () => {
    try {
      const data = await getUserDataAction(authToken);
      const parsedData = JSON.parse(data);
      if (parsedData?.data) {
        dispatch(setUserData(parsedData?.data));
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const signout = async () => {
    try {
      await signOut();
      clientSignOut();
      dispatch(setAuthToken(''));
      if (window?.sbIframe) window?.sbIframe?.killIframeSession();
      chatLogout();
      router.push(`/${layoutPath}`);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const onProfileSelectClick = (path) => {
    router.push(path);
  };

  const profileItems = [
    { label: t('accountMenuProfile'), href: '#', onClick: () => { onProfileSelectClick(`/${layoutPath}/account/my-account/profile-details`); } },
    { label: t('transaction'), href: 'layout1/account/wallet/transactions', onClick: () => { onProfileSelectClick(`/${layoutPath}/account/wallet/transactions`); } },
    { label: t('withdraw'), href: '#', onClick: () => { onProfileSelectClick(`/${layoutPath}/account/wallet/withdraw`); } },
    { label: t('deposit'), href: '#', onClick: () => { onProfileSelectClick(`/${layoutPath}/account/wallet/deposit`); } },
    // { label: 'My Bonuses', href: '#', onClick: () => console.log('My Bonuses Clicked') },
    // { label: 'Q&A', href: '#', onClick: () => console.log('Q&A Clicked') },
    // { label: 'Sportsbook Transactions', href: '#',
    // onClick: () => console.log('Sportsbook Transactions Clicked') },
    { label: t('casinoTransactions'), href: '#', onClick: () => { onProfileSelectClick(`/${layoutPath}/account/wallet/casino-transactions`); } },
    // { label: 'Limit', href: '#', onClick: () => console.log('Limit Clicked') },
    { label: 'KYC', href: '#', onClick: () => { onProfileSelectClick(`/${layoutPath}/account/my-account/kyc`); } },
    // { label: 'Referrals', href: '#', onClick: () => console.log('Referrals Clicked') },
    { label: t('logout'), href: '#', onClick: signout },
  ];

  useEffect(() => {
    console.log('get user details');
    if (authToken) {
      console.log('get user details');

      getUserData();
    }
  }, [authToken]);

  return {
    userData,
    isProfileOpen,
    setIsProfileOpen,
    profileItems,
    t,
  };
};

export default useProfileSelect;
