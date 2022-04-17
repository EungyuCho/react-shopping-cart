import { css } from '@emotion/react'
import { useSelector } from 'react-redux'
import { getCartSubmitItems } from '../../core/redux/store'

const CartSubmit = () => {
  const submitItems = useSelector(getCartSubmitItems)
  return (
    <div
      css={css`
        padding: 50px 240px;
      `}
    >
      {JSON.stringify(submitItems)}
    </div>
  )
}

export default CartSubmit
