import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { marvelApi } from "../services/marvelApi";
import apiParams from "./../../utils/marvelHash";

const marvelAdapter = createEntityAdapter();

const initialState = marvelAdapter.getInitialState();

export const extendedMarvelSlice = marvelApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => {
        return {
          url: `characters?ts=${apiParams.ts}&apikey=${apiParams.apikey}&hash=${apiParams.hash}`,
        };
      },

      providesTags: ["Marvel"],
    }),
  }),
});

export const { useGetCharactersQuery } = extendedMarvelSlice;

export const selectCharactersResult =
  extendedMarvelSlice.endpoints.getCharacters.select();

const selectCharactersData = createSelector(
  selectCharactersResult,
  (result) => result.data
);

export const { selectAll: selectAllMarvel } = marvelAdapter.getSelectors(
  (state) => state.marvel
);

export const { setMarvel } = marvelSlice.actions;

export const selectMarvel = (state) => state.marvel.marvel;

export default marvelSlice.reducer;
