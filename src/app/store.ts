import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import profilesReducer from '../features/profiles/profilesSlice'

export const store = configureStore({
  reducer: {
    profiles: profilesReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
