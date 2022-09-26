import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../../app/store'
import { SingleProfile, IProfile } from '../../interfaces/interfaces'

interface StateProfiles {
  single_profile: SingleProfile
  single_profile_repos: never[]
  profiles: any
  status: string
  sort: string
}

const initialState = {
  single_profile: <SingleProfile>{},
  single_profile_repos: [],
  profiles: [],
  status: 'idle',
  sort: '',
} as StateProfiles

export const fetchProfiles = createAsyncThunk(
  'profiles/fetchProfiles',
  async (url: string) => {
    try {
      const response = await axios.get<IProfile[]>(url)
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
      const response = await axios.get<SingleProfile>(url)
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

interface textValue {
  value: string
}

export interface ServerResponse {
  total_count: number
  incomplete_results: boolean
  items: IProfile[]
}

export const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<textValue>) {
      const { value } = action.payload
      state.sort = value
    },
    sortProfiles(state) {
      if (state.sort == 'a') {
        state.profiles = state.profiles.sort(
          (a: { login: string }, b: { login: string }) => {
            return (
              a.login.localeCompare(b.login) - b.login.localeCompare(a.login)
            )
          }
        )
      }
      if (state.sort == 'z') {
        state.profiles = state.profiles.sort(
          (a: { login: string }, b: { login: string }) => {
            return (
              b.login.localeCompare(a.login) - a.login.localeCompare(b.login)
            )
          }
        )
      }
    },
  },
  extraReducers(builder) {
    // fetch list profiles
    builder
      .addCase(fetchProfiles.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchProfiles.fulfilled.type,
        (state, action: PayloadAction<any>) => {
          state.status = 'succeeded'
          state.profiles = action.payload.items
        }
      )
      .addCase(fetchProfiles.rejected, (state) => {
        state.status = 'rejected'
      })
    // fetch single profile
    builder
      .addCase(fetchSingleProfile.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchSingleProfile.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = 'succeeded'
          state.single_profile = action.payload
        }
      )
      .addCase(fetchSingleProfile.rejected, (state) => {
        state.status = 'rejected'
      })
    // fetch repos
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchRepos.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded'
        state.single_profile_repos = action.payload
      })
      .addCase(fetchRepos.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})

export const selectProfiles = (state: RootState) => state.profiles

export const { setSort, sortProfiles } = profilesSlice.actions

export default profilesSlice.reducer
