import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement, addTodo, removeLastTodo } from './redux/toolkitSlice';
import {notes} from './data.js';
import Table from './components/Table/Table';
import './App.css';

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

   return (
      <div className='App'>
         
         <Table oldNotes = {notes}>
            
       </Table>

         {/* <h1>Счетчик {count}</h1> */}
        
      </div>
   );
}

export default App;
