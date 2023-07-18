import React, { useEffect } from 'react'
import {  Link } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap';
import './MovieCard.css'




export const MovieCard = ({img,type ,title,description,id,...props}) => {

  console.log(props)
  const movie = React.useRef(null)
  let height =0;
  let width =0;
  
  useEffect(()=>{

    if(movie && movie.current){
  
      height = movie.current.clientHeight;
      width = movie.current.clientWidth;

    }
      /*Functions */
      const functionMouseMove = (evt) =>{
        const {layerX, layerY} = evt
        const yRotation = (
            (layerX - width / 2) / width
        )*2
        const xRotation = (
            (layerY - height / 2) / width
        )*2

        const stringStyle = `
        perspective(500px)
        scale(1.01)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`

        movie.current.style.transform = stringStyle
      }
      const functionMouseOut = () =>{
      movie.current.style.transform = `
      perspective(500px)
      scale(1)
      rotateX(0)
      rotateY(0)`
      }

  movie.current.addEventListener('mousemove', functionMouseMove);
  movie.current.addEventListener('mouseout', functionMouseOut);

  


  return function cleanUpListener() 
  {
    if(movie.current){
      movie.current.removeEventListener("mousemove", functionMouseMove)
      movie.current.removeEventListener("mouseout", functionMouseOut)
    }
  }

}, [])




  return (
    <Card ref={movie} className='box-card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img
      ?'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+img
      :'./../../public/no-image.png' //Poner imagen por defecto
    }/>
      <Card.Body>
        <Card.Title className='title-card'>{title}</Card.Title>
        {description 
        ?<Card.Text className='info-card'>{description}</Card.Text>
        :<Card.Text > -Without description- </Card.Text>}
        
      </Card.Body>
      <Row className='box-button-card'>
        <Link className='button-card py-2'  to={`/${type}/${id}`}>Ver detalle</Link>
      </Row>
    </Card>
  )
}
