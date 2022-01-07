import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer, { increment, decrement, addTodo, removeLastTodo } from './toolkitRedux/toolkitSlice';
import todos from './data.js';

// import { addTodo } from './vanillaRedux/mainReducer';
// import { addTodo, decrement, increment, removeLastTodo } from '.vanillaRedux/mainReducer';

const addAsyncTodo = () => {
   return async dispatch => {
      setTimeout(() => {
         dispatch(addTodo('ASYNC_TODO'));
      }, 2000);
   };
};

function App() {
   // const count = useSelector(state => state.toolkit.count);
   const todos = useSelector(state => state.reducer.todos);
   const dispatch = useDispatch();

   return (
      <div className='App'>

       

         {/* <h1>Счетчик {count}</h1> */}
         <button onClick={() => dispatch(increment())}>Инкремент</button>
         <button onClick={() => dispatch(decrement())}>Декремент</button>
         <button onClick={() => dispatch(removeLastTodo())}>Удалить последний Тодо</button>
         <button onClick={() => dispatch(addTodo(prompt()))}>Добавить</button>
         <button onClick={() => dispatch(addAsyncTodo())}>Добавить Асинк Тодо</button>
         <ul>
            {todos.map(todo => (
               <li key={todo}>{todo}</li>
            ))}
         </ul>
      </div>
   );
}

export default App;
