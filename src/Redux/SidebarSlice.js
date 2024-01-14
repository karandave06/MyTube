import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false
}

export const SidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers:{
        toggleState:(state)=>{
            state.value = !state.value;
        }
    }
})


export const {toggleState} = SidebarSlice.actions;
export default SidebarSlice.reducer;