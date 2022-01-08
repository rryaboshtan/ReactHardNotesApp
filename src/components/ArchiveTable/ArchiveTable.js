import React, { useState } from 'react';
import ArchiveTableRow from './ArchiveTableRow';
import { v4 as uuidv4 } from 'uuid';

export default function ArchiveTable({ oldNotes }) {
   const [notes, setNotes] = useState(oldNotes);

   return (
      <table className='archived-table'>
         {/* <thead>
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
         </thead> */}

         <tbody className='archived-table-body'>
            {notes.map((note, index) => {
               return <ArchiveTableRow oldNote={note} index={index} key={uuidv4()}></ArchiveTableRow>;
            })}
         </tbody>
      </table>
   );
}
