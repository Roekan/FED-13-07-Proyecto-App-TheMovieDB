import React, { useEffect, useState, useRef } from "react";
import {  bringFilmsPagination,  bringFilmsByName } from "../../services/apiCalls";
import { Container, Row, Pagination, Col, Spinner } from "react-bootstrap";
import { MovieCard } from "../../common/movieCard/MovieCard";
import { Searcher } from "../../common/searcher/Searcher";
import './Home.css'

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const anchor = useRef(null);

  const changeValue = (name) => {
    setPage(1);
    setInput(name);
  };

  useEffect(() => {
    setLoading(true)
    setError(false)
    if (input == "") {
        bringFilmsPagination(page)
          .then((res) => {
            setFilms(res.results);
            setTotalPages(res.total_pages);
          })
          .catch((error) => {
            setError(true)
            console.log("Error llamada: ", error);
          })
          .finally(()=>{
            setLoading(false)
          });
    } else {
      setTimeout(() => {
        bringFilmsByName(input, page)
          .then((res) => {
            setFilms(res.results);
            setTotalPages(res.total_pages);
          })
          .catch((error) => {
            setError(true)
            console.log("Error llamada: ", error);
          })
          .finally(()=>{
            setLoading(false)
          });
      }, 500);
    }
  }, [page, input]);

  const cambiarPagina = (pag) => {
    window.scrollTo({top:anchor.current.offsetTop,behavior:"smooth"})
    let pagina = pag;
    if (pagina < 1) {
      pagina = 1;
    }
    if (pagina > totalPages) {
      pagina = totalPages;
    }
    setPage(pagina);
  };

  return (
    <>
      <Container ref={anchor} className="box-cards">
        <Row className="d-flex align-items-top justify-content-center py-3">
          <Searcher changeValue={(e) => changeValue(e)} />
        </Row>
        <Row className="d-flex align-items-top justify-content-center py-3">

          {!loading && films.length>0 && !error &&
          films.map((card) => {
            return (
              <MovieCard
                key={card.id}
                type="movie"
                img={card.poster_path}
                title={card.title}
                description={card.overview}
                {...card}
              />
            );
          })}

          { loading && !error &&
            <Spinner animation="border" variant="danger" />
          }

          { error || !films.length &&
            <>
            <Row className="d-flex justify-content-center alignt-items-center">
              <Col className='d-flex ustify-content-center alignt-items-center flex-column py-3 rounded-5 text-error-home ' xs={8}>
                No se han encontrado resultados
              </Col>
            </Row>
            </>
          }

        </Row>
        <Row className="d-flex align-items-center justify-content-center py-3">
          <Col className="d-flex align-items-center justify-content-center">
            <Pagination>
              <Pagination.Prev
                disabled={page <= 1}
                onClick={() => {
                  cambiarPagina(page - 1);
                }}
              />
              <Pagination.Item
                onClick={() => {
                  cambiarPagina(1);
                }}
              >
                {1}
              </Pagination.Item>
              <Pagination.Ellipsis />
              {page > 1 && (
                <Pagination.Item
                  onClick={() => {
                    cambiarPagina(page - 1);
                  }}
                >
                  {page - 1}
                </Pagination.Item>
              )}
              <Pagination.Item active>{page}</Pagination.Item>
              {page < totalPages && (
                <Pagination.Item
                  onClick={() => {
                    cambiarPagina(page + 1);
                  }}
                >
                  {page + 1}
                </Pagination.Item>
              )}
              <Pagination.Ellipsis />
              <Pagination.Item
                onClick={() => {
                  cambiarPagina(totalPages);
                }}
              >
                {totalPages}
              </Pagination.Item>
              <Pagination.Next
                disabled={page >= totalPages}
                onClick={() => {
                  cambiarPagina(page + 1);
                }}
              />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </>
  );
};
