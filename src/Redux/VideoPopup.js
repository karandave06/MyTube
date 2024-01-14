import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Popupvalue:false
}

export const popupVideo = createSlice({
    name:'sidebar',
    initialState,
    reducers:{
        popState:(state)=>{
            state.Popupvalue = !state.Popupvalue;
        }
    }
})


export const {popState} = popupVideo.actions;
export default popupVideo.reducer;