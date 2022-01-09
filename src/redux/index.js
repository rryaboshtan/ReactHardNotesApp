import { combineReducers, configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesReducer';
import archivedNotesReducer from './archivedNotesReducer';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
   notesReducer,
   archivedNotesReducer,
   categoriesReducer,
});

export const store = configureStore({
   reducer: rootReducer,
});
