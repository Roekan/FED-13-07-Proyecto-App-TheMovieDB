import React from 'react'
import {NavLink} from 'react-router-dom'
import{ Container, Col, Row } from 'react-bootstrap'
import Logo from './../../../public/logo/logo.png'
import './Footer.css'

export const Footer = () => {
  return (
    <>
    <Container fluid>
      <Row className='box-footer' >
        <Col className='d-flex align-items-center justify-content-center box-links-footer my-2 box-link-footer' sm={12} md={4} lg={4}>
        <NavLink  to="/" className='mx-3 link-footer' >Peliculas</NavLink>
        <NavLink  to="series" className='mx-3 link-footer' >Series</NavLink>
        <NavLink  to="search" className='mx-3 link-footer' >Top20</NavLink>
        </Col>
        <Col  sm={12} md={4} lg={4}>
        
        </Col>
        <Col className=' d-flex align-items-center justify-content-center flex-column' sm={12} md={4} lg={4}>
        <a href="/FED-13-07-Proyecto-App-TheMovieDB/" className='py-1' ><img className='logo-footer' src={Logo} /></a>

        <span className='creative-commons-footer'>
          <a  rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            <img className='img-creative-commons' alt="Licencia de Creative Commons"  src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" />
          </a>
          <br />
          Este obra está bajo una 
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            licencia de Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional
          </a>.
        </span>

        </Col>
      </Row>
    </Container>
    </>
  )
}
