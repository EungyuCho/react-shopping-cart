import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'
import { Cart } from 'src/types/dto'
import { cartApi } from '../api'

const [CART_PRODUCT_MIN_QUANTITY, CART_PRODUCT_MAX_QUANTITY] = [1, 20]

const initialState = {
  cartItems: [],
  currentRequestId: undefined,
  error: null,
  loading: 'idle',
} as CartState

const getProduct = (cartItems: WritableDraft<CartItem>[], productId: number) => {
  const product = cartItems.find((product) => product.id === productId)

  if (!product) {
    throw new Error('invalid Product!!')
  }

  return product
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // @TODO:: delete this funtcion (for Debug)
    getState(state) {
      console.log('[CART DATA] ', state)
    },
    toggleProduct(state, action: PayloadAction<{ productId: number }>) {
      const product = state.cartItems.find((product) => product.id === action.payload.productId)
      if (!product) {
        return
      }

      product.isChecked = !product.isChecked
    },
    changeProductQuantity(state, action: PayloadAction<{ productId: number; quantity: number }>) {
      const quantity = action.payload.quantity
      if (quantity < CART_PRODUCT_MIN_QUANTITY || quantity > CART_PRODUCT_MAX_QUANTITY) {
        return
      }

      const product = getProduct(state.cartItems, action.payload.productId)
      product.quantity = action.payload.quantity
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
          state.cartItems = action.payload.map((cartItem) => ({ ...cartItem, quantity: 1, isChecked: false }))
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

const fetchCartList = createAsyncThunk('cart/fetchCartList', async (_, __) => {
  const response = await cartApi.fetchCarts()
  return response.data as Cart[]
})

export const { getState } = cartSlice.actions
export { fetchCartList }
export default cartSlice.reducer

interface CartItem extends Cart {
  quantity: number
  isChecked: boolean
}

interface CartState {
  cartItems: CartItem[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: null | SerializedError
  currentRequestId: undefined | string
}
