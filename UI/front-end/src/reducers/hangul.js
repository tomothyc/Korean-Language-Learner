import { HANGUL_ADDED_SUCCESS, HANGUL_ADDED_FAIL } from "../actions/types";

export default function(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case HANGUL_ADDED_SUCCESS:
      return {
        letter: payload.letter
      };
    case HANGUL_ADDED_FAIL:
      return {};
    default:
      return state;
  }
}
