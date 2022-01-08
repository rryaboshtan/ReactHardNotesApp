import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement, addTodo, removeLastTodo } from './redux/toolkitSlice';
import { notes } from './data.js';
import Table from './components/Table/Table';
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
   // const notes = useSelector(state => state.notesReducer.notes);
   // const dispatch = useDispatch();
   const [isArchiveTableShow, setIsArchiveTableShow] = useState(false);

   return (
      <div className='App'>
         <Table
            oldNotes={notes}
            isArchiveTableShowCallback={setIsArchiveTableShow}
            isArchiveTableShow={isArchiveTableShow}
         ></Table>
         <button onClick={} className='create-note'>Create Note</button>

         {isArchiveTableShow && <ArchiveTable oldNotes={notes}></ArchiveTable>}

         {/* <h1>Счетчик {count}</h1> */}
      </div>
   );
}

export default App;
