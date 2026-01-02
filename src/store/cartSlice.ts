import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

type CartState = {
  itens: Produto[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      const existe = state.itens.find((p) => p.id === produto.id)

      if (!existe) {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarAoCarrinho } = cartSlice.actions
export default cartSlice.reducer
