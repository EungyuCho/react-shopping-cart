import { css } from '@emotion/react'
import { useSearchParams } from 'react-router-dom'
import { useOrderDetailQuery } from '../../core/redux/service/order'

const OrderDetail = () => {
  let [searchParams] = useSearchParams()
  const { data: order, isLoading } = useOrderDetailQuery(Number(searchParams.get('orderId')))

  console.log('ddd', order)
  if (isLoading) {
    return <div>loading...</div>
  }

  if (!order) {
    return <div>주문 정보가 없어요.</div>
  }

  return (
    <div
      css={css`
        padding: 50px 240px;
      `}
    >
      {JSON.stringify(order.orderDetails)}
    </div>
  )
}

export default OrderDetail
