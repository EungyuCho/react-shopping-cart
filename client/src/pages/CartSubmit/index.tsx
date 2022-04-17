import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { getCartSubmitItems } from '../../core/redux/store'
import PageHeader from '../../components/Header/PageHeader'

const CartSubmit = () => {
  const submitItems = useSelector(getCartSubmitItems)
  return (
    <SubmitSection>
      <PageHeader title="주문/결제" />
    </SubmitSection>
  )
}

const SubmitSection = styled.section`
  padding: 24px 300px;
`

export default CartSubmit
