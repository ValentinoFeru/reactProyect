import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom';

function NavBar() {


  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <div className='nav-container'>

          <div className='init'>
            <h2><span>Soft</span> Drinks</h2>
            <FontAwesomeIcon className='carrito' icon={faMartiniGlassCitrus} />
          </div>

          <div className="side">
            <CartWidget />

            <div className={`links ${clicked ? 'active' : ''}`}>
              <NavLink to='/' >Home</NavLink>
              <NavLink to='/categoria/whisky' >Whisky</NavLink>
              <NavLink to='/categoria/vodka'>vodka</NavLink>
              <NavLink to='/'>Contacto</NavLink>
              <NavLink to='/'>Redes</NavLink>
            </div>
            <div className='burger'>
              <BurgerButton clicked={clicked} handleClick={handleClick} />
            </div>


          </div>

        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>




      </NavContainer>

    </>
  )
}

export default NavBar

const NavContainer = styled.nav`

padding: .4rem;
background-color: #333;


.nav-container{
display: flex;
align-items: center;
justify-content: space-between;
}


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
