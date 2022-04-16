import styled from '@emotion/styled'
import { productApi, ProductPageProductData } from '../../core/redux/service/product'
import CartImageUrl from '../../assets/svgs/cart.svg?url'
import { toast } from 'react-toastify'
import { useAddCartMutation } from '../../core/redux/service/cart'

const ProductCard = ({ product }: { product: ProductPageProductData }) => {
  const { name, price, imageUrl, isCartEntered } = product
  const [addCart] = useAddCartMutation()

  const onAddCartItem = () => {
    console.log('dd?', productApi.util.resetApiState)

    productApi.util.updateQueryData('productList', 1, (productList) => {
      console.log('dd?', productList)
      const target = productList.data.find((product) => product.id === product.id)

      console.log(target)
      if (!target) {
        return
      }
      target.isCartEntered = true
      console.log(target)
    })
    toast(`${product.name} 상품을 카트에 담았어요.`)
    addCart(product)
  }

  return (
    <CardContainer>
      <ProductImage src={imageUrl} alt={name ?? '상품 이미지'} />
      <ProductBottomContainer>
        <ProductInfoContainer>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price}</ProductPrice>
        </ProductInfoContainer>

        {!isCartEntered && (
          <CartImageContainer onClick={onAddCartItem}>
            <CartImage src={CartImageUrl} />
          </CartImageContainer>
        )}
      </ProductBottomContainer>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ProductImage = styled.img`
  max-width: 290px;
`

const ProductBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 280px;
`

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ProductName = styled.span`
  font-size: 12px;
`

const ProductPrice = styled.span`
  font-size: 16px;
`
const CartImageContainer = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;

  cursor: pointer;
`

const CartImage = styled.img`
  width: 24px;
  height: 24px;
`

export default ProductCard
