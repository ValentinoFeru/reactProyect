import React,{useState} from 'react';
import ItemCount from './../ItemListContainer/ItemCount';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data,quantity);
    }

    return (
        <Detailed>
            <div className="container">
                <div className='detail'>
                    <img className='datail__image' src={data.image} alt="" />
                    <div className="content">
                        <h1>{data.title}</h1>
                        <p><i>{data.desc}</i></p>
                        {
                            goToCart
                            ? <Link to='/cart'>terminar compra</Link>
                            : <ItemCount initial={1} stock={5} onAdd={onAdd}/> 
                        } 
                    </div>

                </div>
            </div>
        </Detailed>
    )
}

export default ItemDetail;

const Detailed = styled.div`

img{
    height: 300px;
    width: 300px;
}
    .container{
        width: 98%;
        margin: auto;
    }

    .detail{
        margin-top: 3rem;
        margin-bottom: 3rem;
        width: 100%;
        display: flex; 
        flex-wrap: wrap;
    }

    .content{
        width: 100%;
    }



    @media screen and (min-width: 768px) {
        .container{
            width: 70%;
        }

        .detail__image{
            width: 50%;
        }

        .content{
            padding-left: 3rem;
            width: 50%;
        }
        
    }

`