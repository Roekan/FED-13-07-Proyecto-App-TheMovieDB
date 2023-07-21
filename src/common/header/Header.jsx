import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Col, Container, Row } from 'react-bootstrap';
import Logo from './../../../public/logo/logoInvertido.png'
import { getFavorites } from './../../reducers/sliceFavorites'
import { useSelector } from 'react-redux';


export const Header = () => {

  let rdxCartFavorites = useSelector(getFavorites);

  console.log(rdxCartFavorites.favorites.length)

  return (
    <>
      <Container fluid className=' box-header'>
            <Row className='d-flex align-items-center justify-content-between '>
              <Col className='d-flex align-items-center justify-content-center  py-2' xs={12} md={1} lg={1}>
              <a href="/FED-13-07-Proyecto-App-TheMovieDB/" ><img className='logo-header' src={Logo} /></a>
              </Col>
              <Col className='d-flex align-items-center justify-content-end pe-5' xs={12} md={9} lg={9}>
                <Row className=' d-flex align-items-center justify-content-center py-1 '>
                  <Col className='d-flex align-items-center justify-content-center py-1 box-link-header ' xs={6} md={3}> <NavLink to="/" className= "link-header">Películas</NavLink> </Col>
                  <Col className='d-flex align-items-center justify-content-center py-1 box-link-header ' xs={6} md={3}> <NavLink to="series" className=' link-header' >Series</NavLink> </Col>
                  <Col className='d-flex align-items-center justify-content-center py-1 box-link-header ' xs={6} md={3}> <NavLink to="top20" className=' link-header' >Top 20</NavLink> </Col>
                  <Col className='d-flex align-items-center justify-content-center py-1 box-link-header ' xs={6} md={3}> 
                    <Col><NavLink to="favorites" className=' link-header' >Favoritos<span className='cantFavoritos'>{ rdxCartFavorites.favorites.length>0 && `(${rdxCartFavorites.favorites.length})`}</span></NavLink> 
                    </Col>
                  </Col>
                </Row>
              </Col>
            </Row>
      </Container>
    </>
  )
}
