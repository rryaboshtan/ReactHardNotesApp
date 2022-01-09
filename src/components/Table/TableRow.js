import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { changeNote } from '../../redux/toolkitSlice';
import { changeNote, deleteNote } from '../../redux/toolkitReducer';
import { changeCategoryInfo } from '../../redux/categoriesReducer';
import CategoriesMap from '../CategoriesMap';
import { v4 as uuidv4 } from 'uuid';
import { debounce } from '../../utils/helper';
import { appendArchivedNote } from '../../redux/archivedNotesReducer';
import { getColorizedDatesString } from '../../utils/helper';
// import './table.css';

const TableRow = ({ oldNote, index }) => {
   // const noteFields = Object.keys(oldNote);
   const [noteFields, setNoteFields] = useState(Object.keys(oldNote));

   // const notes = useSelector(state => state.notesReducer.notes);
   const [note, setNote] = useState(oldNote);

   const dispatch = useDispatch();
   const [changedElement, setChangedElement] = useState(null);

   // let changedElement = null;

   const [name, setName] = useState(note.name);
   const currentRow = useRef('dfgdf');
   const currentName = useRef(name);

   const [isEditMode, setIsEditMode] = useState(false);
   // let isEditMode = false;

   const onDeleteNote = () => {

      dispatch(deleteNote({ index: index, previous: true }));
      console.log('index = ', index);
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
      dispatch(deleteNote({ index: index }));

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
      // isEditMode = !isEditMode;
      console.log(changedElement?.changedElement);
      console.log(getColorizedDatesString('3/07/2022, 4/05/2022'));
      // getColorizedDatesString('3/07/2022, 4/05/2022');
      if (changedElement) {
         dispatch(changeNote(changedElement));
      }
   };

   const onNoteFieldChange = debounce(event => {
      setNote({ ...note, [event.target.dataset.field]: event.target.value });
      console.log(event.target.value);
      console.log(currentName.current.value);
      console.log('IN CHANGE');
      setChangedElement({ changedElement: { name: [event.target.dataset.field], value: event.target.value }, index: index });
      // changedElement = { changedElement: { name: [event.target.dataset.field], value: event.target.value }, index: index };

      console.log(changedElement);
      // dispatch(changeNote({ changedElement: { name: [event.target.dataset.field], value: event.target.value }, index: index }));
   });

   return noteFields?.length ? (
      <tr data-id={note.id} ref={currentRow}>
         {console.log(currentRow.current)}
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
                        // onClick={onCategoryChange}
                        // className={isEditMode ? 'active-element' : 'disabled-element'}
                        style={isEditMode ? { backgroundColor: '#ffffff' } : { backgroundColor: '777777' }}
                        data-field={noteField}
                        disabled={!isEditMode}
                        // value={category}
                        defaultValue={note[noteField]}
                     >
                        <option value='Task'>Task</option>
                        <option value='Random Thought'>Random Thought</option>
                        <option value='Idea'>Idea</option>
                     </select>
                  </td>
               );
            } else {
               return isEditMode ? (
                  <td key={uuidv4()}>
                     <input
                        onChange={onNoteFieldChange}
                        // onClick={onCategoryChange}
                        // className={isEditMode ? 'active-element' : 'disabled-element'}
                        style={isEditMode ? { backgroundColor: '#ffffff' } : { backgroundColor: '777777' }}
                        data-field={noteField}
                        type='text'
                        disabled={!isEditMode}
                        ref={currentName}
                        // defaultValue={note[noteField]}
                        // defaultValue={note[noteField]}
                        defaultValue={note[noteField]}
                        // value = {name}
                     ></input>
                  </td>
               ) : ( (noteField === 'dates') &&
                  <td key={uuidv4()}>
                     <label
                        // onChange={onNoteFieldChange}
                        // onClick={onCategoryChange}
                        // className={isEditMode ? 'active-element' : 'disabled-element'}
                        style={isEditMode ? { backgroundColor: '#ffffff' } : { backgroundColor: '777777' }}
                        // data-field={noteField}
                        // type='text'
                        disabled={!isEditMode}
                        // ref={currentName}
                        // defaultValue={note[noteField]}
                        // defaultValue={note[noteField]}
                        // defaultValue={note[noteField]}
                        // value = {name}
                     >{getColorizedDatesString(note[noteField])}</label>
                  </td>
               );
            }
         })}
         <label>
            <span className='colorized'>ROMFN</span>
         </label>
      </tr>
   ) : (
      <></>
   );
};

export default TableRow;
