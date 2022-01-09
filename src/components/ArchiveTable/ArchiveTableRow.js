import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { changeNote } from '../../redux/toolkitSlice';
import { changeNote, appendNote, deleteNote } from '../../redux/toolkitReducer';
// import CategoriesMap from './CategoriesMap';
import CategoriesMap from '../CategoriesMap';
import { v4 as uuidv4 } from 'uuid';
import { debounce } from '../../utils/helper';
import { deleteArchivedNote } from '../../redux/archivedNotesReducer';
// import './table.css';

const ArchiveTableRow = ({ oldNote, index, archivedNotesCount, notesTableCallback, setIsArchiveTableShown }) => {
   // const noteFields = Object.keys(oldNote);
   const [noteFields, setArchivedNoteFields] = useState(Object.keys(oldNote));

   // const notes = useSelector(state => state.notesReducer.notes);
   const [note, setNote] = useState(oldNote);

   const dispatch = useDispatch();

   const [name, setName] = useState(note.name);
   const currentRow = useRef('dfgdf');
   const currentName = useRef(name);

   const [isEditMode, setIsEditMode] = useState(false);
   // let isEditMode = false;

   //    const onDeleteNote = index => {
   //       dispatch(deleteNote({ index: index }));
   //       setNoteFields({});
   //    };

   //    const onArchiveNote = () => {
   //       dispatch(deleteNote({ index: index }));
   //    };

   //    const onEditNote = () => {
   //       setIsEditMode(!isEditMode);
   //       // isEditMode = !isEditMode;
   //    };

   //     useEffect(() => {
   //          setArchivedNoteFields({});
   // //  dispatch(appendNote({ note: note }));
   // //  dispatch(deleteArchivedNote({ index }));
   //     //   dispatch(changeNote({ note: note, index: index }));
   //    }, [note]);

   const onMouseLeaveRow = event => {
      event.currentTarget.style.backgroundColor = '#777777';
   };
   const onMouseEnterRow = event => {
      event.currentTarget.style.backgroundColor = '#ffffff';
   };
   const onArchiveRowClick = () => {
      setArchivedNoteFields({});
      if (archivedNotesCount === 1) {
         setIsArchiveTableShown(false);
      }
      // setTimeout(() => {
      dispatch(appendNote({ note: note }));
      dispatch(deleteArchivedNote({ index }));
      // }, 500);
   };

   //    const onNoteFieldChange = debounce(event => {
   //       setNote({ ...note, [event.target.dataset.field]: event.target.value });
   //       console.log(event.target.value);
   //       console.log(currentName.current.value);

   //       dispatch(changeNote({ changedElement: { name: [event.target.dataset.field], value: event.target.value }, index: index }));
   //    });

   return noteFields?.length ? (
      <tr
         onClick={onArchiveRowClick}
         onMouseLeave={onMouseLeaveRow}
         onMouseEnter={onMouseEnterRow}
         data-id={note.id}
         ref={currentRow}
      >
         {console.log(currentRow.current)}
         <td className='first-column'>
            <CategoriesMap category={note.category}></CategoriesMap>
         </td>

         {noteFields.map(noteField => {
            // if (noteField === 'category') {
            //    return (
            //       <td key={uuidv4()}>
            //          {/* <select
            //             // onChange={onNoteFieldChange}
            //             // style={isEditMode ? { backgroundColor: '#ffffff' } : { backgroundColor: '777777' }}
            //             data-field={noteField}
            //             disabled={true}
            //             defaultValue={note[noteField]}
            //          >
            //             <option value='Task'>Task</option>
            //             <option value='Random Thought'>Random Thought</option>
            //             <option value='Idea'>Idea</option>
            //          </select> */}

            //       </td>
            //    );
            // } else {
            return (
               <td key={uuidv4()}>
                  <input
                     // onChange={onNoteFieldChange}
                     // style={isEditMode ? { backgroundColor: '#ffffff' } : { backgroundColor: '777777' }}
                     data-field={noteField}
                     type='text'
                     disabled={true}
                     ref={currentName}
                     defaultValue={note[noteField]}
                  ></input>
               </td>
            );
         })}
      </tr>
   ) : (
      <></>
   );
};

export default ArchiveTableRow;
