import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems, getCartLoadingStatus } from '../../core/redux/store'
import { fetchCartList } from '../../core/redux/slice/cart'
import styled from '@emotion/styled'
import CartHeader from './CartHeader'
import CartBillSection from './CartBillSection'
import CartItemListSection from './CartItemListSection'
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

  return (
    <CartSection>
      <CartHeader />
      <div className="detail-container">
        <CartItemListSection cartItems={cartItems} />
        <CartBillSection />
      </div>
    </CartSection>
  )
}

const CartSection = styled.section`
  padding: 24px 300px;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .detail-container {
    display: flex;
  }
`

export default Cart
