import styled from '@emotion/styled'

const CartHeader = () => (
  <CartHeaderContainer>
    <h2>장바구니</h2>
    <hr />
  </CartHeaderContainer>
)

const CartHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  hr {
    margin-top: 20px;
    width: 100%;
    border: 2px solid black;
  }
`

export default CartHeader
