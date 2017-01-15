import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  // const logger = createLogger();
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    })
  }

  return store;
}
