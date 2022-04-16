import { Cart } from '../../../types/dto'
import emptySplitApi from './common'

export const cartApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    cart: builder.query<Cart, number | void>({
      query: () => `carts`,
    }),
  }),
})

export const { useCartQuery } = cartApi
