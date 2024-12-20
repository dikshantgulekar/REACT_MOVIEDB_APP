import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fetchapi from "../customFunction/Fetchapi";
import Menu from "../menu/Menu";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function Singlemovie() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  let { movieId } = useParams();
  // console.log(movieId);

  var Api_key = process.env.REACT_APP_API_KEY;

  var apiPath1 = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Api_key}&language=en-US`;
  var apiPath2 = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Api_key}&language=en-US`;

  // console.log(apiPath1)
  // console.log(apiPath2)

  useEffect(() => {
    Fetchapi(apiPath1).then((val) => {
      setData1(val);
      // console.log(val)
    });

    Fetchapi(apiPath2).then((val) => {
      setData2(val.cast);
    });
  }, [apiPath1, apiPath2]);

  return (
    <>
      <Menu />

      {data1 && Object.keys(data1).length > 0 && (
        <>
          <Container >
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${data1.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0.3,
                zIndex: -1,
              }}
            ></div>

            <Row className="align-items-start">
              <Col xs={12} md={3} className="mb-3">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${data1.poster_path}`}
                  fluid
                  className="rounded"
                />
              </Col>
              <Col xs={12} md={9}>
                <h4 id="originalTitle">{data1.original_title}</h4>
                <p id="rating" style={{ color: "red" }}>
                  Rating: {data1.vote_average}
                </p>
                <p id="releaseDate">Release Date: {data1.release_date}</p>
                <p id="overview">{data1.overview}</p>
              </Col>
            </Row>
          </Container>

          <Container className="text-white mt-4">
            <h3 className="cast-title">Cast Details</h3>
            <Row>
              {data2 &&
                data2.length > 0 &&
                data2.slice(0, 10).map((cast, index) => (
                  <Col
                    key={index}
                    xs={6}
                    sm={3}
                    md={4}
                    lg={2}
                    className="cast-card mb-4"
                  >
                    <div className="card bg-dark text-white h-100">
                      <Image
                        alt={cast.name}
                        src={
                          cast.profile_path
                            ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                            : "https://via.placeholder.com/200x300?text=No+Image"
                        }
                        className="card-img-top"
                        fluid
                      />
                      <div className="card-body">
                        <h6 className="card-title">{cast.name}</h6>
                        <p className="card-text">as {cast.character}</p>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}
