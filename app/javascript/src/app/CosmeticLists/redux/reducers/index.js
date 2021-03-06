import { cosmetics } from '../constants/ActionTypes';

const { SET_COSMETICS, SEARCH_COSMETICS, CREATE_COSMETICS } = cosmetics;

const initialState = { cosmetics: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COSMETICS:
      return Object.assign({}, state, { cosmetics: action.payload })
    case SEARCH_COSMETICS:
      return Object.assign({}, state, { cosmetics: action.payload })
    case CREATE_COSMETICS:
      return Object.assign({}, state, { cosmetics: [...state.cosmetics, action.payload]})
    default:
      return state;
  }
}
