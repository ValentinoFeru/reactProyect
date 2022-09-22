import React from 'react'
import Item from './Item'

const ItemList = ({data = []}) => {
  return (
    data.map(bebida => <Item key={bebida.id} info={bebida} />)
  )
}

export default ItemList
