import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchCoins } from '../../../redux/slices/cryptoSlice';
import { CryproInfoPageView } from '../../views/CryptoInfoPage/CryproInfoPage';
import { useNavigate } from 'react-router-dom';
import { setChosenCoin } from '../../../redux/slices/coinSlice';

export const CryproInfoPageContainer = () => {
  const navigate = useNavigate();
  const coins = useAppSelector((state) => state.coins.coins);
  const dispatch = useAppDispatch();
  // const getCoinsArr = async () => {
  //   const responese = await axios.get(
  //     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline3=false'
  //   );
  //   console.log(responese.data);
  // };

  const handleOnClickListItemPage = (el: any) => {
    navigate('/coin__page');
    dispatch(setChosenCoin(el));
  };

  const createInterval = useCallback((cb: any, time: any) => {
    const timer = setInterval(cb, time);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = createInterval(() => dispatch(fetchCoins()), 50000);
    dispatch(fetchCoins());
    return () => unsubscribe();
  }, []);

  return (
    <CryproInfoPageView
      data={coins}
      handleOnClickListItemPage={handleOnClickListItemPage}
    />
  );
};
