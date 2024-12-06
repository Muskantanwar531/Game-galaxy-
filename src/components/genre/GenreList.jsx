import React, { useState } from 'react';
import styled from 'styled-components';
import { GenreItem, Adventure, Card, Escape, Horror, Puzzle } from "./index";
import { Title } from '../common';
import Dressup from './Dressup';

const genres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Adventure' },
  { id: 3, name: 'Card' },
  { id: 4, name: 'Dressup' },
  { id: 5, name: 'Escape' },
  { id: 6, name: 'Horror' },
  { id: 7, name: 'Puzzle' },
];

const GenreList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter genres based on search query
  const filteredGenres = genres.filter(genre =>
    genre.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle changes in search input
  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <GenreListWrapper>
      <SearchWrapper>
      <SearchInput
        type="text"
        placeholder="Search genres..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      </SearchWrapper>
      <Title
        titleName={{
          firstText: "All",
          secondText: "genres",
        }}
      />
      {filteredGenres.map(genre => {
        switch (genre.name) {
          case 'Action':
            return <GenreItem key={genre.id} />;
          case 'Adventure':
            return <Adventure key={genre.id} />;
          case 'Card':
            return <Card key={genre.id} />;
          case 'Dressup':
            return <Dressup key={genre.id} />;
          case 'Escape':
            return <Escape key={genre.id} />;
          case 'Horror':
            return <Horror key={genre.id} />;
          case 'Puzzle':
            return <Puzzle key={genre.id} />;
          default:
            return null;
        }
      })}
    </GenreListWrapper>
  );
}

export default GenreList;

const GenreListWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  padding: 20px;
`;
const SearchWrapper = styled.div`
  margin-left: 70%;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  
  margin-bottom: 20px;
  border: 2px solid var(--clr-violet-normal);
  border-radius: 5px;
  font-size: 16px;
  color: var(--clr-white);
  background-color: transparent;
  outline: none;

  &::placeholder {
    color: var(--clr-white);
    opacity: 0.8;
  }
`;
