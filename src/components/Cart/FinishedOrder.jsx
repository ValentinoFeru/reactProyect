import React from 'react'
import styled from 'styled-components';


const FinishedOrder = () => {



    return (

        <MyOrder>
            <div className='congrats'>

                <p>Felicidades !, <span> tu compra esta siendo procesada</span></p>

                <div className="loader"></div>

            </div>

        </MyOrder>

    )
}

export default FinishedOrder;

const MyOrder = styled.div`

.congrats{
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        color: #02ca02;
        font-weight: bold;
        font-size: 60px;

    }

    span{
        color: #000000d2;
        font-size: 50px;
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
}

`