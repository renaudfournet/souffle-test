import { Col, Form, FormGroup, Input, Row } from 'reactstrap'
import S from '../../src/images/Souffle_Monogram_BLANC_RGB.png'
import insta from '../../src/images/Groupe151.svg'
import facebook from '../../src/images/Groupe153.svg'
import twitter from '../../src/images/Groupe155.svg'
import linkedin from '../../src/images/Groupe157.svg'

const font = { fontFamily: 'Copernicus' }
const margin = { margin: '20px' }

const image = { width: '5%', margin: '10px' }

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: '#1408D4', color: 'white', padding: '50px' }}>
        <div style={{ textAlign: 'left' }}>
          <Row xs="3">
            <Col>
              <img src={S} alt="logo footer" />
            </Col>
            <Col>
              <div style={margin}>
                <h4>INSCRIPTION E-MAIL</h4>
                <p style={font}>Inscrivez-vous pour faire partie des premiers et premières à recevoir nos actualités</p>
                <Form>
                  <FormGroup>
                    <Input type="email" name="email" id="Email" placeholder="email" />
                  </FormGroup>
                </Form>
              </div>
            </Col>
            <Col>
              <h4 style={margin}>SUIVEZ-NOUS</h4>
              <div style={margin}>
                <img style={image} src={insta} alt="logo footer" />
                <img style={image} src={facebook} alt="logo footer" />
                <img style={image} src={twitter} alt="logo footer" />
                <img style={image} src={linkedin} alt="logo footer" />
              </div>
            </Col>
          </Row>
          <hr style={{ backgroundColor: 'white' }} />
          <Row xs="4">
            <Col>
              <div style={margin}>
                <h4>SOUFFLÉ</h4>
                <p style={font}>Notre différence</p>
                <p style={font}>Nous rejoindre</p>
              </div>
            </Col>
            <Col>
              <div style={margin}>
                <h4>ASSISTANCE</h4>
                <p style={font}>Nous contacter</p>
              </div>
            </Col>
            <Col>
              <div style={margin}>
                <h4>COMPTE</h4>
                <p style={font}>Suivre une commande</p>
                <p style={font}>Créer un compte</p>
                <p style={font}>Se connecter</p>
              </div>
            </Col>
            <Col>
              <div style={margin}>
                <h4>JURIDIQUE</h4>
                <p style={font}>Conditions générales de ventes</p>
                <p style={font}>Protection des données Mentions égales</p>
              </div>
            </Col>
          </Row>
          <hr style={{ backgroundColor: 'white' }} />
        </div>
        <Row>
          <Col>
            <p>Copyright</p>
          </Col>
          <Col>
            <p>Website Carbon</p>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer
