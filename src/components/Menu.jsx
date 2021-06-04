import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import logo from '../images/SouffleLogo/Digital/SVG/Souffle_Logo_BLANC_RGB.svg'
import shop from '../images/shopBag.svg'

const Menu = props => {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#1408D4' }} light expand="mr-auto" fixed="top">
        <NavbarBrand>
          <img style={{ width: '40%' }} src={logo} alt="first" />
        </NavbarBrand>
        <Nav className="d-flex flex-row bd-highlight" navbar>
          <NavItem>
            <NavLink style={{ color: 'white', marginRight: '50px', marginTop: '8px', marginLeft: '50px' }}>ACCUEIL</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: 'white', marginRight: '50px', marginTop: '8px', marginLeft: '50px', textDecoration: 'underline' }}>NOTRE DIFFÉRENCE</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ marginRight: '50px', marginLeft: '50px', marginTop: '5px' }}>
              <img style={{ width: '80%' }} src={shop} alt="first" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Menu
