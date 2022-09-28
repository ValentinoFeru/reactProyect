import React from 'react'
import Item from './Item'
import styled from 'styled-components'
import { screen } from '../../constants/screen';

const ItemList = ({data = []}) => {
  return (
    <Greet>
    <div className='ganga'>
      {data.map(bebida => <Item key={bebida.id} info={bebida} />)}
    </div>
    </Greet>
  )
}

export default ItemList

const Greet = styled.div`
.ganga{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}


@media (min-width: ${screen.sm}px) {
    .ganga{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
}
}

@media (min-width: ${screen.md}px) {
    .ganga{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
}

@media (min-width: ${screen.lg}px) {
    .ganga{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
}
`
