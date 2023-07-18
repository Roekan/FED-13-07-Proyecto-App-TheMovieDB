import React, {useEffect, useState} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useParams, Link} from 'react-router-dom'
import {bringOneFilm, bringOneSerie} from '../../services/apiCalls'
import { Col, Container, Row } from 'react-bootstrap'
import './Detail.css'



export const Detail = () => {
    const id = useParams().id
    const type = useParams().type
    const [info, setInfo] = useState()

useEffect(()=>{

  if(type=== "movie"){
    bringOneFilm(id)
    .then(res => setInfo(res))
  }else if(type=== "serie"){
    bringOneSerie(id)
    .then(res => setInfo(res))
  }


}, [])


  return (
   <>
          {
            info &&(
                    <>
                    <Container fluid >
                      <Row className='d-flex justify-content-center alignt-items-center my-4'>
                        <Col className='d-flex justify-content-center alignt-items-center flex-column px-5 pb-3  rounded-5' xs={10} md={5} lg={5}>
                        <img className='rounded-5 img-detail' src={
                        info.poster_path
                        ?'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+info.poster_path
                        :'./../../public/no-image.png'
                        }
                        />
                        </Col>
                        <Col className='d-flex justify-content-start alignt-items-center flex-column px-5 rounded-5 box-text-detail' xs={12} md={7} lg={7}>
                        {/* Poner imagen por defecto */}
                          <Row>
                            <Col className='d-flex justify-content-start alignt-items-center flex-column py-3 rounded-5 text-detail-row ' xs={12}>
                            <h3 className='text-detail fw-bold '>{
                            info.title || info.name}</h3>
                            <h5 className='text-detail '>{info.tagline}</h5>
                            <p className='text-detail text-start pt-5 pb-5'>{
                            info.overview==""
                            ? "No se ha encontrado descripción"
                            :info.overview
                            }</p>
                            {
                              info.homepage && <Link className='button-card-detail align-self-center py-1'  to={info.homepage}>Ir a la web</Link>
                            }
                            

                            </Col>
                          </Row>

                          <Row className='d-flex justify-content-between alignt-items-center py-3'>
                            <Col className='d-flex justify-content-start alignt-items-center flex-column p-3 rounded-5 text-detail-row' xs={5}>
                            <p className='text-detail fw-bold '>Puntuación ({info.vote_count} votos) </p>
                            <ProgressBar now={info.vote_average * 10} label={`${info.vote_average}`} />
                            
                            </Col>
                            <Col className='d-flex justify-content-start alignt-items-center flex-column p-3 rounded-5 text-detail-row' xs={5}>
                              <p className='text-detail fw-bold '>Idiomas:</p>
                              <Row className='d-flex justify-content-center alignt-items-center'>
                            {
                              info.spoken_languages.map((language,i)=>{
                                
                                return language.name && <Col className='d-flex justify-content-center alignt-items-start text-detail ' key={i} xs={4}>{language.name} </Col>
                              })
                              }
                              </Row>
                              
                            </Col>
                          </Row>                          
                        </Col>
                      </Row>
                    </Container>
                    </>
                    )
          }
        
   </>
  )
}
