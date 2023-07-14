import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Col, Container, Row } from 'react-bootstrap';



export const Header = () => {
  return (
    <>
    <Container fluid className=' box-header'>
 
          <Row className='d-flex align-items-center justify-content-around '>
            <Col className='d-flex align-items-center justify-content-center  py-2' xs={12} md={1} lg={1}>
              <img className='logo-header' src="./../../public/logo/logoInvertido.png"  />
            </Col>
            <Col className='d-flex align-items-center justify-content-left  py-2' xs={4} md={4} lg={4}>
              
            </Col>
            <Col  xs={12} md={6} lg={6}>
              <Row className=' d-flex align-items-center justify-content-around  py-1 '>
                <Col className='d-flex align-items-center justify-content-center box-link-header' xs={3}> <a href="/FED-13-07-Proyecto-App-TheMovieDB/" className='link-header' >Home aaa</a> </Col>
                <Col className='d-flex align-items-center justify-content-center box-link-header' xs={3}> <a href="/FED-13-07-Proyecto-App-TheMovieDB/top20" className='link-header' >Top 20</a> </Col>
                <Col className='d-flex align-items-center justify-content-center box-link-header' xs={3}> <a href="/FED-13-07-Proyecto-App-TheMovieDB/search" className='link-header' >Buscador</a> </Col>
              </Row>
            </Col>

        
      </Row>
    </Container>
    </>
    
  )
}
