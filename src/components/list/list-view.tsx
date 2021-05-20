import { Box, IconButton, Card, CardActions, CardContent, Tooltip, Menu, MenuItem } from '@material-ui/core';
import { Sort, ChevronLeft } from '@material-ui/icons';
import useStyles from './list-styles';
import React from 'react';

export interface ListViewProps {
  test?: Array<Object>;
  handleBack: () => void;
  sortList: Function;
}

export const ListView = (props: ListViewProps) => {
  const { test, handleBack, sortList } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (x: string) => {
    sortList(x);
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.topButtons}>
        <Tooltip title="Back" placement="top">
          <IconButton onClick={handleBack}>
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
        <MenuItem onClick={() => handleClose('Position')}>Position</MenuItem>
        <MenuItem onClick={() => handleClose('Alphabetical')}>Alphabetical</MenuItem>
        <MenuItem onClick={() => handleClose('Records')}>Records</MenuItem>
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
