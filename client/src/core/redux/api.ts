import axios from 'axios'

const DEFAULT_URL = 'http://localhost:3003'

const cartApi = {
  fetchCarts: async () => axios.get(DEFAULT_URL + '/carts'),
}

export { cartApi }
