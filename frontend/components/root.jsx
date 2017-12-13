import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, IndexRoute, hashHistory } from 'react-router-dom';
import Quote from './quote_container.jsx';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <HashRouter history={ hashHistory }>
        <div>
          <Route path='/' component={ Quote }></Route>
        </div>
      </HashRouter>
    </Provider>
  );
};

export default Root;
