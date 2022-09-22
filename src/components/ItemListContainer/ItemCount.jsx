import React,{useState, useEffect} from 'react'
import styled from 'styled-components'

const ItemCount = ({initial,stock,onAdd}) => {
    const [count,setCount] = useState(parseInt(initial));

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
                    <button disabled={stock <=0} onClick={() => onAdd(count)}>Agregar Al carrito</button>
                </div>
            </div>
        </Count>
    )
}

export default ItemCount;

const Count = styled.div`

.counter{
    width: fit-content;
    background-color: #AF90C1;
    margin: auto;
    padding: 1rem;
    text-align: center;
    border-radius: 20px;
    button{
        padding: 10px;
        padding-left: 30px;
        padding-right: 30px;
    }
    span{

        padding: 20px;
    }
}
`