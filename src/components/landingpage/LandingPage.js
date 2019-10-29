import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import cityApiDb from '../data/city.json';
import _ from 'lodash';
import SearchBar from './SearchBar';
import { handleAddChipItem } from '../utilites/utils';
import { handleDeleteChipSet } from '../utilites/utils';
import { handleSearchTerm } from '../utilites/utils';
import { getApiDataFirst } from '../utilites/utils';

function LandingPage() {
  const [cityApiData, setCityApiData] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [chipData, setChipData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    setCityApiData(cityApiDb.cities);
    getApiDataFirst(setActivityData);
  }, []);

  const searchDebounce = _.debounce(term => {
    handleSearchTerm(term, cityApiData, setSearchData);
  });

  return (
    <div className="container_main">
      <div className="container_first">
        <SearchBar
          handleChipData={chipData}
          handleDelete={data =>
            handleDeleteChipSet(data, chipData, setChipData)
          }
          onSearchTermChange={term => searchDebounce(term)}
          handleSearchData={searchData}
          handleChipFromSearchData={item =>
            handleAddChipItem(item, chipData, setChipData)
          }
        />
      </div>
      <div className="container_second">
        <div className="second_main_first">
          {cityApiData.map((user, id) => (
            <ul
              key={id}
              className="first"
              onClick={() => handleAddChipItem(user, chipData, setChipData)}
            >
              {user.name}
            </ul>
          ))}
        </div>
        <div className="second_main_second" id="main">
          {!activityData.length !== 0 &&
            activityData.map((user, id) => <ul key={id}>{user.activity}</ul>)}
          {isFetching && 'Fetching more list items...'}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
