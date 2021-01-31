import React from 'react'
import { Grid } from '@material-ui/core'
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles'
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Ubuntu Mono',
      'monospace',
    ].join(','),
  },});

const App = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
    <div >
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
        
          <Grid item xs={12} sm={4} style={{boxShadow: '10px 5px 5px gray', borderRadius: '15px'}}>
            <Details title="Income" />
          </Grid>
        
        <Grid item xs={12} sm={3} borderRadius="50%"  style={{boxShadow: '5px 5px 5px gray', borderRadius: '15px'}}>
         <Main />
        </Grid>
        <Grid item xs={12} sm={4} borderRadius="50%"  style={{boxShadow: '10px 5px 5px gray', borderRadius: '15px'}}>
          <Details title="Expense"/>
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  )
}

export default App
