import React from "react";
import { Col, Container, Image, Pagination, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Showresult.css'

export default function Showresult({
  movieData,
  heading,
  paginate,
  totalMovies,
  moviesPerPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Container>
        <h1 className="text-center">{heading}</h1>
        <Row>
          {movieData &&
            movieData.length > 0 &&
            movieData.map(
              ({ original_title, poster_path, vote_average, id }) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-4 text-center"
                  key={id}
                >
                  <div className="card h-100 bg-dark text-white">
                    <Image
                      src={process.env.REACT_APP_IMG_PATH + poster_path}
                      fluid
                    />
                    <div className="card-body">
                      <h4 className="card-title">{original_title}</h4>
                      <p className="card-text">Rating: {vote_average}</p>
                      <Link
                        to={`/single-movie/${id}`}
                        className="btn btn-primary"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </Col>
              )
            )}
        </Row>

        <Pagination className="justify-content-center mt-4 pagination">
          {pageNumbers.map((number) => (
            <Pagination.Item
              key={number}
              onClick={() => paginate(number)}
              active={number === paginate}
            >
              {number}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </>
  );
}
