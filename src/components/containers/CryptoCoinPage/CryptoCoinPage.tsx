import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { setFavoriteCoin } from '../../../redux/slices/favoritesSlice';
import CryptoCoinPageView from '../../views/CryptoCoinPage/CryptoCoinPage';
import { HeaderView } from '../../views/Header/Header';
import { ICoin } from '../CryptoInfoPage/CryptoInfoPage.interface';

export const CryptoCoinPageContainer = () => {
  const dispatch = useAppDispatch();

  const coin = useAppSelector((state) => state.chosenCoin.coin);

  const handleOnClickAddToFavorites = (el: any) => {
    dispatch(setFavoriteCoin(el));
  };

  return (
    <>
      <HeaderView />
      <CryptoCoinPageView
        coin={coin}
        handleOnClickAddToFavorites={handleOnClickAddToFavorites}
      />
      ;
    </>
  );
};
