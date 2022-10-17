import React, { useState } from 'react';
import ItemCount from './../ItemListContainer/ItemCount';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { screen } from '../../constants/screen';
import Loader from '../loader/Loader';

const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();
    const [loading, setLoading] = useState(true);

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }



    return (
        <Detailed>
            <div className='container'>
                <div className={ loading ? '' : 'card'}>
                    <div className={ loading ? '' : 'card__content'}>
                        <img onLoad={() => setLoading(false)} className='datail__image' src={data.image} alt="" />
                        {
                            loading ?

                                <Loader />

                                :

                                <div>
                                    <h1>{data.title}</h1>
                                    <p><i>{data.desc}</i></p>
                                    {
                                        goToCart
                                            ? <Link className='terminar' to='/cart'>
                                                <button className="cssbuttons-io-button"> Terminar compra
                                                    <div className="icon">
                                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                                    </div>
                                                </button>
                                            </Link>
                                            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                                    }

                                </div>

                        }

                    </div>
                </div>
            </div>
        </Detailed>
    )
}

export default ItemDetail;

const Detailed = styled.div`

.container{
    display: flex;
    justify-content: center;
    align-items: center;
}


.card {
    width: 100%;
    border-radius: 20px;
    padding: 5px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
}

@media (min-width: ${screen.sm}px){
    .card{
        width: 70%;
    }
}

.card__content {
    background: #fff;
    border-radius: 17px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    h1{
        color: #181718cc;
        text-align: center;
        font-weight: bold;
    }
    p{
        color: #615c5c;
        margin: 23px;
    }

    img{
    height: 300px;
    width: 300px;
    align-self: center; 
}

.terminar{
    margin: 23px;
    display: flex;
    justify-content: center;
    align-items: center;

.cssbuttons-io-button {
    background: #A370F0;
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #714da6;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
}

.cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    right: 0.3em;
    transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #7b52b9;
}

.cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
    transform: scale(0.95);
}

}
}



`