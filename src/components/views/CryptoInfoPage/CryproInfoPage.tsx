import styles from './CryproInfoPage.module.css';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { SearchInputContainer } from '../../containers/SearchInput/SearchInput';
import { Column } from './CryptoInfoPage.interface';
import { Data } from './CryptoInfoPage.interface';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { createTheme, ThemeProvider } from '@mui/material';
import '../../../fonts/fonts.css';

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'current_price', label: 'Current price', minWidth: 100 },
  {
    id: 'market_cap',
    label: 'Market cap',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'market_cap_rank',
    label: 'Market cap rank',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

function createData(
  name: string,
  current_price: string,
  market_cap: number,
  market_cap_rank: number
): Data {
  return { name, current_price, market_cap, market_cap_rank };
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const CryproInfoPageView = ({
  data,
  handleOnClickListItemPage,
}: any) => {
  const rows = data.map((el: any) =>
    createData(el.name, el.current_price, el.market_cap, el.market_cap_rank)
  );

  const coins = useAppSelector((state) => state.coins.coins);
  console.log(rows);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={styles.table__container}>
        {coins.length ? (
          <>
            <SearchInputContainer />
            <Paper
              sx={{
                width: '80%',
                overflow: 'hidden',
              }}
            >
              <TableContainer sx={{ maxHeight: 710 }}>
                <Table stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          className='bhu'
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                            backgroundColor: '#111C44',
                            color: '#ffffff',
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row: any) => {
                        return (
                          <TableRow
                            onClick={() => handleOnClickListItemPage(row.name)}
                            hover
                            role='checkbox'
                            tabIndex={-1}
                            key={row.name}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  className='open__sans'
                                  key={column.id}
                                  align={column.align}
                                  sx={{
                                    backgroundColor: '#1B254B',
                                    color: '#ffffff',
                                  }}
                                >
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ backgroundColor: '#1B254B', color: '#ffffff' }}
              />
            </Paper>
          </>
        ) : (
          <p>failed to load</p>
        )}{' '}
      </div>
    </ThemeProvider>
  );
};
