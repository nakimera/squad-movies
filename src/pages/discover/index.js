import {useState, useEffect} from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";
import * as devices from "../../devices";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import { fetchMovies } from "../../fetcher";

export default function Discover(){
  const [results, setResults] = useState({});
  const [totalCount, setTotalCount] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [year, setYear] = useState(0);
  const [genreOptions, setGenreOptions] = useState([]);
  const [ratingOptions, setRatingOptions] = useState([
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 }
  ]);
  const [languageOptions, setLanguageOptions] = useState([
    { id: 'GR', name: 'Greek' },
    { id: 'EN', name: 'English' },
    { id: 'RU', name: 'Russian' },
    { id: 'PO', name: 'Polish' }
  ]);

  useEffect(() => {
    async function fetchAllMovies(){
      let data = await fetchMovies();
      setResults(data); 
      setTotalCount(data.total_results);
    }
    fetchAllMovies();
  }, [])

  // TODO: Preload and set the popular movies and movie genres when page loads

  // TODO: Update search results based on the keyword and year inputs

  return(
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
      <TotalCount>{totalCount} results</TotalCount>
      <MovieFilters>
        <SearchFilters 
          genres={genreOptions} 
          ratings={ratingOptions}  
          languages={languageOptions}
          searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
        />
      </MovieFilters>
      <MovieResults>
        <MovieList
          movies={results.results || []}
          genres={genreOptions || []}
        />
      </MovieResults>
    </DiscoverWrapper>
  )
}

const DiscoverWrapper = styled.main`
  padding: 35px;
`

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);
`

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;
`

const MobilePageTitle = styled.h1`
  display: none;

  @media screen and (max-width: ${devices.mobile}){
    display: unset;
    margin: 0 0 0 40px;
  }
`

const TotalCount = styled.strong`
  display: block;
`