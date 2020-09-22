import { FETCHING, SUCCESS } from "./actions";

import api from "../../../services/api";

export const fetchAddress = (cep) => async (dispatch) => {
  dispatch({ type: FETCHING });

  const { data } = await api.get(`${cep}/json/`);

  dispatch({
    type: SUCCESS,
    payload: data,
  });
};
