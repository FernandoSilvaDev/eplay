import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      //Função para que impeça de adicionar o mesmo jogo já adicionando no carrinho
      const game = state.items.find((item) => item.id === action.payload.id)

      if (!game) {
        // ! seria o mesmo de "game === underfined"
        state.items.push(action.payload)
      } else {
        alert('O jogo já está no carrinho')
      }
    },
    //Remover o item do carrinho.
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    //Abrir o carrinho
    open: (state) => {
      state.isOpen = true
    },
    //Fechar o carrinho
    close: (state) => {
      state.isOpen = false
    },
    //Limpar o carrinho quando finalizar a compra
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
