import {useEffect, useState} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useParams, Link, useNavigate} from 'react-router-dom'
import {bringOneFilm, bringOneSerie} from '../../services/apiCalls'
import { Col, Container, Row } from 'react-bootstrap'
import './Detail.css'



export const Detail = () => {
    const id = useParams().id
    const type = useParams().type
    const [info, setInfo] = useState()
    const navigate = useNavigate()

    console.log(id)
    console.log(type)

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
                        <Col className='d-flex justify-content-top alignt-items-center flex-column px-5 pb-3  rounded-5' xs={10} md={5} lg={5}>
                          <Row>
                            <Col className='d-flex justify-content-start alignt-items-center py-2 box-back-detail' xs={12}>
                              <Link onClick={()=>{navigate(-1)}}>
                                <svg className='p-2 img-back-detail ' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path d="m2.36 11.23l8.31 7.57c.61.56 1.6.12 1.6-.71v-3.63c0-.35.29-.64.64-.64h15.86c.66 0 1.19-.53 1.19-1.19V8.42c0-.66-.53-1.19-1.19-1.19H12.91c-.35 0-.64-.29-.64-.64V2.96c0-.83-.99-1.27-1.6-.71L2.36 9.82a.946.946 0 0 0 0 1.41Zm13.97 17.53l-2.54-6.95c-.16-.49-.62-.81-1.13-.81c-.51 0-.97.32-1.12.79l-2.57 6.98c-.18.48.07 1 .55 1.18c.1.03.21.05.32.05c.37 0 .73-.23.86-.6l.41-1.13c.04.01.08.01.12.01h2.87c.03 0 .07 0 .1-.01l.41 1.12c.18.48.7.73 1.18.55c.47-.17.71-.7.54-1.18Zm-4.54-2.32l.87-2.38l.86 2.38h-1.73Zm-3.56-2.73c0 .53-.15 1.02-.41 1.43a2.7 2.7 0 0 1 1.07 2.15c0 1.38-1.05 2.54-2.4 2.69c-.04.01-.09.02-.13.01c-.06.01-.12.01-.18.01H2.92a.92.92 0 0 1-.92-.93v-7.16c0-.5.41-.91.92-.91h2.6c.1 0 .19 0 .27.01a7.905 7.905 0 0 0 .19.03c1.28.22 2.25 1.34 2.25 2.67Zm-2.7-.87H3.84v1.74h1.68c.48 0 .88-.39.88-.87a.87.87 0 0 0-.87-.87Zm-1.69 3.57v1.74h2.35a.87.87 0 0 0 0-1.74H3.84Zm18.76 1.94a3.308 3.308 0 0 1-6.17-1.66v-2.38c0-1.83 1.48-3.31 3.31-3.31c1.18 0 2.28.64 2.87 1.65c.26.44.1 1-.33 1.26c-.44.26-1 .11-1.26-.33a1.5 1.5 0 0 0-1.28-.74c-.8 0-1.47.66-1.47 1.47v2.38c0 .81.67 1.47 1.47 1.47c.53 0 1.01-.28 1.28-.74c.26-.43.81-.59 1.26-.33c.42.26.58.82.32 1.26Zm4.63-3.48l2.6 3.68c.29.42.2.99-.23 1.29c-.42.29-.99.19-1.28-.22l-2.41-3.42l-.69.69v2.2c0 .51-.41.92-.92.92s-.92-.41-.92-.92v-7.17c0-.51.41-.92.92-.92s.92.41.92.92v2.37l3.01-3.02c.36-.36.94-.36 1.3 0c.36.36.36.94 0 1.3l-2.3 2.3Z"></path></svg>
                              </Link>
                            </Col>
                            <Col className='d-flex justify-content-center alignt-items-center py-2' xs={12}>
                              <img className='rounded-5 img-detail' src={
                              info.poster_path
                              ?'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+info.poster_path
                              :'https://raw.githubusercontent.com/Roekan/FED-13-07-Proyecto-App-TheMovieDB/master/public/no-image.png'
                              }
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col className='d-flex justify-content-start alignt-items-center flex-column px-5 rounded-5 box-text-detail' xs={12} md={7} lg={7}>
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
                            <Col className='d-flex justify-content-start alignt-items-center flex-column p-3 rounded-5 text-detail-row' >
                              <p className='text-detail fw-bold '>Puntuación ({info.vote_count} votos) </p>
                              <ProgressBar className='bar-votes-detail ' now={info.vote_average * 10} label={`${(info.vote_average).toFixed(2)} / 10`} />
                            </Col>
                            <Col xs={1}></Col>
                            <Col className='d-flex justify-content-start alignt-items-center flex-column p-3 rounded-5 text-detail-row' >
                              <p className='text-detail fw-bold '>Idiomas:</p>
                              <Row className='d-flex justify-content-center alignt-items-center'>
                            {
                              info.spoken_languages.map((language,i)=>{
                                
                                return language.name && <Col className='d-flex justify-content-center alignt-items-start text-detail ' key={i} xs={12} md={6} lg={6}>{language.name} </Col>
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
