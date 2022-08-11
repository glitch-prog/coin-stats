import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { setFavoriteCoin } from '../../../redux/slices/favoritesSlice';
import { CryptoConverterView } from '../../views/CryptoConverter/CryptoConverter';

export const CryptoConverterContainer = () => {
  const [usd, setUsd] = useState<number>();
  const [coin, setCoin] = useState<number>();
  const chosenCoin = useAppSelector((state) => state.chosenCoin.coin);
  const coinPrice = chosenCoin.current_price;

  const handleOnChangeConvertToUSD = (event: ChangeEvent<HTMLInputElement>) => {
    const coinCount = +event.target.value;
    setCoin(coinCount);
    setUsd(coinPrice * coinCount);
  };

  const handleOnChangeConvertToCoin = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const usdCount = +event.target.value;
    if (!isNaN(usdCount)) {
      setUsd(usdCount);
      setCoin(usdCount / coinPrice);
    }
  };

  return (
    <CryptoConverterView
      coin={coin}
      usd={usd}
      handleOnChangeConvertToUSD={handleOnChangeConvertToUSD}
      handleOnChangeConvertToCoin={handleOnChangeConvertToCoin}
    />
  );
};
