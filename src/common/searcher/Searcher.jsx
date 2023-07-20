import { Container, Row, Col } from 'react-bootstrap'
import './Searcher.css'

export const Searcher = ({changeValue}) => {

  return (
    <>
      <Container >
          <Row className='d-flex align-items-center justify-content-center'>
              <Col className='py-1 col-input-searcher' xs={12} md={6}>
                  <div className="d-flex align-items-center justify-content-center box-input-searcher">
                      <input type="text" onChange={(e)=>changeValue(e.target.value)}  placeholder="Buscar..." className="textbox input-searcher p-2" />  
                  </div>
              </Col>
          </Row>
      </Container>
    </>
  )
}
