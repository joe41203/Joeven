import { cosmetics } from '../constants/ActionTypes';
import { API } from '../../../lib/endpoints';

const { SET_COSMETICS } = cosmetics;

export const setCospetics = payload => {
  return {
    type: SET_COSMETICS,
    payload,
  };
};

export const handleFetchCosmetics = () => {
  const url = API.cosmetics.get.all;
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch(setCospetics(res));
      })
      .catch(err => {
        console.log('Err:', err);
      });
  };
}
