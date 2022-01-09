import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import ArchiveTableRow from './ArchiveTableRow';

export default function ArchiveTable({ setIsArchiveTableShown }) {
   const archivedNotes = useSelector(state => state.archivedNotesReducer.archivedNotes);

   return (
      <table className='archived-table'>
         <tbody className='archived-table-body'>
            {archivedNotes.map((note, index) => {
               return (
                  <ArchiveTableRow
                     setIsArchiveTableShown={setIsArchiveTableShown}
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
