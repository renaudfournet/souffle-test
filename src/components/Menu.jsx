import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import logo from '../images/SouffleLogo/Digital/SVG/Souffle_Logo_BLANC_RGB.svg'

const Menu = props => {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#1408D4' }} light expand="mr-auto">
        <NavbarBrand>
          <img style={{ width: '30%' }} src={logo} alt="first" />
        </NavbarBrand>
        <Nav className="d-flex flex-row-reverse bd-highlight" navbar>
          <NavItem>
            <NavLink style={{ color: 'white', marginRight: '30px', marginLeft: '30px' }}>Accueil</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: 'white', marginRight: '30px', marginLeft: '30px' }}>Notre Différence</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: 'white', marginRight: '30px', marginLeft: '30px' }}>Shop</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Menu
