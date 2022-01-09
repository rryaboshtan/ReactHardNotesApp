import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import CategoriesTableRow from './CategoriesTableRow';

export default function CategoriesTable() {
   const categories = useSelector(state => state.categoriesReducer.categories);
   const categoriesNames = Object.keys(categories);

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
