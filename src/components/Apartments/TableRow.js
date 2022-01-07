import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { defineIdProperty } from './helper';
import { categoriesMap } from './helper';

const TableRow = ({ note }) => {
   const noteFields = Object.keys(note);
   defineIdProperty(note);
   return (
      <div>
         <tr data-id={note.id}>
            <td className='first-column'>{categoriesMap[note.category]}</td>

            {noteFields.map(noteField => {
               if (noteField === 'command') {
                  return (
                     <td class='command' key={uuidv4()}>
                        <button>
                           <i class='fas fa-pencil-alt'></i>
                        </button>
                        <button>
                           <i class='fas fa-archive'></i>
                        </button>
                        <button>
                           <i class='fas fa-trash'></i>
                        </button>
                     </td>
                  );
               } else if (noteField === 'category') {
                  return (
                     <td key={uuidv4()}>
                        <select data-field={noteField} disabled>
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
                        <input data-field={noteField} type='text' disabled value={note[noteField]}></input>
                     </td>
                  );
               }
            })}
         </tr>
      </div>
   );
};

export default TableRow;
