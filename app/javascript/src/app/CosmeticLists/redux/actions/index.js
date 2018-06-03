import { cosmetics } from '../constants/ActionTypes';
import { API } from 'endpoints';

const { SET_COSMETICS, SEARCH_COSMETICS } = cosmetics;

export const setCosmetics = payload => ({ type: SET_COSMETICS, payload });
export const searchCosmetics = payload => ({ type: SEARCH_COSMETICS, payload });

export const handleFetchCosmetics = () => {
  const url = API.cosmetics.get.all;
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch(setCosmetics(res));
      })
      .catch(err => {
        console.log('Err:', err);
      });
  };
}

export const handleSearchCosmetics = query => {
  const url = API.cosmetics.get.all;
  const mergedParamUrl = url.concat('?query=', query);
  return dispatch => {
    fetch(mergedParamUrl)
      .then(res => res.json())
      .then(res => {
        dispatch(searchCosmetics(res));
      })
      .catch(err => {
        console.log('Err:', err);
      });
  };
}
