import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 13em;
  width: 300px;
  padding: 20px;
  border: 1px solid #ffffff;
  border-radius: 20px;
`;

const ConverterTitle = styled.h3`
  color: #ffffff;
`;

export const CryptoConverterView = ({
  coin,
  usd,
  handleOnChangeConvertToUSD,
  handleOnChangeConvertToCoin,
}: any) => {
  return (
    <Container>
      <ConverterTitle>Converter</ConverterTitle>
      <TextField
        id='standard-basic'
        label='Crypto'
        variant='outlined'
        sx={{ marginBottom: '10px' }}
        value={coin}
        onChange={(e) => handleOnChangeConvertToUSD(e)}
      />
      <TextField
        id='standard-basic'
        label='USD'
        variant='outlined'
        value={usd}
        onChange={(e) => handleOnChangeConvertToCoin(e)}
      />
    </Container>
  );
};
