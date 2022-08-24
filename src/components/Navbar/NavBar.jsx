import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMartiniGlassCitrus} from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'

function NavBar() {


  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <div className='init'>
        <h2><span>Soft</span> Drinks</h2>
        <FontAwesomeIcon className='carrito' icon={faMartiniGlassCitrus} />
        </div>
        
        <div className="side">
        <CartWidget/>

        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/">Home</a>
          <a onClick={handleClick} href="/">Bebidas</a>
          <a onClick={handleClick} href="/">Sobre Nosotros</a>
          <a onClick={handleClick} href="/">Contacto</a>
          <a onClick={handleClick} href="/">Redes</a>
        </div>
        <div className='burger'>
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>


        </div>
        
      </NavContainer>



    </>
  )
}

export default NavBar

const NavContainer = styled.nav`


.init {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 13px;
  h2{
  color: #fff;
  font-weight: 400;
  }
  span{
    font-weight: bold;
    color: #AF90C1;
    
  }
  .carrito{
    font-size: 40px;
    margin-left: 13px;
    color: #AF90C1;
}
}

padding: .4rem;
background-color: #333;
display: flex;
align-items: center;
justify-content: space-between;

a{
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
}

.side{
  display: flex;
  justify-content: center;
  align-items: center;
}

.links{
  position: absolute;
  top: -700px;
  left: -2000px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transition: all .5s ease;
  
  a{
    color: #333;
    font-size: 2rem;
    display: block;
  }
  @media (min-width: 768px) {
    position: initial;
    margin: 0;
    a{
      font-size: 1rem;
      color: #fff;
      display: inline;
    }
  }
}

.links.active{
  width: 100%;
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
  a{
    font-size: 2rem;
    margin-top: 1rem;
    color: #fff;
  }
  
}

.burger{
  @media (min-width: 768px){
    display: none;
}

}

`

const BgDiv = styled.div`
position: absolute;
background-color: #444;
top: -1000px;
left: -1000px;
width: 100%;
height: 100%;
transition: all .6s ease;
&.active{
  border-radius: 0 0 80% 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

`
