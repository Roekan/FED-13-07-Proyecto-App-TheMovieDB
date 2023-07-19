import { createSlice } from "@reduxjs/toolkit";

export const sliceFavorites = createSlice({
    name: 'favorites',
    initialState: {
      favorites: []
    },
    reducers: {
      addFavorites: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      deleteFavorites: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
    }
    
});

//exporto las ACCIONES.....
export const { addFavorites, deletdeleteFavoriteseFindings } = sliceFavorites.actions;

export const getFavorites = (state) => state.favorites;

export default sliceFavorites.reducer;