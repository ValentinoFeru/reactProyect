import React from 'react'
import styled from 'styled-components'
import ItemCount from './ItemCount'

const ItemListContainer = ({ greeting, color }) => {

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`)
    }
    return (
        <Greet>
            <div>
                {greeting}
            </div>

            <ItemCount initial={1} stock={5} onAdd={onAdd}/>

        </Greet>

    )
}

export default ItemListContainer

const Greet = styled.div`
color: black;
padding: 20px;
background-color: aliceblue;
`
