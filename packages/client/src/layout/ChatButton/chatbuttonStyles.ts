/*
 * © 2021 Thoughtworks, Inc.
 */

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  chatbot: {
    backgroundImage: 'linear-gradient(#e8e8e8 0%, #d6d6d6 100%)',
    border: 'none',
    display: 'inline-block',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: 'bold',
    verticalAlign: 'middle',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.29)',
    borderRadius: '50%',
    borderBottom: 'solid 2px #b5b5b5',
    float: 'right',
    right: '0',
    margin: '10px',
    marginBottom: '15px',
    width: '50px',
    height: '50px',
    bottom: '0',
    position: 'fixed',
    transition: '.4s',
    '&.active': {
      backgroundImage: '-webkit-linear-gradient(#efefef 0%, #d6d6d6 100%)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
      borderBottom: 'solid 2px #b5b5b5',
    },
  },
  btn: {
    display: 'inline-block',
    position: 'relative',
    orderRadius: '50%',
    color: 'rgba(3, 169, 244, 0.54)',
    width: '60px',
    height: '60px',
    textAlign: 'center',
    background: '#f7f7f7',
    boxShadow: 'inset 0 0 4px rgba(0, 0, 0, 0.08)',
  },
  'material-icons': {
    color: 'lightblue',
    fontSize: '100px',
  },
}))

export default useStyles
