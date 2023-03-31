import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: {
    minHeight: 126,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      minHeight: 120,
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: 120,
    },
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));