import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },

  link: {
    fontWeight: '500',
    marginTop: 30,
  }
}));

export default useStyles;