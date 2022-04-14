import Nav from 'components/Nav'
import normalize from 'emotion-normalize'
import { css, Global } from '@emotion/react'
import { ReactNode } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Cart from 'pages/Cart'
import OrderList from 'pages/OrderList'
import ProductList from 'pages/ProductList'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        height: auto;
      `}
    >
      {children}
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Global
        styles={css`
          ${normalize}
        `}
      />
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="productList" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orderList" element={<OrderList />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
