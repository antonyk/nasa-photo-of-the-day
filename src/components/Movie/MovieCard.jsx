import React from "react";
import {
  Card, CardHeader, CardText, CardBody, CartTitle,
  CardTitle, CardSubtitle, Button, Badge
} from 'reactstrap';

function MovieCard({ film }) {
  // const film = props.film;
  // const { film } = props;
  // console.log("film", film);
  return (
    <Card>
      <CardHeader>Film title: {film.title}</CardHeader>
      <CardBody>
        <CardText>{film.description}</CardText>
        <CardText>Director: {film.director}</CardText>
        <Badge color="info">Release Date: {film.release_date}</Badge>
      </CardBody>
    </Card>
  );
};

export default MovieCard;