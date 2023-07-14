import React, { useEffect, useState } from 'react'
import './Home.css'
import { bringFilms } from '../../services/apiCalls'
import { Container, Row } from 'react-bootstrap'
import { MovieCard } from '../../common/movieCard/MovieCard'

export const Home = () => {


const[films, setFilms]=useState([])


  useEffect(()=>{
    bringFilms()
    .then((res)=>{
        setFilms(res);
      })
    .catch((error)=>{console.log("Error llamada: ",error)})
  },[])


  return (
    <>
      <Container fluid>
        <Row className='d-flex align-items-center justify-content-center py-3'>
          {films.map((card)=>{
            return (<MovieCard key={card.id} img={card.poster_path} title={card.title} description={card.overview} {...card} />)
          })}
        </Row>
      </Container>
    </>
  )
}
