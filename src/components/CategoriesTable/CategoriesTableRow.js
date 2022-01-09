import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const CategoriesTableRow = ({ categoryItem, categoryName }) => {
   // const noteFields = Object.keys(oldNote);
   //    const [noteFields, setArchivedNoteFields] = useState(Object.keys(oldNote));
    //   const [categoryItem, setCategoryItem] = useState(oldCategoryItem);

   // const notes = useSelector(state => state.notesReducer.notes);
   //    const [note, setNote] = useState(oldNote);

   const dispatch = useDispatch();

   //    const [name, setName] = useState(note.name);
   const currentRow = useRef('dfgdf');
   //    const currentName = useRef(name);

   const [isEditMode, setIsEditMode] = useState(false);
   useEffect(() => {
      console.log('CATEG ITEM', categoryItem);
   }, []);

   return (
      <tr>
         <td key={uuidv4()}>
            <input data-field={categoryName} type='text' disabled={true} defaultValue={categoryName}></input>
         </td>
         <td key={uuidv4()}>
            <input data-field={'active'} type='text' disabled={true} defaultValue={categoryItem.active}></input>
         </td>
         <td key={uuidv4()}>
            <input data-field={'archived'} type='text' disabled={true} defaultValue={categoryItem.archived}></input>
         </td>
      </tr>
   );
};

export default CategoriesTableRow;
