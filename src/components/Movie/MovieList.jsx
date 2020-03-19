import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from 'reactstrap'

export default function MovieList() {
  const [films, setFilms] = useState([]);
  const smColCount = 1;
  const mdColCount = 2;
  const filmGrid = [];

  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films/")
      .then(response => {
        setFilms(response.data);
        // console.log(response.data);
      })
      .then(() => {
        for (let i = 0; i < Math.ceil(films.length / mdColCount); i++) {
          for (let j = 0; j < mdColCount; j++) {
            let tmpfilms = [];
            tmpfilms[j] = films[i*mdColCount + mdColCount];
          }
          filmGrid[i] = tmpfilms;
        }
        console.log(filmGrid);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <Container>
      {/* {

        
      }
      {filmGrid.map((item, idx) => {

        
        <Row>
          {if () filmGrid

        </Row>
      })}

      { for (let i = 0; i < Math.ceil(films.length / mdColCount); i++)
      
      
      
      } */}
        {/* <Row>
          {films.map((film, index)  => }
          <MovieCard film={film} key={film.id} />
        </Row> */}

    </Container>
  );
}
