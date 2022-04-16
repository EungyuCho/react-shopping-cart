import { Product } from '../../../types/dto'
import emptySplitApi, { ListResponse } from './common'

export const productApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    listProduct: builder.query<ListResponse<Product>, number | void>({
      query: (page = 1) => `products?page=${page}`,
      providesTags: (result, error, arg) => (result ? [...result.data.map(({ id }) => ({ type: 'Product' as const, id })), 'Product'] : ['Product']),
    }),
  }),
})

export const { useListProductQuery } = productApi
