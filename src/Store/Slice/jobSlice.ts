import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={}

const getAllJobs = createAsyncThunk(
    'api/getAllJobs', async
)

const JobSlice =createSlice({
    name:'Job',
    initialState,
    reducers:{}
})

export default JobSlice.reducer