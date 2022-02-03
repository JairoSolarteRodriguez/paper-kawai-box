import './App.css';
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Categories from './pages/categories/Categories'
import Cart from './pages/cart/Cart'
import Navbar from 'components/Navbar/Nabar';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:best' element={<Products/>}/>
        <Route path='/products/search/:catSearch' element={<Products/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
