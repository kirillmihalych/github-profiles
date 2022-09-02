import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../../app/store'

const initialState = {
  profiles: [],
  status: 'idle',
}

export const fetchProfiles = createAsyncThunk(
  'profiles/fetchProfiles',
  async (url: string) => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

export const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProfiles.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.profiles = action.payload.items
      })
      .addCase(fetchProfiles.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})

export const selectProfiles = (state: RootState) => state.profiles

export default profilesSlice.reducer
