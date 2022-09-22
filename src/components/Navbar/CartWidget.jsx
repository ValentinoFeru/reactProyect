import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
const {totalProducts} = useCartContext();

  return (
    <Cart>

      <Link to='/cart'><i className='ri-shopping-cart-2-line'></i></Link>
        
        <span>{totalProducts() || ''}</span>
    </Cart>
    
  )
}

export default CartWidget

const Cart = styled.i`

font-size: 45px;
margin-right: 23px;
color: #E0D7E6;

span{
  font-size: 30px;
  margin-left: -13px;
}

`
