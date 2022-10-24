import React from 'react'
import { Link } from 'react-router-dom';  
import styled from 'styled-components';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';


const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <NoElements>
          <div className='container-principal-2'>
            <p>No hay elementos en el carrito :(</p>
            <Link to='/'>
              <button className="cta">
                <span className="hover-underline-animation"> Comprar ahora </span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                  <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
              </button>
            </Link>
          </div>

        </NoElements>

      </>
    )
  }


  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <Order>
        <div className='container-principal'>
          <p>
            Total: <span>${totalPrice()}</span>
          </p>
          
        <Link to='/login'>
          <button className='comprar'>
            Comprar
          </button>
        </Link>
          
          


          <button onClick={() => clearCart()} className="noselect"><span className="text">
            Vaciar</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>

        </div>
      </Order>

    </>
  )
}

export default Cart

const NoElements = styled.div`

.container-principal-2{
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    font-size: 30px;
    margin-bottom: 23px;
    color: #dddbdb;
  }
}

.cta {
  border: none;
  background: none;
}

.cta span {
  padding-bottom: 7px;
  letter-spacing: 4px;
  font-size: 14px;
  padding-right: 15px;
  text-transform: uppercase;
}

.cta svg {
  transform: translateX(-8px);
  transition: all 0.3s ease;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active svg {
  transform: scale(0.9);
}

.hover-underline-animation {
  position: relative;
  color: #dddbdb;
  padding-bottom: 20px;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #dddbdb;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.cta:hover .hover-underline-animation:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

`

const Order = styled.div`

.container-principal{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    font-weight: bold;
    color: #dddbdb;
    span{
      color: #19aa19;
    }
  }
}

.comprar{
  margin-bottom: 13px;
  padding: 12px;
  padding-left: 44px;
  padding-right: 44px;
  background-color: #0dd60dc0;
  border: .5px solid black;
  border-radius: 9px;
  :hover{
    background-color: #19aa19;
  }
}


.noselect {
  width: 150px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: red;
  border: none;
  border-radius: 5px;
  background: #e62222;
}

.noselect, .noselect span {
  transition: 200ms;
}

.noselect .text {
  transform: translateX(35px);
  color: white;
  font-weight: bold;
}

.noselect .icon {
  position: absolute;
  border-left: 1px solid #c41b1b;
  transform: translateX(110px);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.noselect svg {
  width: 15px;
  fill: #eee;
}

.noselect:hover {
  background: #ff3636;
}

.noselect:hover .text {
  color: transparent;
}

.noselect:hover .icon {
  width: 150px;
  border-left: none;
  transform: translateX(0);
}

.noselect:focus {
  outline: none;
}

.noselect:active .icon svg {
  transform: scale(0.8);
}

`