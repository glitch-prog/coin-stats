import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchHistory } from '../../../redux/slices/coinSlice';
import CryptoCoinPageView from '../../views/CryptoCoinPage/CryptoCoinPage';
import { HeaderView } from '../../views/Header/Header';

const defaultId = 'bitcoin';

export const CryptoCoinPageContainer = () => {
  const [prices, setPrices] = useState();
  const dispatch = useAppDispatch();

  const coin = useAppSelector((state) => state.chosenCoin.coin);

  useEffect(() => {
    // setPrices(history.prices);
    dispatch(fetchHistory());
  }, []);

  return (
    <>
      <HeaderView />
      <CryptoCoinPageView coin={coin} />;
    </>
  );
};
