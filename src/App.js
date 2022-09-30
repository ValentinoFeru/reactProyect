import './App.css';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>

          <NavBar />

          
          
          
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

        </CartProvider>

      </BrowserRouter>

    </>
  );
}

export default App;