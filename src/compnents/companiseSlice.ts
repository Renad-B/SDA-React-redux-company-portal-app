import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CompaniesState } from '../type'
import Companies from './Companies'

//Adjustment-call for the Api for fetching the data
export const fetchData = createAsyncThunk('Companies/fetchData', async () => {
  try {
    const response = await fetch('https://api.github.com/organizations')
    // Checking if there is any issue with the network response
    if (!response.ok) {
      throw new Error('Network response error')
    }
    const data = await response.json()
    return data
  } catch (error) {
    // Checking if there is any issue during the fetch process
    console.log(error)
    throw error
  }
})

// for single company 
export const fetchCompany = createAsyncThunk('Companies/fetchCompany', async (id: number) => {
  try {
    const response = await fetch(`https://api.github.com/orgs/${id}`);
    // Checking if there is any issue with the network response
    if (!response.ok) {
      throw new Error('Network response error')
    }
    const data = await response.json()
    return data
  } catch (error) {
    // Checking if there is any issue during the fetch process
    console.log(error)
    throw error
  }
})
const initialState: CompaniesState = {
  data: [],
  isLoading: false,
  error: null ,
  searchTerm: '',
  singleCompany: null
};

// cases: pending, sucesss, rejected
const companiseSlice = createSlice({
  name: 'companise',
  initialState: initialState,
  reducers: {
    searchCompany: (state, action) => {
      state.searchTerm = action.payload
    },
    sortCompanise: (state, action) => {
      const sortingCompany = action.payload
      console.log(sortingCompany)
      if (sortingCompany === 'login') {
        state.data.sort((a, b) => a.login.localeCompare(b.login))
      } else if (sortingCompany === 'id') {
        state.data.sort((a, b) => a.id - b.id)
      }
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      //fulfilled = sucesss
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error Occured';
      })
      //single company
      .addCase(fetchCompany.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      //fulfilled = sucesss
      .addCase(fetchCompany.fulfilled, (state, action) => {
        state.singleCompany = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCompany.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error Occured';
      });
  }
});

export const { searchCompany, sortCompanise } = companiseSlice.actions
export default companiseSlice.reducer
