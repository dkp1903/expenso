import React, { useRef, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui'
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles'
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box'
import { SpeechState, useSpeechContext } from '@speechly/react-client'
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
  const { speechState } = useSpeechContext() 
  const main = useRef(null)
  const executeScroll = () => main.current.scrollIntoView()
  

  useEffect(() => {
      if(speechState === SpeechState.Recording)
          executeScroll()
  }, [speechState])
  return (
    <ThemeProvider theme={theme}>
    <div >
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
        
          <Grid item xs={12} sm={4} style={{boxShadow: '10px 5px 5px gray', borderRadius: '15px'}} className={classes.mobile}>
            <Details title="Income" />
          </Grid>
        
        <Grid ref={main} item xs={12} sm={3} borderRadius="50%"  style={{boxShadow: '5px 5px 5px gray', borderRadius: '15px'}} className={classes.main}>
         <Main />
        </Grid>
        <Grid item xs={12} sm={4} style={{boxShadow: '10px 5px 5px gray', borderRadius: '15px'}} className={classes.desktop}>
            <Details title="Income" />
          </Grid>
        <Grid item xs={12} sm={4} borderRadius="50%"  style={{boxShadow: '10px 5px 5px gray', borderRadius: '15px'}} className={classes.last}>
          <Details title="Expense"/>
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
    </ThemeProvider>
  )
}

export default App
