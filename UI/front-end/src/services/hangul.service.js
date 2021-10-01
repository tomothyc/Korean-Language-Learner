import axios from "axios";

const API_URL = "http://localhost:8080/api/hangul/";

const getLetters = (step, exercise) => {
  return axios
    .get(API_URL + `getVocab?step=${step}&exercise=${exercise}`, {})
    .then(response => {
      return response.data;
    })
    .catch(error => alert(`Error: ${error}`));
};

const addVocab = (step, exercise, en, kr) => {
  return axios.post(API_URL + "addVocab", {
    step,
    exercise,
    en,
    kr
  });
};
export default { getLetters, addVocab };
