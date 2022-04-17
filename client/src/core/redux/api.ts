import axios from 'axios'

const DEFAULT_URL = 'http://localhost:3003'

const cartApi = {
  fetchCarts: async () => axios.get(DEFAULT_URL + '/carts'),
  deleteCartItem: async (productIds: number[]) =>
    axios.delete(DEFAULT_URL + '/carts', {
      data: { productIds },
    }),
}

export { cartApi }
