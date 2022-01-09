import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoriesTableRow from './CategoriesTableRow';
// import { categories } from '../../data';
import { v4 as uuidv4 } from 'uuid';

export default function CategoriesTable() {
   // const [notes, setNotes] = useState(oldNotes);
   const categories = useSelector(state => state.categoriesReducer.categories);
    // const categories = 
    const categoriesNames = Object.keys(categories);
    console.log('categories names = ', categoriesNames);
    console.log('categories = ', categories);
    console.log('categories = ', categories[categoriesNames[0]]);
   // const [archiveNotesCount, setArchiveNotesCount] = useState(archivedNotes.length);

   return (
      <table className='categories-table'>
         <thead>
            <tr>
               <td>Name</td>
               <td className='center'>Active</td>
               <td className='center'>Archived</td>
            </tr>
         </thead>
         <tbody className='categories-table-body'>
            {categoriesNames.map((categoryName, index) => {
               return (
                  <CategoriesTableRow
                     categoryItem={categories[categoryName]}
                     categoryName={categoryName}
                     index={index}
                     key={uuidv4()}
                  ></CategoriesTableRow>
               );
            })}
         </tbody>
      </table>
   );
}
