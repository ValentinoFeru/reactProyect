import React from 'react'
import styled from 'styled-components'

const ItemListContainer = ({ greeting, color }) => {
    return (
        <Greet>
            <div>
                {greeting}
            </div>

        </Greet>

    )
}

export default ItemListContainer

const Greet = styled.div`
color: black;
padding: 20px;
background-color: aliceblue;
`