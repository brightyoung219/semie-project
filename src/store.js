import { configureStore, createSlice } from '@reduxjs/toolkit';


// nav 컴포넌트의 display 속성, login.js 페이지에서는 'none'을 받아 nav를 숨김
 
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
