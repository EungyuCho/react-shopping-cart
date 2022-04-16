import { useCartQuery } from '../../core/redux/service/cart'

const Cart = () => {
  const { data: cart, isLoading } = useCartQuery()

  if (isLoading) {
    return <div>loading...</div>
  }

  console.log(cart)
  return <div>카트 페이지입니다.</div>
}

export default Cart
