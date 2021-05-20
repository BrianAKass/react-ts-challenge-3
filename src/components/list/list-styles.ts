import { makeStyles } from '@material-ui/core';


export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    msOverflowStyle: 'none', /* IE and Edge */
    scrollbarWidth: 'none', /* Firefox */
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
    minHeight:'fit-content',
    flex:'1 0 fit-content',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    width: 320,
    minHeight:'fit-content'
  },
  textarea: {
    padding: theme.spacing(1),
  },
  cardActions: {
    padding: theme.spacing(1, 2, 2, 2),
    minHeight:'fit-content'
  },
  button: {
    alignSelf: 'flex-end',
  },
}));