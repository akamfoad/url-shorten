import * as actionTypes from "./actionTypes";
import axios from "axios";
export const loadHistory = () => ({
  type: actionTypes.LOAD_HISTORY,
});

export const updateHistory = () => ({
  type: actionTypes.UPDATE_HISTORY,
});

export const addToHistory = (item) => ({
  type: actionTypes.ADD_TO_HISTORY,
  item: item,
});

export const setShortenLoading = (bool) => ({
  type: actionTypes.SET_SHORTEN_LOADING,
  value: bool,
});

export const shorten = (url) => {
  return (dispatch) => {
    dispatch(setShortenLoading(true));
    axios
      .post(
        "https://api-ssl.bitly.com/v4/shorten",
        { long_url: url },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
            "Content-Type": "application/json",
          },
          responseType: 'json'
        }
      )
      .then((res) => {
        dispatch(addToHistory(res.data));
        dispatch(updateHistory());
        dispatch(loadHistory());
        dispatch(setShortenLoading(false));
      })
      .catch((err) => {
        dispatch(setShortenLoading(false));
      });
  };
};
