import {legacy_createStore as createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';



const loggerMiddlerware = ( store ) => (next) => (action) => {
  if(!action.type){
    return next()
  }

  console.log('type' , action.type);
  console.log('payload', action.payload);
  console.log('currentState', store.getState());

  next(action);


  console.log('next state:' , store.getState());


}
const middleWares = [loggerMiddlerware];

if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger);
}

export const store = createStore(
  rootReducer, 
  undefined, 
  compose(applyMiddleware(...middleWares))
);