import React from 'react'
import{ Container, Col, Row } from 'react-bootstrap'
import Logo from './../../../public/logo/logoInvertido.png'

export const Footer = () => {
  return (
    <>
    <Container fluid>
      <Row className='bg-dark py-4' >
        <Col className='bg-danger' sm={12} md={4} lg={4}>
        <a href="search" className=' link-header' >Peliculas</a>
        <a href="search" className=' link-header' >Series</a>
        <a href="search" className=' link-header' >Top20</a>
        </Col>
        <Col className='bg-warning' sm={12} md={4} lg={4}>
        
        </Col>
        <Col className='bg-info' sm={12} md={4} lg={4}>
        <a href="/FED-13-07-Proyecto-App-TheMovieDB/" className=' link-header' ><img className='logo-header' src={Logo} /></a>
        </Col>
      </Row>
    </Container>
    </>
  )
}
