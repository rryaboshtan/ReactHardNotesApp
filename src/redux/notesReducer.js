import { createReducer, createAction } from '@reduxjs/toolkit';
const options = { month: 'long', day: 'numeric', year: 'numeric' };

const initialState = {
   notes: [
      {
         name: 'Shopping list',
         created: new Date().toLocaleDateString('en-US', options),
         category: 'Task',
         content: 'tomatoes, bread',
         dates: '',
         command: '',
      },
      {
         name: 'The theory of evolution',
         created: new Date().toLocaleDateString('en-US', options),
         category: 'Random Thought',
         content: 'The evolution...',
         dates: '',
         command: '',
      },
      {
         name: 'New feature',
         created: new Date().toLocaleDateString('en-US', options),
         category: 'Idea',
         content: 'Implement new...',
         dates: '3/5/2021, 5/5/2021',
         command: '',
      },
      {
         name: 'William Gaddis',
         created: new Date().toLocaleDateString('en-US', options),
         category: 'Task',
         content: "Power doesn't co",
         dates: '',
         command: '',
      },
      {
         name: 'Books',
         created: new Date().toLocaleDateString('en-US', options),
         category: 'Task',
         content: 'The Lean Startup',
         dates: '',
         command: 'sdfd',
      },
      {
         name: 'Other Books',
         created: new Date().toLocaleDateString('en-US', options),
         category: 'Idea',
         content: 'English learning',
         dates: '3/1/2022, 5/3/2022',
         command: '',
      },
   ],
};

export const changeNote = createAction('CHANGE_NOTE');
export const deleteNote = createAction('DELETE_NOTE');
export const appendNote = createAction('APPEND_NOTE');

export default createReducer(initialState, builder => {
   builder
      .addCase(changeNote, (state, action) => {
         const index = action.payload.index;

         const elementName = action.payload.changedElement.name;
         const value = action.payload.changedElement.value;
         state.notes[index][elementName] = value;
      })
      .addCase(deleteNote, (state, action) => {
         const index = action.payload.index;
         state.notes.splice(index, 1);
      })
      .addCase(appendNote, (state, action) => {
         state.notes.push(action.payload.note);
      });
});
