import React from 'react'
import { useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import styled from 'styled-components';


const FinishedOrder = () => {

    const params = useParams();
    console.log(params)
    const { cart, totalPrice } = useCartContext();


    return (

        <MyOrder>
            <div className='order-content'>


                <p className='felicidades'>Felicidades !, <span> tu compra ha sido completada con exito</span></p>

                {
                    cart.map(product =>
                        <div className='orden-finalizada'>
                            <h1>{product.title}</h1>
                            <p>Precio c/u: {product.price}</p>
                            <p>Cantidad: {product.quantity}</p>
                        </div>)
                }
                <div className='total'>
                <p>Total: <span>${totalPrice()}</span></p>
                </div>




            </div>

        </MyOrder>

    )
}

export default FinishedOrder;

const MyOrder = styled.div`

.order-content{

    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .felicidades{
        font-size: 75px;
        color: #03b803;
        font-weight: bold;
        span{
            font-size: 50px;
            color: #b3b9b3f4;
        }
    }
    
    
    .orden-finalizada{  
        width: 800px;
        border: 1px dashed black;
        background-color: #dddbdb;
        padding: 30px;
        p{
            font-size: 20px;
        }
    }

    .total{
        width: 800px;
        border: 1px dashed black;
        background-color: #dddbdb;
        padding: 20px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        span{
            color: #178117;
        }
    }

}

`