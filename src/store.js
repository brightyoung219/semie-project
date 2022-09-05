import { configureStore, createSlice } from '@reduxjs/toolkit';


const navDisplay = createSlice({
  name : 'navDisplay',
  initialState : {displayValue : 'block'},
  reducers : {
    changeDisplay(state, action){
      state.displayValue = action.payload
    }
  }
})

export default configureStore({
  reducer: { 
    navDisplay : navDisplay.reducer
  }
});

export const { changeDisplay } = navDisplay.actions;
