import React, { useEffect, useState } from 'react'
import { bringSeriesPagination } from '../../services/apiCalls'
import { Container, Row, Pagination, Col } from 'react-bootstrap'
import { MovieCard } from '../../common/movieCard/MovieCard'

export const Series = () => {


const[films, setFilms]=useState([])
const [page, setPage]=useState(1)
const [totalPages, setTotalPages]=useState(1)


  useEffect(()=>{
    bringSeriesPagination(page)
    .then((res)=>{
        setFilms(res.results);
        setTotalPages(res.total_pages)
      })
    .catch((error)=>{console.log("Error llamada: ",error)})
  },[page])



  const cambiarPagina=(pag)=>{
    console.log(pag)
    let pagina = pag
    if(pagina<1){
        pagina=1;
    }
    if(pagina>totalPages){
      pagina=totalPages;
  }
    setPage(pagina)
}




  return (
    <>
      <Container className='box-cards'>
        <Row className='d-flex align-items-top justify-content-center py-3'>
          {films.map((card)=>{
            return (<MovieCard key={card.id} img={card.poster_path} title={card.title} description={card.overview} {...card} />)
          })}
        </Row>
        <Row className='d-flex align-items-center justify-content-center py-3'>
          <Col className='d-flex align-items-center justify-content-center' >
            <Pagination>
              
                <Pagination.Prev disabled={page<=1} onClick={()=>{cambiarPagina(page-1)}} />
                  <Pagination.Item onClick={()=>{cambiarPagina(1)}}>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                      {page>1 && <Pagination.Item onClick={()=>{cambiarPagina(page-1)}}>{page-1}</Pagination.Item>}
                        <Pagination.Item active>{page}</Pagination.Item>
                      {page<totalPages && <Pagination.Item onClick={()=>{cambiarPagina(page+1)}}>{page+1}</Pagination.Item>}
                    <Pagination.Ellipsis />
                  <Pagination.Item onClick={()=>{cambiarPagina(totalPages)}}>{totalPages}</Pagination.Item>
                <Pagination.Next disabled={page>=totalPages} onClick={()=>{cambiarPagina(page+1)}} />
                
              
            </Pagination>
          </Col>
        </Row>
      </Container>
    </>
  )
}
