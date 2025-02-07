import { useEffect, useState } from 'react'
import ProductPaging from '../../components/Product/ProductPaging'
import ProductCardList from '../../components/Product/ProductList'
import { css } from '@emotion/react'
import { useProductListQuery } from '../..//core/redux/service/product'

const ProductList = () => {
  const [page, setPage] = useState(1)
  const { data: products, isLoading: productIsLoading } = useProductListQuery(page)

  if (productIsLoading) {
    return <div>loading...</div>
  }

  return (
    <div
      css={css`
        padding: 50px 240px;
      `}
    >
      <ProductCardList products={products?.data ?? []} />
      <ProductPaging currentPage={page} setPage={setPage} maxPage={products?.total_pages ?? 1} />
    </div>
  )
}

export default ProductList
