import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Auth0ProviderWithHistory>
        {/* // domain={process.env.REACT_APP_AUTH0_DOMAIN}
        // clientId={ process.env.REACT_APP_AUTH0_CLIENT_ID}
        // redirectUri={window.location.origin + "/callback"}> */}
        <App />
      </Auth0ProviderWithHistory>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);