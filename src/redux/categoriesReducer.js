import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
   categories: {
      Task: {
         active: 3,
         archived: 0,
      },
      'Random Thought': {
         active: 1,
         archived: 0,
      },
      Idea: {
         active: 2,
         archived: 0,
      },
   },
};

export const changeCategoryInfo = createAction('CHANGE_CATEGORY_INFO');

export default createReducer(initialState, builder => {
   builder.addCase(changeCategoryInfo, (state, action) => {
      const categoryName = action.payload.categoryName;
      const categoryField = action.payload.categoryField;
      const isIncreased = action.payload.isIncreased;

      if (isIncreased) {
         state.categories[categoryName][categoryField]++;
      } else {
         state.categories[categoryName][categoryField]--;
      }
   });
});
