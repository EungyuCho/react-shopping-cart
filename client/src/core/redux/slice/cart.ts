import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit'
import { Cart } from 'src/types/dto'
import { cartApi } from '../api'

const fetchCartList = createAsyncThunk('cart/fetchCartList', async (_, __) => {
  const response = await cartApi.fetchCarts()
  return response.data
})

interface CartItem extends Cart {
  quantity: number
}

const initialState = {
  cartItems: [],
  currentRequestId: undefined,
  error: null,
  loading: 'idle',
} as {
  cartItems: CartItem[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: null | SerializedError
  currentRequestId: undefined | string
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getState(state) {
      console.log('[CART DATA] ', state)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartList.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
          state.currentRequestId = action.meta.requestId
        }
      })
      .addCase(fetchCartList.fulfilled, (state, action) => {
        const { requestId } = action.meta

        if (state.loading === 'pending' && state.currentRequestId === requestId) {
          state.loading = 'idle'
          state.cartItems = action.payload
          state.currentRequestId = undefined
        }
      })

      .addCase(fetchCartList.rejected, (state, action) => {
        const { requestId } = action.meta

        if (state.loading === 'pending' && state.currentRequestId === requestId) {
          state.loading = 'idle'
          state.error = action.error
          state.currentRequestId = undefined
        }
      })
  },
})

export const { getState } = cartSlice.actions
export { fetchCartList }
export default cartSlice.reducer
