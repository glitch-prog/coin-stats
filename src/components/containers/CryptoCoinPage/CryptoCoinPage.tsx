import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';
import CryptoCoinPageView from '../../views/CryptoCoinPage/CryptoCoinPage';
import { HeaderView } from '../../views/Header/Header';

const defaultId = 'bitcoin';

export const CryptoCoinPageContainer = () => {
  const [history, setHistory] = useState();

  const coin = useAppSelector((state) => state.chosenCoin.coin);
  const COIN_HISTORY_URL = `https://api.coingecko.com/api/v3/coins/${
    coin.id || defaultId
  }/market_chart?vs_currency=usd&days=30`;

  const fetchHistory = async () => {
    const response = await axios.get(COIN_HISTORY_URL);

    const data = response.data;
    console.log(data);
    setHistory(data);
  };

  useEffect(() => {
    // fetchHistory();
  }, []);

  return (
    <>
      <HeaderView />
      <CryptoCoinPageView coin={coin} />;
    </>
  );
};
