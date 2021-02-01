import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './context/context'
import './index.css';
import App from './App';
import './assets/fonts/DejaVuSansMono.ttf';
import { SpeechProvider } from '@speechly/react-client'

ReactDOM.render(
  <SpeechProvider appId="19de46da-14fc-412a-b1ae-1db9d21d8d99" language="en-US">
      <Provider>
        <App />
      </Provider>
  </SpeechProvider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
