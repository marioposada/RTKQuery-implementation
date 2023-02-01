import {createSelector,createEntityAdapter} from '@reduxjs/toolkit'

const marvelAdapter = createEntityAdapter()

const initialState = marvelAdapter.getInitialState()

export const marvelSlice = createSlice({
  name: "marvel",
  initialState: {
    marvel: [{ name: "Spiderman" }, { name: "Ironman" }],
  },
  reducers: {
    setMarvel: (state, action) => {
      state.marvel = action.payload;
    },
  },
});

export const { setMarvel } = marvelSlice.actions;

export const selectMarvel = (state) => state.marvel.marvel;

export default marvelSlice.reducer;
