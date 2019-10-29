import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';
import './SearchBar.css';

function SearchBar(props) {
  const [term, setTerm] = useState('');

  const handleInputChange = e => {
    setTerm(e.target.value);
    props.onSearchTermChange(term.toLowerCase());
  };

  console.log(term, 'qwqwqwqw');
  return (
    <div className="search_container">
      <Paper className="search_container_root">
        {props.handleChipData.map(data => {
          return (
            <Chip
              key={data.id}
              label={data.name}
              onDelete={() => props.handleDelete(data)}
              className="search_container_chip"
              style={{ backgroundColor: '#B9F5F5' }}
            />
          );
        })}
        <InputBase
          className="search_container_input"
          placeholder="Search here (Enter min three char)"
          value={term}
          onChange={handleInputChange}
        />
        <IconButton className="search_container_Button" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <div className="search_field_Result">
        <div className="autosuggest">
          {props.handleSearchData !== undefined ? (
            props.handleSearchData.map((item, id) => (
              <ul key={id} onClick={() => props.handleChipFromSearchData(item)}>
                {item.name}
              </ul>
            ))
          ) : (
            <ul>No Search found</ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
