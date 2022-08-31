import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { InitialProfile } from '../../models/models'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getInitialProfile: builder.query<InitialProfile, any>({
      query: () => '/users/kirillmihalych',
    }),
    getSearchProfile: builder.query({
      query: (query) => `/search/users?q=${query}`,
      transformResponse: (result: any) => {
        return console.log(result.items)
      },
    }),
  }),
})

export const { useGetInitialProfileQuery, useGetSearchProfileQuery } = apiSlice
