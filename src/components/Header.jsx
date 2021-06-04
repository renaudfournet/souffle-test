import React from 'react'
import header from '../images/SouffleIllustrations/PillarIllustrations/Illustrations_Education _scene/Digital/JPG/Education_scene_RGB.jpg'

function Header() {
  return (
    <div>
      <h2 style={{ letterSpacing: '2px', color: '#FA5C26', position: 'absolute', top: '20%', left: '10%', width: '20%', textAlign: 'left', fontWeight: 'bold' }}>POUR QUE LA CUISINE SOIT AU COEUR DE NOS VIES</h2>
      <img style={{ width: '100%' }} src={header} alt="Logo" />
    </div>
  )
}

export default Header
