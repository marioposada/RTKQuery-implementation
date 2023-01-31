import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiParams from "./../../utils/marvelHash";


export const marvelApi = createApi({
  reducerPath: "marvelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gateway.marvel.com/v1/public/",
  }),

  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => {
      return {
        url: `characters?ts=${apiParams.ts}&apikey=${apiParams.apikey}&hash=${apiParams.hash}`,
        };
      }
    }),
  }),
});


export const {useGetCharactersQuery} = marvelApi;