import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../App';

type FavoriteState = {
  itens: Produto[];
};

const initialState: FavoriteState = {
  itens: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    adicionarAosFavorito(state, action: PayloadAction<Produto>) {
      const produto = action.payload;
      const existe = state.itens.find((p) => p.id === produto.id);

      if (existe){
        state.itens = state.itens.filter((p) => p.id !== produto.id);

      } else {
        state.itens.push(produto);
      }
    },
  },
});

export const { adicionarAosFavorito } = favoriteSlice.actions;
export default favoriteSlice.reducer;
