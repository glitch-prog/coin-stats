import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { setSearchCoin } from '../../../redux/slices/searchSlice';
import { SearchInputView } from '../../views/SearchInput/SearchInput';

export const SearchInputContainer = () => {
  const dispatch = useAppDispatch();

  const handleOnChangeSort = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchCoin(e.target.value.toLowerCase()));
    console.log(e.target.value.toLowerCase());
  };
  return (
    <>
      <SearchInputView handleOnChangeSort={handleOnChangeSort} />
    </>
  );
};
