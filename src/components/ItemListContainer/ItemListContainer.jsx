import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';

const bebidas = [
    { id: 1, price: 58200, image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/968/403/products/jw-blue1-558c78caaec75a813815899491518538-640-0.jpg", category: 'whisky', desc: 'Johnnie Walker Blue Label es una obra maestra sin igual: una exquisita combinación de los whiskies más raros y excepcionales de Escocia. Solo uno de cada diez mil barriles tiene la calidad, el carácter y el sabor escurridizos para ofrecer un sabor distintivo. Un whisky extraordinario para ocasiones extraordinarias.', title: "Blue Label" },
    { id: 2, price: 11700, image: "https://whiskypedia.com.ar/wp-content/uploads/2019/11/JW-Red-Label-750ml.jpg", category: 'whisky', desc:'Una ráfaga de etiqueta roja golpea el paladar con la frescura del agua de una ola al estrellarse, seguido por el sabor de las especias aromáticas y, finalmente, un largo y persistente, acabado humeante.', title: "Red Label" },
    { id: 3, price: 1585, image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/871/106/products/vodka-smirnoff1-11d292c21c224c9b9f16002812336502-1024-1024.png", desc: 'Smirnoff es un vodka de origen ruso, de 37,5% alc./vol., obtenido por triple destilación del alcohol de grano, y filtrado por carbón. Se trata de una variante con sabor, cuya pureza y neutralidad pretenden resaltar el sabor de la fruta, y que es comercializado como ideal para preparar exóticas mezclas.', category: 'vodka', title: "Smirnoff" },
];

const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(bebidas);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(whisky => whisky.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }

    }, [categoriaId])

    return (
        <Greet>
            <Container className='gang'>
                <ItemList data={data} />
            </Container>
        </Greet>

    )
}

export default ItemListContainer

const Greet = styled.div`
.gang{
    display: flex;
    justify-content: center;
    align-items: center;
}
`

