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
            color: #355335f4;
        }
    }
    
    
    .orden-finalizada{  
        width: 800px;
        border: 1px dashed black;
        padding: 30px;
        p{
            font-size: 20px;
        }
    }

    .total{
        width: 800px;
        border: 1px dashed black;
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

.loader {
    margin-top: 60px;
    position: relative;
    transform: scale(2);
    border-radius: 50%;
    border: 1px solid;
    width: 30px;
    height: 30px;
    color: #000000;
}

.loader::after {
    position: absolute;
    width: 0px;
    height: 10px;
    display: block;
    border-left: 1px solid #000000;
    content: '';
    left: 14px;
    border-radius: 1px;
    top: 4px;
    animation-duration: 1s;
}

.loader::before {
    position: absolute;
    width: 0px;
    height: 10px;
    display: block;
    border-left: 1px solid #000000;
    content: '';
    left: 14px;
    border-radius: 1px;
    top: 4px;
    animation-duration: 40s;
}

.loader::before,.loader::after {
    transform-origin: bottom;
    animation-name: dial;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes dial {
    0% {
    transform: rotate(0deg);
}

100% {
    transform: rotate(360deg);
}
}


`