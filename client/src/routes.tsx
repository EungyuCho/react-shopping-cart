import Cart from 'pages/Cart'
import OrderList from 'pages/OrderList'
import ProductList from 'pages/ProductList'
import { Route, Routes } from 'react-router-dom'

export type NavigateRoute = '/' | 'productList' | 'cart' | 'orderList'

const CleanCodeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="productList" element={<ProductList />} />
      <Route path="cart" element={<Cart />} />
      <Route path="orderList" element={<OrderList />} />
    </Routes>
  )
}
