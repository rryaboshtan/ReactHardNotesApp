import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import TableRow from './TableRow';

export default function Table({ setIsArchiveTableShown, isArchiveTableShown }) {
   const notes = useSelector(state => state.notesReducer.notes);
   const onAllArchiveShow = () => {
      setIsArchiveTableShown(!isArchiveTableShown);
   };
   return (
      <table className='table'>
         <thead>
            <tr>
               <td className='first-column'></td>
               <td>Name</td>
               <td>Created</td>
               <td>Category</td>
               <td>Content</td>
               <td>Dates</td>
               <td className='command'>
                  <i className='fas fa-archive first-row' onClick={onAllArchiveShow}></i>
                  <i className='fas fa-trash first-row'></i>
               </td>
            </tr>
         </thead>

         <tbody className='table-body'>
            {notes.map((note, index) => {
               return <TableRow oldCategory={note.category} oldNote={note} index={index} key={uuidv4()}></TableRow>;
            })}
         </tbody>
      </table>
   );
}
