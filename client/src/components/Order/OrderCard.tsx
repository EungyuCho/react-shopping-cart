import { css } from '@emotion/react'
import styled from '@emotion/styled'
import colors from '../../constants/colors'
import { Order, OrderDetail } from '../../types/dto'

const OrderCard = ({ order, enableShowDetail = false }: OrderCardProps) => {
  return (
    <div>
      <div
        className="flex items-center justify-between"
        css={css`
          height: 92px;
          padding: 0 25px;
          background-color: ${colors.white200};
          border: 1px solid ${colors.black250};
        `}
      >
        <CartHeaderText>주문번호: {order.id}</CartHeaderText>
        {enableShowDetail && <CartHeaderText>상세보기 {'>'}</CartHeaderText>}
      </div>
      {order.orderDetails.map((orderDetail) => (
        <OrderDetailCard key={order.id + '-' + orderDetail.id} orderDetail={orderDetail} />
      ))}
    </div>
  )
}

const OrderDetailCard = ({ orderDetail }: { orderDetail: OrderDetail }) => {
  return (
    <div
      css={css`
        display: 'flex';
        padding: 38px 25px;
        border: 1px solid ${colors.black250};
      `}
    >
      <div className="flex justify-between">
        <div className="flex">
          <ProductImage src={orderDetail.imageUrl} />
          <div className="flex-col">
            <span
              css={css`
                font-size: 24px;
                margin-bottom: 12px;
              `}
            >
              {orderDetail.name}
            </span>
            <span
              css={css`
                font-size: 20px;
                color: ${colors.black400};
              `}
            >
              {orderDetail.price} / 수량: {orderDetail.quantity}개
            </span>
          </div>
        </div>
        <div
          css={css`
            width: 138px;
            height: 47px;
          `}
        >
          <CartButton>장바구니</CartButton>
        </div>
      </div>
    </div>
  )
}

interface OrderCardProps {
  order: Order
  enableShowDetail?: boolean
}

const CartHeaderText = styled.span`
  font-size: 20px;
  font-weight: 400;
`

const ProductImage = styled.img`
  width: 141px;
  height: 141px;
  margin-right: 33px;
`

const CartButton = styled.button`
  background: ${colors.primary};
  font-size: 20px;
  color: white;
  padding: 14px 28px;
  border: none;
  cursor: pointer;
`

export default OrderCard
