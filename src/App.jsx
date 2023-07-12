import './App.css'
import Header from './components/header'
import { ItemListContainer } from './components/itemListContainer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ProductDetail from './pages/product-detail'

function App() {

  return (
    <>
      <Header logo="Espri"/>
      <ItemListContainer/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
