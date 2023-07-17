import React, { useEffect, useState } from 'react'
import { bringFilms } from '../../services/apiCalls'
import { Container, Row } from 'react-bootstrap'
import { MovieCard } from '../../common/movieCard/MovieCard'
import './Home.css'

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
      <Container className='box-cards'>
        <Row className='d-flex align-items-top justify-content-center py-3'>
          {films.map((card)=>{
            return (<MovieCard key={card.id} id={card.id} img={card.poster_path} title={card.title} description={card.overview} {...card} />)
          })}
        </Row>
      </Container>
    </>
  )
}
