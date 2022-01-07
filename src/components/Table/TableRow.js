import React, { useRef, useState } from 'react';
import CategoriesMap from './CategoriesMap';
import { v4 as uuidv4 } from 'uuid';
import { defineIdProperty } from '../../utils/helper';
import './table.css';


 function debounce(fn, delay = 1000) {
   let timer = null;

   if (delay === 0) {
      return fn;
   }

   return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
         fn.apply(this, args);
         console.log('Args = ', args);
      }, delay);
   };
}
const TableRow = ({ note, notes }) => {
   const noteFields = Object.keys(note);
   defineIdProperty(note);
   const [category, setCategory] = useState(note.category);
   const [name, setName] = useState(note.name);
   const [created, setCreatedValue] = useState(note.created);
   const [content, setContentValue] = useState(note.content);
   const [dates, setDatesValue] = useState(note.dates);
   const currentRow = useRef('dfgdf');
   const currentName = useRef(name);

   const [isEditMode, setIsEditMode] = useState(false);
   // let isEditMode = false;
   const [newNote, setNewNote] = useState(note);

   const onEditNote = () => {
      setIsEditMode(!isEditMode);
      // isEditMode = !isEditMode;
   };

   const onCategoryChange = event => {
      setCategory(event.target.value);
      // if (isEditMode) {
         // const currentNoteIndex = notes.findIndex(note => note.id.toString() === currentRow.current.dataset.id);

         // notes[currentNoteIndex][event.target.dataset.field] = event.target.value;
         // note[event.target.dataset.field] = event.target.value;
         // setNewNote({ ...newNote, [event.target.dataset.field]: event.target.value });
      // }
   };
      const onNameChange = debounce(event => {
         setName(event.target.value);
         // currentName
         console.log(event.target.value);
         console.log(currentName.current.value);
         event.target.defaultValue = currentName.current.value;
         // if (isEditMode) {
         // const currentNoteIndex = notes.findIndex(note => note.id.toString() === currentRow.current.dataset.id);

         // notes[currentNoteIndex][event.target.dataset.field] = event.target.value;
         // note[event.target.dataset.field] = event.target.value;
         // setNewNote({ ...newNote, [event.target.dataset.field]: event.target.value });
         // }
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
                        onChange={onCategoryChange}
                        // onClick={onCategoryChange}
                        className={isEditMode ? 'active-element' : 'disabled-element'}
                        style={isEditMode ? { backgroundColor: '#ffffff' } : { backgroundColor: '777777' }}
                        data-field={noteField}
                        disabled={!isEditMode}
                        value={category}
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
                        onChange={onNameChange}
                        // onClick={onCategoryChange}
                        // className={isEditMode ? 'active-element' : 'disabled-element'}
                        style={isEditMode ? { backgroundColor: '#ffffff' } : { backgroundColor: '777777' }}
                        data-field={noteField}
                        type='text'
                        disabled={!isEditMode}
                        ref={currentName}
                        defaultValue={name}
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
