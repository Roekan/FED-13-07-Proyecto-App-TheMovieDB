import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import './MovieCard.css'




export const MovieCard = ({id,img,title,description,...props}) => {


const card = document.getElementById(`card-${id}`)

if(card){
  const height = card.clientHeight;
  const width = card.clientWidth;

  card.addEventListener('mousemove', (evt) =>{
      const {layerX, layerY} = evt
      const yRotation = (
          (layerX - width / 2) / width
      )*5
      const xRotation = (
          (layerY - height / 2) / width
      )*5
  
      const stringStyle = `
      perspective(500px)
      scale(1.01)
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)`
  
      card.style.transform = stringStyle
  })
  
  card.addEventListener('mouseout', () =>{
      card.style.transform = `
      perspective(500px)
      scale(1)
      rotateX(0)
      rotateY(0)`
  })
}




const navigate = useNavigate();


const seeDetail =() =>{

  //A continuacion voy a la página de detalle de ese personaje
  navigate("/detail");

}



  return (
    <Card id={`card-${id}`} className='box-card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='info-card'>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Link>
      <Button className='button-card' variant="primary" onClick={()=>seeDetail()}>Go somewhere</Button>
      </Card.Link>
    </Card>
  )
}
