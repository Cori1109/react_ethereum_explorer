import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
  btn_progress: {
    '& .MuiButton-label': {
        textTransform: 'none',
        fontSize: '0.9375em',
    },
    '&:hover': {
        backgroundColor: theme.palette.blue
    },
    fontWeight: '300',
    backgroundColor: theme.palette.blue,
    color: theme.palette.black_white,
    width: '100%',
    height: '100%',
    lineHeight: '1',
    padding: '10px',
  },
}));

export default useStyles;
