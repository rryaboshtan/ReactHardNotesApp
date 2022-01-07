import React, {useRef, useState} from 'react';
import CategoriesMap from './CategoriesMap';
import { v4 as uuidv4 } from 'uuid';
import { defineIdProperty } from '../../utils/helper';
import { categoriesMap } from '../../utils/helper';

const TableRow = ({ note, notes}) => {
   const noteFields = Object.keys(note);
   defineIdProperty(note);
   currentRow = useRef(null);
   const [isEditMode, setIsEditMode] = useState(false)

   const onEditNote = (currentRow) => {
      // isEditMode = !isEditMode;
      setIsEditMode(!isEditMode);
            
     
      if (!isEditMode) {
         input.setAttribute('disabled', 'disabled');
         input.style.backgroundColor = DISABLED_ELEMENT_COLOR;
         return;
      }
      input.removeAttribute('disabled');
      input.style.backgroundColor = ACTIVE_ELEMENT_COLOR;
   }
   }
   const onInputChange = (event, currentRow) => {
         const currentNoteIndex = notes.findIndex(note => note.id.toString() === currentRow.current.dataset.id);

         notes[currentNoteIndex][event.target.dataset.field] = event.target.value;
      }

   

   return (
      <tr data-id={note.id} ref={currentRow}>
         <td className='first-column'>
            <CategoriesMap category={note.category}></CategoriesMap>
         </td>

         {noteFields.map(noteField => {
            if (noteField === 'command') {
               return (
                  <td className='command' key={uuidv4()}>
                   
                   
                       
                        <button onClick={onEditNote(currentRow)}>
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
                     <select onChange={onInputChange(currentRow)} className={isEditMode?'active-element':'disabled-element'} data-field={noteField} disabled = {isEditMode ? '' : 'disabled'}>
                        <option value='Task' selected={note[noteField] === 'Task' ? 'selected' : ''}>
                           Task
                        </option>
                        <option value='Random Thought' selected={note[noteField] === 'Random Thought' ? 'selected' : ''}>
                           Random Thought
                        </option>
                        <option value='Idea' selected={note[noteField] === 'Idea' ? 'selected' : ''}>
                           Idea
                        </option>
                     </select>
                  </td>
               );
            } else {
               return (
                  <td key={uuidv4()}>
                     <input onChange={onInputChange(currentRow)} className={isEditMode?'active-element':'disabled-element'} data-field={noteField} type='text' disabled={isEditMode ? '' : 'disabled'} value={note[noteField]}></input>
                  </td>
               );
            }
         })}
      </tr>
   );
};

export default TableRow;
