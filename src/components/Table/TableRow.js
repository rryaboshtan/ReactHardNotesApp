import React, { useRef, useState } from 'react';
import CategoriesMap from './CategoriesMap';
import { v4 as uuidv4 } from 'uuid';
import { defineIdProperty } from '../../utils/helper';
import './table.css';

const TableRow = ({ note, notes }) => {
   const noteFields = Object.keys(note);
   defineIdProperty(note);
   const [selectValue, setSelectValue] = useState(note.category)
   const currentRow = useRef('dfgdf');
   const [isEditMode, setIsEditMode] = useState(false);
   const [newNote, setNewNote] = useState(note);

   const onEditNote = () => {
      setIsEditMode(!isEditMode);
   };

   const onInputChange = event => {
      setSelectValue(event.target.value);
      // if (isEditMode) {
         // const currentNoteIndex = notes.findIndex(note => note.id.toString() === currentRow.current.dataset.id);

         // notes[currentNoteIndex][event.target.dataset.field] = event.target.value;
         // note[event.target.dataset.field] = event.target.value;
         // setNewNote({ ...newNote, [event.target.dataset.field]: event.target.value });
      // }
   };

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
                        onChange={onInputChange}
                        // onClick={onInputChange}
                        className={isEditMode ?  'active-element' :  'disabled-element'}
                        data-field={noteField}
                        disabled={!isEditMode}
                        value={selectValue}
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
                        onChange={onInputChange}
                        // onClick={onInputChange}
                        // className={isEditMode ? 'active-element' : 'disabled-element'}
                        style={isEditMode ? {backgroundColor: '#ffffff'}:{backgroundColor:'777777'}}
                        data-field={noteField}
                        type='text'
                        // disabled={!isEditMode}
                        value={note[noteField]}
                     ></input>
                  </td>
               );
            }
         })}
      </tr>
   );
};

export default TableRow;
