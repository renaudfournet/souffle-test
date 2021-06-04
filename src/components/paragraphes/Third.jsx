import React from 'react'
import first from '../../images/Souffle_AD_2.jpg'

function Third() {
  return (
    <>
      <div style={{ padding: '40px' }}>
        <h2 style={{ color: '#FA5C26', marginTop: '50px' }}>3</h2>
        <h3 style={{ color: '#1408D4', marginLeft: '230px', marginRight: '230px', marginTop: '20px', fontSize: '30px' }}>VOUS DONNER ENVIE DE RECEVOIR</h3>
        <div style={{ color: '#1408D4', marginLeft: '230px', marginRight: '230px', marginTop: '20px', marginBottom: '30px', fontFamily: 'Copernicus' }}>
          <p>
            Notre mission : vous reconnecter ensemble autour de la cuisine, dans la cuisine. Nous avons mis le coeur pour designer des produits aussi fonctionnels que beaux. Et nous espérons qu'ils vous donneront envie de recevoir pour épater et Soufflé
            vos proches.
          </p>
        </div>
      </div>
      <img style={{ width: '100%', paddingRight: '30px', paddingLeft: '30px' }} src={first} alt="first" />
    </>
  )
}

export default Third
