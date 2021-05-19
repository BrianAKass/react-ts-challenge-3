import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 320,
  },
  textarea: {
    padding: theme.spacing(1),
  },
  cardActions: {
    padding: theme.spacing(1, 2, 2, 2),
  },
  button: {
    alignSelf: 'flex-end',
  },
}));
