import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import profilesReducer from '../features/profiles/profilesSlice'

export const store = configureStore({
  reducer: {
    profiles: profilesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
