import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import logo from '../images/SouffleLogo/Digital/SVG/Souffle_Logo_BLANC_RGB.svg'

const Menu = props => {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#1408D4' }}>
        <NavbarBrand>
          <img style={{ width: '30%' }} src={logo} alt="first" />
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink style={{ color: 'white' }}>Accueil</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: 'white' }}>Notre Différence</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: 'white' }}>Shop</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Menu
