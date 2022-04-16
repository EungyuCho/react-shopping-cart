import { useCartListQuery } from '../../core/redux/service/cart'

const Cart = () => {
  const { data: cart, isLoading } = useCartListQuery()

  if (isLoading) {
    return <div>loading...</div>
  }

  return <div>카트 페이지입니다.</div>
}

export default Cart
