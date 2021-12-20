import React from 'react';
import { Provider } from 'react-redux';
import store from './source/store';
import Screens from './source/screens';

const App = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default App;
