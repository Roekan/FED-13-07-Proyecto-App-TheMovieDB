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
            <a href="/FED-13-07-Proyecto-App-TheMovieDB/" className=' link-header' ><img className='logo-header' src={Logo} /></a>
            </Col>
            <Col  xs={12} md={6} lg={6}>
              <Row className=' d-flex align-items-center justify-content-around  py-1 '>
                <Col className='d-flex align-items-center justify-content-center box-link-header' xs={2}> <a href="/" className=' link-header' >Películas</a> </Col>
                <Col className='d-flex align-items-center justify-content-center box-link-header' xs={2}> <a href="series" className=' link-header' >Series</a> </Col>
                <Col className='d-flex align-items-center justify-content-center box-link-header' xs={2}> <a href="top20" className=' link-header' >Top 20</a> </Col>
                <Col className='d-flex align-items-center justify-content-center box-link-header' xs={2}> <a href="search" className=' link-header' >Buscador</a> </Col>
              </Row>
            </Col>

        
      </Row>
    </Container>
    </>
    
  )
}
