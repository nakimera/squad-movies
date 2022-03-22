import React from "react";
import styled, { css } from 'styled-components';

import * as colors from "../../colors";
import * as devices from "../../devices";
import ExpandableFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";

import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";

export default function SearchFilters({ genres, ratings, languages, onSearch }) {
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input" 
          type="text"
          icon={{ src: SearchIcon, alt: 'Magnifying glass' }} 
          placeholder="Search for movies"
          onChange={onSearch}
        />
        <SearchBar
          id="year_search_input" 
          type="number"
          icon={{ src: YearIcon, alt: 'Calendar icon' }} 
          placeholder="Year of release"
          onChange={onSearch}
        />
      </SearchFiltersCont>
      <SearchFiltersCont id='accordions'>
        <CategoryTitle>Movie</CategoryTitle>
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
        <ExpandableFilter category='genre(s)' options={genres} />
        <ExpandableFilter category='min. vote' options={ratings} />
        <ExpandableFilter category='language' options={languages} />
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all .3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  @media screen and (max-width: ${devices.mobile}){
    background-color: inherit;
    padding: 0;
    &#accordions, .search_bar_wrapper:last-child{
      display: none;
    }
  }
`

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`