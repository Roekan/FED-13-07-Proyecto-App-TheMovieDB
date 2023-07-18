import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Col, Container, Row } from 'react-bootstrap';
import Logo from './../../../public/logo/logoInvertido.png'


export const Header = () => {
  return (
    <>
    <Container fluid className=' box-header'>
 
          <Row className='d-flex align-items-center justify-content-around '>
            <Col className='d-flex align-items-center justify-content-center  py-2' xs={12} md={1} lg={1}>
            <a href="/FED-13-07-Proyecto-App-TheMovieDB/" ><img className='logo-header' src={Logo} /></a>
            </Col>
            <Col  xs={12} md={8} lg={8}>
              <Row className=' d-flex align-items-center justify-content-around  py-1 '>
                <Col className='d-flex align-items-center justify-content-center py-1 box-link-header ' xs={6} md={3}> <NavLink to="/" className= "link-header">Películas</NavLink> </Col>
                <Col className='d-flex align-items-center justify-content-center py-1 box-link-header ' xs={6} md={3}> <NavLink to="series" className=' link-header' >Series</NavLink> </Col>
                <Col className='d-flex align-items-center justify-content-center py-1 box-link-header ' xs={6} md={3}> <NavLink to="top20" className=' link-header' >Top 20</NavLink> </Col>
                <Col className='d-flex align-items-center justify-content-center py-1 box-link-header ' xs={6} md={3}> <NavLink to="search" className=' link-header' >Buscador</NavLink> </Col>
              </Row>
            </Col>
          </Row>
    </Container>
    </>
    
  )
}