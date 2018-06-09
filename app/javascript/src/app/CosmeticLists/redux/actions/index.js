import { cosmetics } from '../constants/ActionTypes';
import { API } from 'endpoints';

const { SET_COSMETICS, SEARCH_COSMETICS, CREATE_COSMETICS } = cosmetics;

export const setCosmetics = payload => ({ type: SET_COSMETICS, payload });
export const searchCosmetics = payload => ({ type: SEARCH_COSMETICS, payload });
export const createCosmetics = payload => ({ type: CREATE_COSMETICS, payload });

export const handleFetchCosmetics = () => {
  const url = API.cosmetics.get.index;
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
  const url = API.cosmetics.get.index;
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

// cosmetic_params
// 1. name
// 2. iamges
export const handleCreateCosmetics = cosmetic_params => {
  const { name, images } = cosmetic_params;
  const url = API.cosmetics.post.create;
  const formData = new FormData();
  formData.append('name', name);
  images.forEach(image => formData.append('images[]', image));
  return dispatch => {
    fetch(url, { method: 'POST', body: formData })
      .then(res => res.json())
      .then(res => {
        dispatch(createCosmetics(res));
      })
      .catch(err => {
        console.log('Err:', err);
      });
  }
}
