import {configureStore} from '@reduxjs/toolkit';
 import marvelSlice from './features/marvelSlice';
 import { marvelApi } from './services/marvelApi';

export const store = configureStore({
    reducer: {
        marvel: marvelSlice,
        [marvelApi.reducerPath]: marvelApi.reducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marvelApi.middleware),
});


