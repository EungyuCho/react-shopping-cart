import styled from '@emotion/styled'
import { useCallback, useEffect, useMemo } from 'react'
import colors from '../../constants/colors'

const ProductPaging = ({ currentPage, maxPage, setPage }: ProductPagingProps) => {
  const { currentLastPage, pages } = useMemo(() => {
    const currentStartPage = Math.floor(currentPage / 10) * 10 + 1
    const currentLastPage = Math.min(currentStartPage + 9, maxPage + 1)
    const pages = [...Array(currentLastPage - currentStartPage).keys()].map((page) => page + currentStartPage)

    return { currentLastPage, pages }
  }, [currentPage])

  const isExistNextPage = currentLastPage < maxPage

  const changeProductPage = useCallback(
    (page: number) => () => {
      if (page === currentPage) {
        return
      }

      setPage(page)
    },
    [currentPage],
  )

  return (
    <ProductPagingContainer>
      {pages.map((page) => (
        <ProductPageButtonContainer key={'page-' + page} onClick={changeProductPage(page)} clicked={page === currentPage}>
          {page}
        </ProductPageButtonContainer>
      ))}
      {isExistNextPage && (
        <ProductPageButtonContainer key={'page-next' + currentLastPage + 1} clicked={false} onClick={changeProductPage(currentLastPage + 1)}>
          {'>'}
        </ProductPageButtonContainer>
      )}
    </ProductPagingContainer>
  )
}

interface ProductPagingProps {
  maxPage: number
  currentPage: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const ProductPagingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 50px 0px;
`

const ProductPageButtonContainer = styled.a<{ clicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 38px;
  height: 38px;
  font-size: 14px;
  border-radius: 0px;
  margin-left: --1px;
  line-height: 20px;

  border: 1px solid ${(props) => (props.clicked ? colors.tomato400 : colors.black100)};
  color: ${(props) => (props.clicked ? colors.tomato400 : colors.black300)};
  ${(props) => props.clicked && { cursor: 'default' }};
`

export default ProductPaging
