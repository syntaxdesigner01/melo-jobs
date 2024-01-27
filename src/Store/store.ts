import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./Slice/jobSlice";

 const store = configureStore({
    reducer:jobSlice,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
