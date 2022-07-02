import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import styles from './CryproInfoPage.module.css';

export const CryproInfoPageView = ({
  data,
  handleOnClickListItemPage,
}: any) => {
  return (
    <>
      <div className={styles.cryptoInfoTable}>
        {data.map((el: any) => (
          <>
            <List
              sx={{
                width: '100%',
                maxWidth: '300px',
                bgcolor: 'background.paper',
              }}
            >
              <ListItem
                alignItems='center'
                onClick={() => handleOnClickListItemPage(el)}
              >
                <ListItemAvatar>
                  <Avatar
                    alt='Remy Sharp'
                    src={el.image}
                    sx={{ width: 56, height: 56, marginRight: '20px' }}
                  />
                </ListItemAvatar>
                <ListItemText>{el.name}</ListItemText>
              </ListItem>
              <Divider variant='fullWidth' component='li' />
            </List>
          </>
        ))}
      </div>
    </>
  );
};
