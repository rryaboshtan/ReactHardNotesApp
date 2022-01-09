import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { notes as oldNotes } from './data.js';
import Table from './components/Table/Table';
import CategoriesTable from './components/CategoriesTable/CategoriesTable.js';
import { appendNote } from './redux/notesReducer.js';
import { changeCategoryInfo } from './redux/categoriesReducer.js';
import { options } from './utils/helper.js';
import ArchiveTable from './components/ArchiveTable/ArchiveTable.js';

import './App.css';

function App() {
   const notes = useSelector(state => state.notesReducer.notes);

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
      dispatch(appendNote({ note }));
      dispatch(
         changeCategoryInfo({
            categoryName: note.category,
            categoryField: 'active',
            isIncreased: true,
         })
      );
      setIsArchiveTableShown(false);
   };

   return (
      <div className='App'>
         <Table
            oldNotes={notes}
            setIsArchiveTableShown={setIsArchiveTableShown}
            isArchiveTableShown={isArchiveTableShown}
         ></Table>
         <button onClick={onAppendNewNote} className='create-note'>
            Create Note
         </button>

         {isArchiveTableShown && <ArchiveTable setIsArchiveTableShown={setIsArchiveTableShown}></ArchiveTable>}

         <CategoriesTable></CategoriesTable>
      </div>
   );
}

export default App;
