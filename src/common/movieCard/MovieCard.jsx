import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';





export const MovieCard = ({img,title,description,...props}) => {


const navigate = useNavigate();


const seeDetail =() =>{

  //A continuacion voy a la página de detalle de ese personaje
  navigate("/detail");

}



  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" onClick={()=>seeDetail()}>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
