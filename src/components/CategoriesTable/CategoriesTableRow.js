import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CategoriesTableRow = ({ categoryItem, categoryName }) => {
   return (
      <tr>
         <td key={uuidv4()}>
            <input type='text' disabled={true} defaultValue={categoryName}></input>
         </td>
         <td key={uuidv4()}>
            <input type='text' disabled={true} defaultValue={categoryItem.active}></input>
         </td>
         <td key={uuidv4()}>
            <input type='text' disabled={true} defaultValue={categoryItem.archived}></input>
         </td>
      </tr>
   );
};

export default CategoriesTableRow;
