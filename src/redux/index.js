import { combineReducers, configureStore } from '@reduxjs/toolkit';
import notesReducer from './toolkitReducer';
import archivedNotesReducer from './archivedNotesReducer';
// import notesReducer from './toolkitSlice';

const rootReducer = combineReducers({
   notesReducer,
   archivedNotesReducer,
});

export const store = configureStore({
   reducer: rootReducer,
});
