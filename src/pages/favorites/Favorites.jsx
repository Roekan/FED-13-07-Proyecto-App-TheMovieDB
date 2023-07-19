import React, { useEffect, useState } from "react";
import "./Favorites.css";
import { useSelector } from "react-redux";
import { getFavorites } from "../../reducers/sliceFavorites/";
import { MovieCard } from "../../common/movieCard/MovieCard";
import { Container, Row, Col } from "react-bootstrap";

export const Favorites = () => {
 const [favorites, setFavorites] = useState([])

 let rdxCartFavorites = useSelector(getFavorites);

  useEffect(() => {
    setFavorites(rdxCartFavorites.favorites)
  }, [rdxCartFavorites.favorites]);

  return (
    <>
      <Container className="box-cards">
        <Row className="d-flex align-items-top justify-content-center py-3">
          {favorites.length > 0 &&
            favorites.map((card, i) => {
              return (
                <MovieCard
                  key={i}
                  type="movie"
                  img={card.poster_path}
                  title={card.title}
                  description={card.overview}
                  {...card}
                />
              );
            })}

          {!favorites.length && (
            <>
              <Row className="d-flex justify-content-center alignt-items-center">
                <Col
                  className="d-flex ustify-content-center alignt-items-center flex-column py-3 rounded-5 text-error-home "
                  xs={8}
                >
                  No tienes favoritos
                </Col>
              </Row>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};
