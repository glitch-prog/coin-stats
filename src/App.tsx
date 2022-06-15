import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { fetchCoins } from './redux/slices/cryptoSlice';

function App() {
  const coins = useAppSelector((state) => state.coins);
  const [data, setData] = useState<any>();
  const dispatch = useAppDispatch();
  // const getCoinsArr = async () => {
  //   const responese = await axios.get(
  //     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline3=false'
  //   );
  //   console.log(responese.data);
  // };

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return <></>;
}

export default App;
