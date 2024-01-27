import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current: false,
    controls: false,
    playeing: false
}

export const counterSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
       setCurrent: (state, action) => {
        state.current = action.payload
       },
       setControls: (state, action) => {
        state.controls = action.payload
       },
       setPlaying: (state, action) => {
        state.playeing = action.payload
       }
    }
})


export const { setControls, setCurrent, setPlaying } = playerSlice.actions

export default playerSlice.reducer