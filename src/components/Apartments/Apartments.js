import React from 'react';
import TableRow from './TableRow';
import { defineIdProperty } from './helper';
import { v4 as uuidv4 } from 'uuid';
import './apartment.css';

export default function Apartments({ notes }) {
   defineIdProperty()
   return (
      <table className='table'>

         <tbody className='table-body'>

            {notes.map(note => {

               return (
                  <TableRow note = {note}>


                  </TableRow>
               )
            })

            }
     
         defineIdProperty(note);
         this.renderOneNote(note, tbody);
      }
   }
</tbody>

       
      </table>
   );
}
