import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { submitCartItems } from '../../core/redux/slice/cart'
import colors from '../../constants/colors'
import { getCartCheckedProductCount, getCartItemTotalPrice, getCartSubmitItems } from '../../core/redux/store'
import { useNavigate } from 'react-router-dom'

const SubmitOrderSection = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitItems = useSelector(getCartSubmitItems)
  const selectedCartItemLength = useSelector(getCartCheckedProductCount)

  const onSubmitCartItems = () => {
    const submitCartItemsConfirmed = confirm(selectedCartItemLength + '개의 상품을 주문할까요?')

    if (!submitCartItemsConfirmed) {
      return
    }

    console.log('dd? 왜 안대냐')

    dispatch(submitCartItems())
    navigate('/cartSubmit')
  }

  return (
    <SubmitOrderSectionContainer>
      <div
        css={css`
          display: flex;
          align-items: center;
          padding: 16px 30px;
        `}
      >
        <h3
          css={css`
            display: flex;
            align-items: center;
            font-size: 24px;
            font-weight: 400;
          `}
        >
          결제금액
        </h3>
      </div>
      <hr className="divide-line-thin" />
      <div>
        <div className="flex justify-between p-20 mt-20">
          <span className="highlight-text">총 결제금액</span>
          <span className="highlight-text">
            {submitItems
              .map((item) => item.quantity * item.product.price)
              .reduce((prev, cur) => prev + cur, 0)
              .toLocaleString()}
            원
          </span>
        </div>
        <div className="flex-center mt-30 mx-10">
          <SubmitOrderButton className="flex-center" onClick={onSubmitCartItems}>
            주문하기({submitItems.length}개)
          </SubmitOrderButton>
        </div>
      </div>
    </SubmitOrderSectionContainer>
  )
}
const SubmitOrderButton = styled.button`
  background: #2ac1bc;
  font-size: 24px;
  color: white;
  width: 100%;
  padding: 20px;
  border: none;
`

const SubmitOrderSectionContainer = styled.section`
  width: 35%;
  height: 330px;
  margin-left: 5%;
  margin-top: 80px;
  border: 1px solid ${colors.black200};
`
export default SubmitOrderSection
