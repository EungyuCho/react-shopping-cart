import { useOrderListQuery } from '../../core/redux/service/order'

const OrderList = () => {
  const { data: orders, isLoading } = useOrderListQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }
  return <div>{JSON.stringify(orders)}</div>
}

export default OrderList
