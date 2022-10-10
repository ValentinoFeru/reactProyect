import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../loader/Loader';




const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))

        }

    }, [categoriaId])

    return (
        <List>
            {
                data && data.length > 0 ?
                <div className='gang'>
                        <ItemList data={data} />
                    </div>
                    :
                    <div className='loader-container'>
                        <Loader />
                    </div>

            }


        </List>


    )
}

export default ItemListContainer

const List = styled.div`

.gang{
    display: flex;
    text-align: center;
    justify-content: center;
}

.loader-container{
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

`


