import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../../app/store'
import SingleProfile from './SingleProfile'

interface SingleProfile {
  login: string
  name: string
  bio: string
  blog: string
  company: string
  followers: number
  public_repos: number
  avatar_url: string
  html_url: string
  location: string
}

const initialState = {
  profiles: [],
  single_profile: <SingleProfile>{},
  single_profile_repos: [],
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

export const fetchSingleProfile = createAsyncThunk(
  'profiles/fetchSingleProfile',
  async (url: string) => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

export const fetchRepos = createAsyncThunk(
  'profiles/fetchRepos',
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
    // fetch list profiles
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
    // fetch single profile
    builder
      .addCase(fetchSingleProfile.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchSingleProfile.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.single_profile = action.payload
      })
      .addCase(fetchSingleProfile.rejected, (state) => {
        state.status = 'rejected'
      })
    // fetch repos
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.single_profile_repos = action.payload
      })
      .addCase(fetchRepos.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})

export const selectProfiles = (state: RootState) => state.profiles

export default profilesSlice.reducer
