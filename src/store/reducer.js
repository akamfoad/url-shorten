import * as actionTypes from "./actionTypes";
const initialState = {
  shortened_history:
    JSON.parse(localStorage.getItem("shortened_history")) || [],
  shortenLoading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_HISTORY:
      const shortened_history =
        JSON.parse(localStorage.getItem("shortened_history")) || [];
      return {
        ...action,
        shortened_history: shortened_history
      };
    case actionTypes.ADD_TO_HISTORY:
      if (
        !state.shortened_history.map(i => i.hashid).includes(action.item.hashid)
      ) {
        return {
          ...state,
          shortened_history: state.shortened_history.concat(action.item)
        };
      } else {
        return state;
      }

    case actionTypes.UPDATE_HISTORY:
      localStorage.setItem(
        "shortened_history",
        JSON.stringify(state.shortened_history)
      );
      return state;

    case actionTypes.SET_SHORTEN_LOADING:
      return {
        ...state,
        shortenLoading: action.value
      };
    default:
      return state;
  }
};

export default reducer;
