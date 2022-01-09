import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { changeNote, deleteNote } from '../../redux/notesReducer';
import { changeCategoryInfo } from '../../redux/categoriesReducer';
import CategoriesMap from '../CategoriesMap';
import { debounce } from '../../utils/helper';
import { appendArchivedNote } from '../../redux/archivedNotesReducer';

const TableRow = ({ oldNote, index, oldCategory}) => {
   const [noteFields, setNoteFields] = useState(Object.keys(oldNote));

   const [note, setNote] = useState(oldNote);
   const dispatch = useDispatch();
   const [changedElement, setChangedElement] = useState(null);
   // const oldCategory = note.category;

   const [isEditMode, setIsEditMode] = useState(false);

   const onDeleteNote = () => {
      dispatch(deleteNote({ index, previous: true }));
      setNoteFields({});
      dispatch(
         changeCategoryInfo({
            categoryName: note.category,
            categoryField: 'active',
            isIncreased: false,
         })
      );
   };

   const onArchiveNote = () => {
      dispatch(deleteNote({ index }));

      dispatch(appendArchivedNote({ note }));
      dispatch(
         changeCategoryInfo({
            categoryName: note.category,
            categoryField: 'archived',
            isIncreased: true,
         })
      );
      dispatch(
         changeCategoryInfo({
            categoryName: note.category,
            categoryField: 'active',
            isIncreased: false,
         })
      );
   };

   const onEditNote = () => {
      setIsEditMode(!isEditMode);
      if (changedElement) {
         dispatch(changeNote(changedElement));
      }

      console.log('changedElement?.changedElement?.name = ', changedElement?.changedElement?.name);
      console.log('oldCategory', oldCategory);
      console.log('changedElement?.changedElement?.value', changedElement?.changedElement?.value);
      if (changedElement?.changedElement?.name === 'category') {
         dispatch(
            changeCategoryInfo({
               categoryName: oldCategory,
               categoryField: 'active',
               isIncreased: false,
            })
         );
         dispatch(
            changeCategoryInfo({
               categoryName: changedElement?.changedElement?.value,
               categoryField: 'active',
               isIncreased: true,
            })
         );
      }
   };

   const onNoteFieldChange = debounce(event => {
      const value = event.target.value;
      setNote({ ...note, [event.target.dataset.field]: value });
      const changedField = event.target.dataset.field;

      setChangedElement({ changedElement: { name: changedField, value }, index: index });
   });

   return noteFields?.length ? (
      <tr data-id={note.id}>
         <td className='first-column'>
            <CategoriesMap category={note.category}></CategoriesMap>
         </td>

         {noteFields.map(noteField => {
            if (noteField === 'command') {
               return (
                  <td className='command' key={uuidv4()}>
                     <button onClick={onEditNote}>
                        <i className='fas fa-pencil-alt'></i>
                     </button>

                     <button onClick={onArchiveNote}>
                        <i className='fas fa-archive'></i>
                     </button>

                     <button onClick={onDeleteNote}>
                        <i className='fas fa-trash'></i>
                     </button>
                  </td>
               );
            } else if (noteField === 'category') {
               return (
                  <td key={uuidv4()}>
                     <select
                        onChange={onNoteFieldChange}
                        style={isEditMode ? { backgroundColor: '#ffffff' } : { backgroundColor: '777777' }}
                        data-field={noteField}
                        disabled={!isEditMode}
                        defaultValue={note[noteField]}
                     >
                        <option value='Task'>Task</option>
                        <option value='Random Thought'>Random Thought</option>
                        <option value='Idea'>Idea</option>
                     </select>
                  </td>
               );
            } else {
               return (
                  <td key={uuidv4()}>
                     <input
                        onChange={onNoteFieldChange}
                        style={isEditMode ? { backgroundColor: '#ffffff' } : { backgroundColor: '777777' }}
                        data-field={noteField}
                        type='text'
                        disabled={!isEditMode}
                        defaultValue={note[noteField]}
                     ></input>
                  </td>
               );
            }
         })}
      </tr>
   ) : (
      <></>
   );
};

export default TableRow;
