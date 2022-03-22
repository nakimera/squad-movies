import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as devices from "../../devices";

export default function MovieItem ({ movie, genres }) {
  const posterImageUrl = `${process.env.REACT_APP_BASE_POSTER_IMAGE_URL}/${movie.poster_path}`;

  let ids = movie.genre_ids;
  let movieGenres = genres.filter(item => ids.includes(item.id))

  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <Image src={posterImageUrl} />
      <Container>
        <Title>{movie.title}</Title>
        <GenresCon>
          {movieGenres.map((result, index) => <Genre key={index}>{result.name}</Genre>)}
        </GenresCon>
        <Overview>{movie.overview}</Overview>
        <Date>{movie.release_date}</Date>
        <Rating>{movie.vote_average}</Rating>
      </Container>
    </MovieItemWrapper>
  )
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  display: flex;
`

const Container = styled.div`
  width: calc(100% - 120px);
  padding-left: 20px;
  position: relative;
  padding-right: 0;

  @media screen and (max-width: ${devices.mobile}){
    width: calc(100% - 100px);
  }
`

const Title = styled.h2`
  font-size: 1.4em;
  text-transform: capitalize;
  margin: 0;
  font-weight: 800;

  @media screen and (max-width: ${devices.mobile}){
    font-size: 1em;
    width: 78%;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 220px;
  object-fit: cover;

  @media screen and (max-width: ${devices.mobile}){
    width: 90px;
    height: 160px;
  }
`

const GenresCon = styled.div`
  p{ 
    margin: 0;
    border-right: solid .8px  ${colors.primaryColor};
  }

  & p:last-child{
    border-right: none;
  }

  & p:first-child{
    padding-left: 0; 
  }
`

const Genre = styled.p`
  color: ${colors.primaryColor};
  text-transform: capitalize;
  display: inline-block;
  padding: 0 5px;
  font-size: .9em;
  font-weight: 400;

  @media screen and (max-width: ${devices.mobile}){
    font-size: .8em;
  }
`

const Overview = styled.p`
  margin-top: 12px;
  color: ${colors.fontColor};
  font-size: .95em;

  @media screen and (max-width: ${devices.mobile}){
    font-size: .8em;
    margin-bottom: 30px;
  }
`

const Date = styled.p`
  position: absolute;
  bottom: 0;
  margin: 0;
  color: ${colors.primaryColor};
  opacity: 0.5;
  font-size: .8em;
`

const Rating = styled.h5`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  color: white;
  background: ${colors.primaryColor};
  border-radius: 3px;
  padding: 4px;
  width: 20px;
  text-align: center;
`
