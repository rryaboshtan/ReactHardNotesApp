import React from 'react';
import TableRow from './TableRow';
import { v4 as uuidv4 } from 'uuid';

export default function Table({ notes }) {
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
                  <i className='fas fa-archive first-row'></i>
                  <i className='fas fa-trash first-row'></i>
               </td>
            </tr>
         </thead>

         <tbody className='table-body'>
            {notes.map(note => {
               return <TableRow note={note} notes={notes} key={uuidv4()}></TableRow>;
            })}
         </tbody>
      </table>
   );
}