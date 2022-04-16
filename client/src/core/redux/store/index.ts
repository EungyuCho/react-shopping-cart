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

const getCartItemTotalPrice = createSelector(getCartItems, (cartItems) => {
  return cartItems
    .filter((cartItem) => cartItem.isChecked)
    .map((cartItem) => cartItem.quantity * cartItem.product.price)
    .reduce((prev, curr) => prev + curr, 0)
})

const getCartItemAllChecked = createSelector(getCartItems, (cartItems) => {
  return cartItems.filter((cartItem) => cartItem.isChecked).length === cartItems.length
})

export { getCartLoadingStatus, getCartItems, getCartItemTotalPrice, getCartItemAllChecked }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
