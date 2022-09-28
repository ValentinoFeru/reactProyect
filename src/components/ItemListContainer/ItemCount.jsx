import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));

    }, [initial])

    return (
        <Count>
            <div className='counter'>

                <button disabled={count <= 1} onClick={decrease}>-</button>
                <span>{count}</span>
                <button disabled={count >= stock} onClick={increase}>+</button>
                <div>
                    <button className='agregar' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar Al carrito</button>
                </div>
            </div>
        </Count>
    )
}

export default ItemCount;

const Count = styled.div`

.counter{
    width: fit-content;
    margin: auto;
    padding: 1rem;
    text-align: center;
    button{
        margin-top: 23px;
        padding: 10px;
        padding-left: 30px;
        padding-right: 30px;
    }
    .agregar{
        padding: 1.3em 3em;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 500;
        color: #000;
        background-color: #23c483;
        border: none;
        border-radius: 45px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
        
        :hover{
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
}

:active{
    transform: translateY(-1px);
}
    }
    span{

        padding: 20px;
    }
}
`