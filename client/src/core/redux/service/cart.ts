import { Cart, Product } from '../../../types/dto'
import emptySplitApi from './common'

export const cartApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    cartList: builder.query<Cart[], void>({
      query: () => `carts`,
    }),
    addCart: builder.query<{ status: number }, Product>({
      query: (product) => ({
        url: '/carts',
        method: 'POST',
        body: product,
      }),
    }),
  }),
})

export const { useCartListQuery } = cartApi
