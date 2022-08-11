import React from 'react';
import { ChartContainer } from '../../containers/Chart/Chart';
import { CryptoConverterContainer } from '../../containers/CryptoConverter/CryptoConverter';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import { Button } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Container = styled.div`
  width: 1050px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
`;

const CryptoInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 40px;
`;

const CryptoImage = styled.img`
  width: 4em;
  height: 4em;
  margin-top: 0;
  margin-bottom: 0;
  margin: 10px;
`;

const PriceText = styled.p`
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 20px;
  font-size: 40px;
`;

const PercentageText = styled.p`
  color: #51ffcc;
  font-family: 'Open Sans', sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 20px;
  font-size: 20px;
`;

const PercentageTextNegative = styled.p`
  color: red;
  font-family: 'Open Sans', sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 20px;
  font-size: 20px;
`;

const Title = styled.h3`
  color: #ffffff;
  font-size: 2em;
  margin: 0;
`;

const ChartConverterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export default function CryptoCoinPageView({
  coin,
  handleOnClickAddToFavorites,
}: any) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Title>{coin.name}</Title>
        {/* 
        <Button variant='contained' disabled>
          Add to favorites
        </Button>
        <Button
          variant='contained'
          onClick={() => handleOnClickAddToFavorites(coin)}
        >
          Add to favrorites
        </Button> */}

        <CryptoInfoSection>
          <CryptoImage src={coin.image} alt='image not found' />
          <PriceText>${coin.current_price}</PriceText>
          {+coin.price_change_percentage_24h > 0 ? (
            <PercentageText>
              +{coin.price_change_percentage_24h}%
            </PercentageText>
          ) : (
            <PercentageTextNegative>
              {coin.price_change_percentage_24h}%
            </PercentageTextNegative>
          )}
        </CryptoInfoSection>
        <ChartConverterContainer>
          <ChartContainer />
          <CryptoConverterContainer />
        </ChartConverterContainer>
      </Container>
    </ThemeProvider>
  );
}
