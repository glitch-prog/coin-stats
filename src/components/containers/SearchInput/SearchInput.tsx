import React, { ChangeEvent, useState } from 'react';
import { SearchInputView } from '../../views/SearchInput/SearchInput';

export const SearchInputContainer = () => {
  const [searchText, setSearchText] = useState<string>();

  const handleOnChangeSort = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };
  return (
    <>
      <SearchInputView handleOnChangeSort={handleOnChangeSort} />
    </>
  );
};
