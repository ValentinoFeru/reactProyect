import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Item = ({ info }) => {

    

    return (
        
            <Cartas>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={info.image}/>
                    <Card.Body>
                        <Card.Title>{info.title}</Card.Title>
                        <Card.Text>
                            <p className='precio'>${info.price}</p>
                        </Card.Text>
                        <Link to={`/detalle/${info.id}`}><Button>Agregar al carrito</Button></Link>
                    </Card.Body>
                </Card>
            </Cartas>
            

    )
}

export default Item;

const Cartas = styled.div`

.precio{
    color: green;
    font-weight: bold;
}

margin: 13px;

`
