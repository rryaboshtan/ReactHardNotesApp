import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import toolkitReducer from './toolkitReducer';
import notesReducer from './toolkitSlice';

const rootReducer = combineReducers({
   notesReducer,
});

export const store = configureStore({
   reducer: rootReducer,
});
