import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllJobs = createAsyncThunk(
    'api/getAllJobs', async (arg:any, { rejectWithValue }) => {


const options = {
  method: 'GET',
  url: 'https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs',
  params: {
    keywords: `${arg.job}`,
    locationId: `${arg.country}`,
    datePosted: 'anyTime',
    sort: `${arg.sort}`
  },
  headers: {
    'X-RapidAPI-Key': 'c7232512ecmsh926b30c1f237918p16f551jsn25e3f3ebee17',
    'X-RapidAPI-Host': 'rapid-linkedin-jobs-api.p.rapidapi.com'
  }
};

try {
	const { data } = await axios.request(options);
	console.log(data)

} catch (error) {
	console.error(error);
}

console.log(arg);


    }
)

const initialState = {
    data: [] as  any,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    status: 'idle'



}


const JobSlice =createSlice({
    name:'Job',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getAllJobs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.status = 'fulifiled'
                state.data = action?.payload
            })
            .addCase(getAllJobs.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.status = 'pending'
            })
            .addCase(getAllJobs.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload as string
                state.status = 'rejected'
            })

    }

})

export default JobSlice.reducer
export const { } = JobSlice.actions
