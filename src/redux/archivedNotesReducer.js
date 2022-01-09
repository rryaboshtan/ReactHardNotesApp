import { createReducer, createAction } from '@reduxjs/toolkit';
const options = { month: 'long', day: 'numeric', year: 'numeric' };

const initialState = {
   archivedNotes: [
    ],
};

// export const changeNote = createAction('CHANGE_NOTE');
export const deleteArchivedNote = createAction('DELETE_ARCHIVED_NOTE');
export const appendArchivedNote = createAction('APPEND-ARCHIVED_NOTE');

export default createReducer(initialState, builder => {
   builder
    //   .addCase(changeNote, (state, action) => {
    //      const index = action.payload.index;

    //      const elementName = action.payload.changedElement.name;
    //      const value = action.payload.changedElement.value;
    //      state.notes[index][elementName] = value;
    //      // state.notes[index] = action.payload.note;
    //   })
      .addCase(deleteArchivedNote, (state, action) => {
         const index = action.payload.index;
         state.archivedNotes.splice(index, 1);
      })
      .addCase(appendArchivedNote, (state, action) => {
         // const index = action.payload.index;
         state.archivedNotes.push(action.payload.note);
         // state.archivedNotes = state.archivedNotes.concat([action.payload.note]);
         // state.notes.splice(index, 1);
      });

   // [changeNote]: function (state, action) {
   //      const index = action.payload.index;
   //    // state.notes[index] = action.payload.note;
   //      state.notes[0].dates = action.payload.note.dates;

   //      // state.notes.push(action.payload.note)
   // },
   // [decrement]: function (state) {
   //    state.count = state.count - 1;
   // },
});
