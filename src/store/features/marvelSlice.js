import {createSelector,createEntityAdapter} from '@reduxjs/toolkit'
import { marvelApi } from '../services/marvelApi';
import apiParams from "./../../utils/marvelHash";

const marvelAdapter = createEntityAdapter()

const initialState = marvelAdapter.getInitialState()

export const extendedMarvelSlice = marvelApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => {
        return {
          url: `characters?ts=${apiParams.ts}&apikey=${apiParams.apikey}&hash=${apiParams.hash}`,
        };
      }
    }),
  }),
  overrideExisting: false,
})

export const { setMarvel } = marvelSlice.actions;

export const selectMarvel = (state) => state.marvel.marvel;

export default marvelSlice.reducer;
