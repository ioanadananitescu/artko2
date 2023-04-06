import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({


  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: (theme) => theme.drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none"
    }
  },
  drawerPaper: {
    width: (theme) => theme.drawerWidth,
    
  },


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
    minWidth: (theme) => theme.drawerWidth,
    marginLeft: (theme) => 0, 
   
  },

  contentShift: {
    
    minWidth: (theme) => theme.drawerWidth,
    marginLeft: (theme) => theme.drawerWidth
  }, 

  root: {
    flexGrow: 1,
  },
}));