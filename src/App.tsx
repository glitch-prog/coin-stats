import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CryproInfoPageContainer } from './components/containers/CryptoInfoPage/CryproInfoPage';
import { CryptoCoinPageContainer } from './components/containers/CryptoCoinPage/CryptoCoinPage';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CryproInfoPageContainer />} />
        <Route path='/coin__page' element={<CryptoCoinPageContainer />} />
      </Routes>
    </>
  );
}

export default App;
