import HangulService from "../services/hangul.service";
import { SET_MESSAGE, HANGUL_ADDED_SUCCESS, HANGUL_ADDED_FAIL } from "./types";

export const addVocab = (step, exercise, en, kr) => dispatch => {
  return HangulService.addVocab(step, exercise, en, kr).then(
    response => {
      dispatch({
        type: HANGUL_ADDED_SUCCESS
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message
      });

      return Promise.resolve();
    },
    error => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(step, exercise, kr, en);
      dispatch({
        type: HANGUL_ADDED_FAIL
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message.message
      });

      return Promise.reject();
    }
  );
};
