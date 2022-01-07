import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevtools } from 'redux-devtools-extension';

import mainReducer from './mainReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   main: mainReducer,
});

export const store = createStore(rootReducer, composeWithDevtools(applyMiddleware(thunk)));
