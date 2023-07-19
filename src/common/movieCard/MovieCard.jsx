import React, { useEffect } from 'react'
import {  Link } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap';
import './MovieCard.css'




export const MovieCard = ({img,type ,title,description,id,...props}) => {

  // console.log(props)
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
      <Row className='d-flex px-2 justify-content-center alignt-items-center box-button-card'>
        <Col className='d-flex justify-content-center alignt-items-center' xs={8} md={10}>
          <Link className='button-card py-2 px-3 '  to={`/${type}/${id}`}>Ver detalle</Link>
        </Col>
        <Col className='d-flex justify-content-center alignt-items-center' xs={4} md={2}>
          <Button className=' py-2'  onClick>
            <svg className='button-card-img' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <g>
                <path d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07Z" opacity=".16">
                </path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657a5 5 0 0 1 7.07-7.071a5 5 0 0 1 7.072 7.071Z">
                </path>
              </g>
            </svg>
          </Button>
        </Col>
      </Row>
    </Card>
  )
}
