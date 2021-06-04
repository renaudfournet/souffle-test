import React from 'react'
import header from '../images/Souffle_AD_7.jpg'

function Header() {
  return (
    <div>
      <img style={{ width: '100%' }} src={header} alt="Logo" />
      <h2 style={{ color: '#FA5C26', position: 'absolute', top: '200px', left: '100px', width: '100%', height: '100px', textAlign: 'left', fontWeight: 'bold' }}>
        <span>POUR QUE LA CUISINE SOIT AU COEUR DE NOS VIES</span>
      </h2>
    </div>
  )
}

export default Header
