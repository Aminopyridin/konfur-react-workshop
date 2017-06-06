import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDom.render(
    <App />,
    document.getElementById("app"));
