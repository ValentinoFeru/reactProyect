import './App.css';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartProvider from './context/CartContext';
import FinishedOrder from './components/Cart/FinishedOrder';
import Login from './components/Login/Login';
import UserProvider from './context/UserContext';

function App() {
  return (
    <>
    <div className='App'>

      <BrowserRouter>
        <UserProvider>
        <CartProvider>
          <div className='navegador-container'>
          <NavBar />
          </div>

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/terminar/:id' element={<FinishedOrder/>} />
            <Route path='/login' element={<Login/>} />  
          </Routes>

        </CartProvider>
        </UserProvider>
          
          

      </BrowserRouter>
    </div>

    </>
  );
}

export default App;