import axios from "axios";

const API_URL = "http://localhost:8080/api/hangul/";

const getVocab = (step, exercise) => {
  return axios
    .get(API_URL + `getVocab?step=${step}&exercise=${exercise}`, {})
    .then((response) => {
      return response.data;
    })
    .catch((error) => alert(`Error: ${error}`));
};

const addVocab = (step, exercise, en, kr) => {
  return axios.post(API_URL + "addVocab", {
    step,
    exercise,
    en,
    kr,
  });
};

const deleteVocab = (step, exercise, en, kr) => {
  console.log(step, exercise, kr, en);
  return axios.delete(
    API_URL + `deleteVocab?step=${step}&exercise=${exercise}&en=${en}&kr=${kr}`,
    {
      step,
      exercise,
      en,
      kr,
    }
  );
};
export default { getVocab, addVocab, deleteVocab };
