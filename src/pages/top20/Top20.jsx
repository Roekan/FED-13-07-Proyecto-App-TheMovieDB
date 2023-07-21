import { useEffect, useState } from "react";
import { bringTop20Films, bringTop20Series } from "../../services/apiCalls";
import { Container, Row, Tabs, Tab, Col, Spinner } from "react-bootstrap";
import { MovieCard } from "../../common/movieCard/MovieCard";
import "./Top20.css";

export const Top20 = () => {
  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);
  const [loadingFilms, setLoadingFilms] = useState(false);
  const [loadingSeries, setLoadingSeries] = useState(false);
  const [errorFilms, setErrorFilms] = useState(false);
  const [errorSeries, setErrorSeries] = useState(false);

  useEffect(() => {
    setLoadingFilms(true);
    setErrorFilms(false);
    bringTop20Films()
      .then((res) => {
        setFilms(res.results);
      })
      .catch((error) => {
        setErrorFilms(true);
        console.log("Error llamada: ", error);
      })
      .finally(() => {
        setLoadingFilms(false);
      });
  }, []);

  useEffect(() => {
    setLoadingSeries(true);
    setErrorSeries(false);
    bringTop20Series()
      .then((res) => {
        setSeries(res.results);
      })
      .catch((error) => {
        setErrorSeries(true);
        console.log("Error llamada: ", error);
      })
      .finally(() => {
        setLoadingSeries(false);
      });
  }, []);


  return (
    <Container className="box-cards">
      <Row className="box-linkTop ">
        <Tabs
          className=" d-flex align-items-center justify-content-center my-4 linkTop"
          mountOnEnter
          variant="pills"
          defaultActiveKey="films"
        >
          <Tab eventKey="films" title="Peliculas">
            <Row className="d-flex align-items-top justify-content-center py-3">
              {!loadingFilms &&
                films.length > 0 &&
                !errorFilms &&
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

              {loadingFilms && !errorFilms && (
                <Spinner animation="border" variant="danger" />
              )}

              {errorFilms ||
                (!films.length && !loadingFilms && (
                  <>
                    <Row className="d-flex justify-content-center alignt-items-center">
                      <Col
                        className="d-flex ustify-content-center alignt-items-center flex-column py-3 rounded-5 text-error-home "
                        xs={8}
                      >
                        No se han encontrado resultados
                      </Col>
                    </Row>
                  </>
                ))}
            </Row>
          </Tab>
          <Tab eventKey="series" title="Series">
            <Row className="d-flex align-items-top justify-content-center py-3">
              {!loadingSeries &&
                series.length > 0 &&
                !errorSeries &&
                series.map((card) => {
                  return (
                    <MovieCard
                      key={card.id}
                      type="serie"
                      img={card.poster_path}
                      title={card.title}
                      description={card.overview}
                      {...card}
                    />
                  );
                })}

              {loadingSeries && !errorSeries && (
                <Spinner animation="border" variant="danger" />
              )}

              {errorSeries ||
                (!series.length && !loadingSeries && (
                  <>
                    <Row className="d-flex justify-content-center alignt-items-center">
                      <Col
                        className="d-flex ustify-content-center alignt-items-center flex-column py-3 rounded-5 text-error-home "
                        xs={8}
                      >
                        No se han encontrado resultados
                      </Col>
                    </Row>
                  </>
                ))}
            </Row>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};
