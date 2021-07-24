import { makeStyles } from '@material-ui/core/styles'

const buttonBasis = {
  background: '#DB0011',
  color: 'white',
  fontFamily: 'Helvetica',
  fontSize: '12pt',
  fontWeight: '700',
  letterSpacing: '1px',
  '&:hover': {
    color: '#ffffff',
    backgroundColor: '#14A5AB',
    textDecoration: 'none',
  },
}

const useStyles = makeStyles((theme) => ({
  paddingLow: {
    ...buttonBasis,
    padding: '14px 40px',
    [theme.breakpoints.down('xs')]: {
      padding: '10px 40px',
    },
  },
  paddingHigh: {
    ...buttonBasis,
    padding: '14px 90px',
    [theme.breakpoints.down('xs')]: {
      padding: '10px 40px',
    },
  },
}))

export default useStyles
