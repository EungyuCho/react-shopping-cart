import { configureStore, createSelector } from '@reduxjs/toolkit'
import { cartApi } from '../service/cart'
import { productApi } from '../service/product'
import cartReducer from '../slice/cart'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartApi.middleware),
})

const getCartLoadingStatus = (state: RootState) => state.cart.loading
const getCartItems = (state: RootState) => state.cart.cartItems

export { getCartLoadingStatus, getCartItems }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
