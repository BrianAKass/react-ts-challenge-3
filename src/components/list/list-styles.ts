import { makeStyles } from '@material-ui/core';


export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    
  },
  topButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap:"wrap",
    alignItems: 'center',
    width: 320,
  },
  card:{
    margin: theme.spacing(1, 0),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    width: 320,
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