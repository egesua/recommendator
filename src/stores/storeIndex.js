import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "stores/PlayerStore"

export default configureStore({
    reducer: {
        player: playerReducer
    },
})