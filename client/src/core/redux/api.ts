import axios from 'axios'

const DEFAULT_URL = 'http://localhost:3003'

const cartApi = {
  fetchCarts: async () => axios.get(DEFAULT_URL + '/carts'),
  deleteCartItem: async (productId: number) =>
    axios.delete(DEFAULT_URL + '/carts', {
      data: { productId },
    }),
}

export { cartApi }
