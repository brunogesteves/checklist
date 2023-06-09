import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { App } from './Pages/App';
import { ApolloProvider } from '@apollo/client';

import { InfoProvider } from './Contexts/context';
import { client } from './GraphQl/GraphqlSetup';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <InfoProvider>
        <App />
      </InfoProvider>
    </ApolloProvider>
  </React.StrictMode>
);
