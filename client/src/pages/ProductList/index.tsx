import { useState } from 'react'
import { useListProductQuery } from '../../core/redux/service/product'

const ProductList = () => {
  const [page, setPage] = useState(1)
  const { data: products, isLoading, isFetching } = useListProductQuery(page)

  if (isLoading) {
    return <div>loading</div>
  }

  console.log('products', products)

  return <div>상품목록 페이지입니다.</div>
}

export default ProductList
