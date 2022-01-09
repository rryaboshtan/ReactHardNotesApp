import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ArchiveTableRow from './ArchiveTableRow';
import { v4 as uuidv4 } from 'uuid';

export default function ArchiveTable({ isArchiveTableShowCallback }) {
   // const [notes, setNotes] = useState(oldNotes);
   const archivedNotes = useSelector(state => state.archivedNotesReducer.archivedNotes);
   // const [archiveNotesCount, setArchiveNotesCount] = useState(archivedNotes.length);

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
            {archivedNotes.map((note, index) => {
               return (
                  <ArchiveTableRow
                     isArchiveTableShowCallback={isArchiveTableShowCallback}
                     archivedNotesCount={archivedNotes.length}
                     oldNote={note}
                     index={index}
                     key={uuidv4()}
                  ></ArchiveTableRow>
               );
            })}
         </tbody>
      </table>
   );
}
