import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("companise/fetchData", async()=>{
    const response =await fetch("https://api.github.com/organizations");
    const data =await response.json();
    return data;
});

const initialState ={
    data:[],
    isLoadeing:false,
    error:null,
};

// cases: pending, sucesss, rejected

const companiseReducer = createSlice({

    name:"companise",
    initialState:initialState,
    reducers:{},

    extraReducers:(builder)=>{
    builder.addCase(fetchData.pending, (state)=>{
    state.isLoadeing = true;
      })
      //fulfilled = sucesss
     .addCase(fetchData.fulfilled, (state,action)=>{
    state.data = action.payload;
    state.isLoadeing = false;
      })
      .addCase(fetchData.rejected, (state,action)=>{
    state.isLoadeing = false;
    state.error = action.error.message;
      });
    }, 
});

export default companiseReducer.reducer;