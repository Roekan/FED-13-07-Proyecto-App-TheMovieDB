import React, { useEffect, useState } from 'react'
import { bringTop20Films, bringTop20Series } from '../../services/apiCalls'
import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import { MovieCard } from '../../common/movieCard/MovieCard'
import './Top20.css'



export const Top20 = () => {

  const[films, setFilms]=useState([])
  const[series, setSeries]=useState([])

  
  useEffect(()=>{
    bringTop20Films()
    .then((res)=>{
        setFilms(res.results);
      })
    .catch((error)=>{console.log("Error llamada: ",error)})
  },[])


  useEffect(()=>{
    bringTop20Series()
    .then((res)=>{
      setSeries(res.results);
      })
    .catch((error)=>{console.log("Error llamada: ",error)})
  },[])







  return (

    <Container className='box-cards'>
      <Row className='box-linkTop ' >
        <Tabs className=' d-flex align-items-center justify-content-center my-4 linkTop' mountOnEnter variant="pills" defaultActiveKey="films">
          <Tab  eventKey="films" title="Peliculas">
          <Row className='d-flex align-items-top justify-content-center py-3'>
            {films.map((card)=>{
              return (<MovieCard key={card.id} img={card.poster_path} title={card.title} description={card.overview} {...card} />)
            })}
          </Row>
          </Tab>
          <Tab  eventKey="series" title="Series">
            <Row className='d-flex align-items-top justify-content-center py-3'>
              {series.map((card)=>{
                return (<MovieCard key={card.id} img={card.poster_path} title={card.title} description={card.overview} {...card} />)
              })}
            </Row>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  )
}
