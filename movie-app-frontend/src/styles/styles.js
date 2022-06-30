import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
    loginForm : {
      maxWidth : '400px',
      display : 'flex', 
      flexDirection : 'column', 
      alignItems : 'center', 
      justifyContent : 'center',
      padding : '50px',
      margin : 'auto', 
      marginTop : '70px',
      boxShadow : '10px 10px 20px #ccc',
      borderRadius : '5px'
    },
    submitForm : {
      maxWidth : '400px',
      display : 'flex', 
      flexDirection : 'column', 
      alignItems : 'center', 
      justifyContent : 'center',
      padding : '50px',
      margin : 'auto', 
      marginTop : '70px',
      boxShadow : '10px 10px 20px #ccc',
      borderRadius : '5px'
    }
  }))

export let appBar = {
    backgroundColor : '#1c1c1c'
}
export let headerMenu = {
  color : 'white'
}
export let headerButtons = {
 
  borderRadius : '3px'
}

