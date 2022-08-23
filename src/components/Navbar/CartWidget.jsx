import React from 'react'
import styled from 'styled-components'

const CartWidget = () => {
  return (
    <Cart>
        <i class="ri-shopping-cart-2-line"></i>
    </Cart>
    
  )
}

export default CartWidget

const Cart = styled.i`

font-size: 45px;
margin-right: 23px;
color: #E0D7E6;

`
