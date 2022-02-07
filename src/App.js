import './App.css';
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Categories from './pages/categories/Categories'
import Navbar from 'components/Navbar/Nabar';
import Footer from 'components/Footer/Footer';
import Cart from 'pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/products' element={<Products/>}/>
          <Route exact path='/products/:best' element={<Products/>}/>
          <Route exact path='/products/search/:catSearch' element={<Products/>}/>
          <Route exact path='/categories' element={<Categories/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
