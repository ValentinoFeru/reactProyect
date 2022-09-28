import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './itemCart.css';

const ItemCart = ({ product }) => {
const {removeProduct} = useCartContext();

  return (
    <div className='item-cart'>
      <img src={product.image} alt={product.title} />
      <div>
        <p>Titulo: {product.title}</p>
        <p>cantidad: {product.quantity}</p>
        <p>Precio: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button className='boton-eliminar' onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default ItemCart