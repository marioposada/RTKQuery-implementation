import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marvelApi = createApi({
  reducerPath: "marvelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gateway.marvel.com/v1/public/",
  }),
  tagTypes: ["Marvel"],
  endpoints: (builder) => ({}),
});
