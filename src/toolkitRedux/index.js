import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import toolkitReducer from './toolkitReducer';
import toolkitReducer from './toolkitSlice';

const rootReducer = combineReducers({
   reducer: toolkitReducer,
});

export const store = configureStore({
   reducer: rootReducer,
});
