import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems, getCartLoadingStatus } from '../../core/redux/store'
import { fetchCartList } from '../../core/redux/slice/cart'
const Cart = () => {
  const dispatch = useDispatch()
  const loadingStatus = useSelector(getCartLoadingStatus)
  const cartItems = useSelector(getCartItems)

  const fetchOneUser = async () => {
    await dispatch(fetchCartList())
  }

  useEffect(() => {
    fetchOneUser()
  }, [])

  if (loadingStatus !== 'idle') {
    return <div>Loading...</div>
  }

  return <div>{JSON.stringify(cartItems)}</div>
}

export default Cart
