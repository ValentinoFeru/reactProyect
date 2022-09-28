import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';




const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'items', detalleId);
    getDoc(queryDoc)
    .then(res => setData({ id: res.id, ...res.data() }))
  }, [detalleId])

  return (
    <Wawa>
<div className='main-container'>
  <ItemDetail data={data} />
</div>
    </Wawa>
    
  )
}

export default ItemDetailContainer

const Wawa = styled.div`

.main-container{
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

`
