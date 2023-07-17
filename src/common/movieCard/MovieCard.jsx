import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import './MovieCard.css'




export const MovieCard = ({img,title,description,...props}) => {



const movie = React.useRef(null)

if(movie && movie.current){
  const height = movie.current.clientHeight;
  const width = movie.current.clientWidth;

  movie.current.addEventListener('mousemove', (evt) =>{
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
  })
  
  movie.current.addEventListener('mouseout', () =>{
      movie.current.style.transform = `
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
      <Card.Link className='box-button-card'>
      <Button className='button-card' variant="primary" onClick={()=>seeDetail()}>Go somewhere</Button>
      </Card.Link>
    </Card>
  )
}
