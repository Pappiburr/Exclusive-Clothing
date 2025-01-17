import {legacy_createStore as createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'



const loggerMiddleware = (store) => (next) => (action) => {
  if (!action) {
    return next(action);
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState', store.getState());

  const result = next(action);

  console.log('next state:', store.getState());

  return result;
}

const persistConfig = {
  key: 'root', 
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [loggerMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger);
}

export const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middleWares))
);

export const persistor = persistStore(store);