import './App.css'
import Header from './components/header'
import { ItemListContainer } from './components/itemListContainer'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/home'
// import ProductDetail from './pages/product-detail'
import { CartProvider } from './context/cart-context'
import Router from './navigation'

function App() {

  return (
    <div>
      <CartProvider>
        <Header logo="Espri"/>
        <ItemListContainer/>
       <Router />
      </CartProvider>
    </div>

    // <>
    //   <Header logo="Espri"/>
    //   <ItemListContainer/>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/products/:productId' element={<ProductDetail />} />
    //   </Routes>
    // </>
  )
}

export default App
