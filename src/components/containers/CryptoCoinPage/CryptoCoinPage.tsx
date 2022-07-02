import React from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';
import CryptoCoinPageView from '../../views/CryptoCoinPage/CryptoCoinPage';

export const CryptoCoinPageContainer = () => {
  const coin = useAppSelector((state) => state.chosenCoin.coin);

  return <CryptoCoinPageView coin={coin} />;
};
