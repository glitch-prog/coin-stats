import axios from 'axios';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchCoins } from '../../../redux/slices/cryptoSlice';
import { CryproInfoPageView } from '../../views/CryptoInfoPage/CryproInfoPage';
import { useNavigate } from 'react-router-dom';
import { setChosenCoin } from '../../../redux/slices/coinSlice';
import { HeaderView } from '../../views/Header/Header';
import { elementAcceptingRef } from '@mui/utils';

export const CryproInfoPageContainer = () => {
  const navigate = useNavigate();
  const coins = useAppSelector((state) => state.coins.coins);
  const dispatch = useAppDispatch();

  const handleOnClickListItemPage = (name: string) => {
    navigate('/coin__page');
    const el = coins.find((elem: { name: string }) => elem.name === name);
    dispatch(setChosenCoin(el));
  };

  const createInterval = useCallback((cb: () => void, time: number) => {
    const timer = setInterval(cb, time);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = createInterval(() => dispatch(fetchCoins()), 50000);
    dispatch(fetchCoins());
    return () => unsubscribe();
  }, []);

  return (
    <>
      <HeaderView />
      <CryproInfoPageView
        data={coins}
        handleOnClickListItemPage={handleOnClickListItemPage}
      />
    </>
  );
};
