import React, { useState } from 'react'
import { useUserContext } from '../../context/UserContext'
import { useCartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
    const {user} = useUserContext();

    const { cart, totalPrice } = useCartContext()
    const navigate = useNavigate();

    const order = {
        buyer: user,
        items: cart.map(product => ({ id: product.id, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }


    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => navigate('/terminar/' + id))
    }
    const { setUser } = useUserContext()
    const onSubmit = (e) => {
        e.preventDefault();
        setUser(inputs)
    }

    const [inputs, setInput] = useState({ mail: "", name: "", surname: "" })
    const onChange = (property, e) => setInput({ ...inputs, [property]: e.target.value })

    return (
        <div className='login-container'>
            <form onSubmit={onSubmit}>

                <label>
                    Name:
                    <input type="text" value={inputs.name} onChange={(e) => onChange("name", e)} />
                </label>
                <label>
                    Apellido:
                    <input type="text" value={inputs.surname} onChange={(e) => onChange("surname", e)} />
                </label>

                <label>
                    Correo Electronico:
                    <input type="email" value={inputs.mail} onChange={(e) => onChange("mail", e)} />
                </label>
                
                    <input className='boton-enviar' onClick={handleClick} type="submit" value="Submit" />
                
            </form>
        </div>
    )
}

export default Login

