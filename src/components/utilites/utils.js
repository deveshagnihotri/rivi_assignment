import { toast } from 'react-toastify';
import axios from 'axios';
import { URL_FIRST } from '../data/ApiEndPoints';
import { URL_SECOND } from '../data/ApiEndPoints';
import { URL_THIRD } from '../data/ApiEndPoints';
import { URL_FOURTH } from '../data/ApiEndPoints';

const promise1 = axios.get(URL_FIRST);
const promise2 = axios.get(URL_SECOND);
const promise3 = axios.get(URL_THIRD);
const promise4 = axios.get(URL_FOURTH);
let data = [];

//get api data
export const getApiDataFirst = setActivityData => {
  Promise.all([promise1, promise2, promise3, promise4]).then(value => {
    data = data.concat(
      value[0].data,
      value[1].data,
      value[2].data,
      value[3].data
    );
    setActivityData(data);
  });
};

//handle add new chip set
export const handleAddChipItem = (user, chipData, setChipData) => {
  let checkValid = chipData.filter(item => item.id === Object.values(user)[0]);
  if (checkValid.length === 0) {
    return setChipData(chipData.concat(user));
  } else {
    return toast.error('Already in Selected list');
  }
};

//handle delete items
export const handleDeleteChipSet = (data, chipData, setChipData) => {
  let newChipSet = chipData.filter(item => item.id !== data.id);
  setChipData(newChipSet);
};

//handle Search items
export const handleSearchTerm = (term, cityApiData, setSearchData) => {
  let updatedList = cityApiData;
  console.log(term, term.length, 'p-p-p-p-pp');
  if (term.length > 1) {
    updatedList = updatedList.filter(item =>
      item.name.toLowerCase().startsWith(term)
    );
    setSearchData(updatedList);
  } else {
    updatedList = [];
    setSearchData(updatedList);
  }
};
