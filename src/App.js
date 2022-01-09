import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notes as oldNotes } from './data.js';
import Table from './components/Table/Table';
import { appendNote } from './redux/toolkitReducer.js';
import { options } from './utils/helper.js';

import './App.css';
import ArchiveTable from './components/ArchiveTable/ArchiveTable.js';

function App() {
   // const count = useSelector(state => state.toolkit.count);
   // const archivedNotes = useSelector(state => state.archivedNotesReducer.archivedNotes);
   // const archivedNotes = {};
   const [notes, setNotes] = useState(oldNotes);

   const dispatch = useDispatch();
   const [isArchiveTableShown, setIsArchiveTableShown] = useState(false);

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
      setIsArchiveTableShown(false);
   };

   return (
      <div className='App'>
         <Table oldNotes={notes} setIsArchiveTableShown={setIsArchiveTableShown} isArchiveTableShown={isArchiveTableShown}></Table>
         <button onClick={onAppendNewNote} className='create-note'>
            Create Note
         </button>

         {isArchiveTableShown && <ArchiveTable setIsArchiveTableShown={setIsArchiveTableShown}></ArchiveTable>}
      </div>
   );
}

export default App;
