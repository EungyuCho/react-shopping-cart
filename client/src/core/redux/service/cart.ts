import { Cart, Product } from '../../../types/dto'
import emptySplitApi from './common'
import { productApi } from './product'

export const cartApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    cartList: builder.query<Cart[], void>({
      query: () => `carts`,
    }),
    addCart: builder.mutation<{ status: number }, Product>({
      query: (product) => ({
        url: '/carts',
        method: 'POST',
        body: { product },
      }),
      invalidatesTags: (_, __, product) => {
        return [{ type: 'Product', id: product.id }, 'Cart']
      },
      onCacheEntryAdded(_) {
        productApi.util.updateQueryData('productList', undefined, (productList) => {
          const targetProduct = productList.data.find((product) => product.id === product.id)

          if (!targetProduct) {
            return
          }
          targetProduct.isCartEntered = true
        })
      },
    }),
  }),
})

export const { useCartListQuery, useAddCartMutation } = cartApi
