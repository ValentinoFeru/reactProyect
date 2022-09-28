import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Item = ({ info }) => {



    return (

        <Cartas>

            <Link className='lili' to={`/detalle/${info.id}`}>
                <div className='card'>
                    <img src={info.image} alt={info.title} />
                    <h2 className='title'>{info.title}</h2>
                    <br />
                    <span className='price'>${info.price}</span>
                </div>
            </Link>

        </Cartas>


    )
}

export default Item;

const Cartas = styled.div`

.card {
    width: 11.875em;
    height: 16.5em;
    box-shadow: 0px 1px 13px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: all 120ms;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 0.5em;
    padding-bottom: 3.4em;


    ::after{
    display: none;
    content: "Add to Cart";
    padding-top: 1.25em;
    padding-left: 1.25em;
    position: absolute;
    left: 0;
    bottom: -30px;
    background: #00AC7C;
    color: #fff;
    height: 2.5em;
    width: 100%;
    transition: all 80ms;
    font-weight: 600;
    text-transform: uppercase;
}

:active{
    transform: scale(0.98);
}

.title{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3em;
    position: absolute;
    left: 0.325em;
    bottom: 1.3em;
    font-weight: 400;
    color: #181718cc;
    font-weight: bold;
    border-bottom: 1px solid black;
}

.price{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1em;
    position: absolute;
    left: 0.525em;
    bottom: 0.225em;
    color: #00AC7C;
}

}

.card:hover::after {
    bottom: 0;
}


.card:active::after {
    content: "Added !";
    height: 3.125em;
}

.text {
    
    max-width: 55px;
}

img {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
}

margin: 13px;

`
