import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
   archivedNotes: [],
};

export const deleteArchivedNote = createAction('DELETE_ARCHIVED_NOTE');
export const appendArchivedNote = createAction('APPEND-ARCHIVED_NOTE');

export default createReducer(initialState, builder => {
   builder
      .addCase(deleteArchivedNote, (state, action) => {
         const index = action.payload.index;
         state.archivedNotes.splice(index, 1);
      })
      .addCase(appendArchivedNote, (state, action) => {
         state.archivedNotes.push(action.payload.note);
      });
});
