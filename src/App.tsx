import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CryproInfoPageContainer } from './components/containers/CryptoInfoPage/CryproInfoPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CryproInfoPageContainer />} />
        {/* <Route path='about' element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
