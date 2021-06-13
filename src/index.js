import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './context/context'
import './index.css';
import App from './App';
import './assets/fonts/DejaVuSansMono.ttf';
import { SpeechProvider } from '@speechly/react-client'

const appId = "19de46da-14fc-412a-b1ae-1db9d21d8d99"

ReactDOM.render(
  <SpeechProvider appId={appId} language="en-US">
      <Provider>
        <App />
      </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
