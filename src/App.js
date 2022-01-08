import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement, addTodo, removeLastTodo } from './redux/toolkitSlice';
import { notes as oldNotes } from './data.js';
import Table from './components/Table/Table';
// import { changeNote, appendNote, deleteNote } from '../../redux/toolkitReducer';
import { appendNote } from './redux/toolkitReducer.js';
import { options } from './utils/helper.js';

import './App.css';
import ArchiveTable from './components/ArchiveTable/ArchiveTable.js';

// import { addTodo } from './vanillaRedux/mainReducer';
// import { addTodo, decrement, increment, removeLastTodo } from '.vanillaRedux/mainReducer';

// const addAsyncTodo = () => {
//    return async dispatch => {
//       setTimeout(() => {
//          dispatch(addTodo('ASYNC_TODO'));
//       }, 2000);
//    };
// };

function App() {
   // const count = useSelector(state => state.toolkit.count);
   const archiveNotes = useSelector(state => state.archivedNotesReducer.archivedNotes);
   const [notes, setNotes] = useState(oldNotes);

   const dispatch = useDispatch();
   const [isArchiveTableShow, setIsArchiveTableShow] = useState(false);

   const onAppendNewNote = () => {
      const note = {
         name: '',
         created: new Date().toLocaleDateString('en-US', options),
         category: 'Task',
         content: 'Some content',
         dates: '',
         command: '',
      };
      setNotes([...notes, note]);
      dispatch(appendNote({ note }));
      console.log(notes); 
   };

   return (
      <div className='App'>
         <Table
            oldNotes={notes}
            isArchiveTableShowCallback={setIsArchiveTableShow}
            isArchiveTableShow={isArchiveTableShow}
         ></Table>
         <button onClick={onAppendNewNote} className='create-note'>
            Create Note
         </button>

         {isArchiveTableShow && <ArchiveTable oldNotes={archiveNotes}></ArchiveTable>}
      </div>
   );
}

export default App;
