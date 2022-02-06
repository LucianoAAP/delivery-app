import React from 'react';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import rootReducer from '../../redux/reducers';

const renderWithReduxAndRouter = (
  component,
  {
    initialState = {},
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  } = {},
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => ({
  ...render(
    <Provider store={ store }>
      <BrowserRouter history={ history }>
        {component}
      </BrowserRouter>
    </Provider>,
  ),
  store,
  history,
});

export default renderWithReduxAndRouter;
