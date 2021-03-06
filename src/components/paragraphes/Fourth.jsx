import React from 'react'
import first from '../../images/Souffle_AD_2.jpg'

function Fourth() {
  return (
    <>
      <div style={{ padding: '40px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#FA5C26', marginTop: '50px' }}>4</h2>
          <h3 style={{ color: '#1408D4', marginLeft: '230px', marginRight: '230px', marginTop: '20px', fontSize: '30px' }}>FAIRE DU BIEN À NOTRE PLANÈTE EN FABRIQUANT DES PRODUITS DURABLES</h3>
          <div style={{ color: '#1408D4', marginLeft: '230px', marginRight: '230px', marginTop: '20px', marginBottom: '30px', fontFamily: 'Copernicus' }}>
            <p>
              Le meilleur moyen que nous avons trouvé pour minimiser l'impact environnemental de nos produits est de les rendre éternels, ou presque. Des produits qui durent au moins une vie afin d'en finir avec le renouvellement perpétuel de nos poêles et
              casseroles si désastreux pour notre planète.
            </p>
          </div>
        </div>
        <img style={{ width: '100%', paddingRight: '30px', paddingLeft: '30px' }} src={first} alt="first" />
      </div>
    </>
  )
}

export default Fourth
