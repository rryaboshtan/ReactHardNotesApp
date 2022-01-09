import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { appendNote} from '../../redux/notesReducer';
import { changeCategoryInfo } from '../../redux/categoriesReducer';
import { deleteArchivedNote } from '../../redux/archivedNotesReducer';
import CategoriesMap from '../CategoriesMap';

const ArchiveTableRow = ({ oldNote, index, archivedNotesCount, setIsArchiveTableShown }) => {
   const [noteFields, setArchivedNoteFields] = useState(Object.keys(oldNote));

   const [note, setNote] = useState(oldNote);
   const dispatch = useDispatch();

   const onMouseLeaveRow = event => {
      event.currentTarget.style.backgroundColor = '#777777';
   };
   const onMouseEnterRow = event => {
      event.currentTarget.style.backgroundColor = '#ffffff';
   };
   const onArchiveRowClick = () => {
      setArchivedNoteFields({});
      if (archivedNotesCount === 1) {
         setIsArchiveTableShown(false);
      }
      dispatch(appendNote({ note }));
      dispatch(deleteArchivedNote({ index }));
      dispatch(
         changeCategoryInfo({
            categoryName: note.category,
            categoryField: 'archived',
            isIncreased: false,
         })
      );
      dispatch(
         changeCategoryInfo({
            categoryName: note.category,
            categoryField: 'active',
            isIncreased: true,
         })
      );
   };

   return noteFields?.length ? (
      <tr onClick={onArchiveRowClick} onMouseLeave={onMouseLeaveRow} onMouseEnter={onMouseEnterRow}>
         <td className='first-column'>
            <CategoriesMap category={note.category}></CategoriesMap>
         </td>

         {noteFields.map(noteField => {
            return (
               <td key={uuidv4()}>
                  <input type='text' disabled={true} defaultValue={note[noteField]}></input>
               </td>
            );
         })}
      </tr>
   ) : (
      <></>
   );
};

export default ArchiveTableRow;
