import { Box, IconButton, Card, CardActions, CardContent, Tooltip, Menu, MenuItem } from '@material-ui/core';
import { Sort, ChevronLeft } from '@material-ui/icons';
import useStyles from './list-styles';
import React, { useState } from 'react';

export interface ListViewProps {
  text: string;
  records: number;
  test?: Array<Object>;
  onSubmit: Function;
}

// const test = [
//   { text: 'This is a test.', records: 1 },
//   {
//     text: 'this is also a test of how long i can type in a given area without losing my sanity in the process.',
//     records: 2,
//   },
// ];

export const ListView = (props: ListViewProps) => {
  const { text, records, test, onSubmit } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.topButtons}>
        <Tooltip title="Back" placement="top">
          <IconButton onClick={onSubmit}>
            <ChevronLeft />
          </IconButton>
        </Tooltip>
        <Tooltip title="Sort" placement="top">
          <IconButton onClick={handleClick}>
            <Sort />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        keepMounted
        id="simple-menu"
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleClose}>Position</MenuItem>
        <MenuItem onClick={handleClose}>Alphabetical</MenuItem>
        <MenuItem onClick={handleClose}>Records</MenuItem>
      </Menu>

      {test?.map((item: any, index: number) => (
        <Card key={index} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <div className={classes.textarea}>{item.text}</div>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Box flex={1} />
            {item.records} records
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
