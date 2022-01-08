import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { changeNote } from '../../redux/toolkitSlice';
import { changeNote } from '../../redux/toolkitReducer';
import CategoriesMap from './CategoriesMap';
import { v4 as uuidv4 } from 'uuid';
import { debounce } from '../../utils/helper';
import './table.css';


const TableRow = ({ oldNote, index }) => {
   const noteFields = Object.keys(oldNote);
   const notes = useSelector(state => state.notesReducer.notes);
   const [note, setNote] = useState(notes[index]);

   const dispatch = useDispatch();

   const [name, setName] = useState(note.name);
   const currentRow = useRef('dfgdf');
   const currentName = useRef(name);

   const [isEditMode, setIsEditMode] = useState(false);
   // let isEditMode = false;

   const onEditNote = () => {
      setIsEditMode(!isEditMode);
      // isEditMode = !isEditMode;
   };

   useEffect(() => {
   
      dispatch(changeNote({ note: note, index: index }));
   }, [note]);
  
   const onNoteFieldChange = debounce(event => {
      setNote({ ...note, [event.target.dataset.field]: event.target.value });
      console.log(event.target.value);
      console.log(currentName.current.value);
      dispatch(changeNote({ note: note, index: index }));

     
   });

   return (
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

                     <button>
                        <i className='fas fa-archive'></i>
                     </button>

                     <button>
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
               return (
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
                        defaultValue={note[noteField]}
                        // value = {name}
                     ></input>
                  </td>
               );
            }
         })}
      </tr>
   );
};

export default TableRow;
