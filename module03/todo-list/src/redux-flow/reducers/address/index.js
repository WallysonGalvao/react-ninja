import createReducer from "../create-reducer";
import { FETCHING, SUCCESS } from "./actions";

export const initalState = {
  cep: "",
  logradouro: "",
  complemento: "",
  bairro: "",
  localidade: "",
  uf: "",
  ibge: "",
  gia: "",
  ddd: "",
  siafi: "",
  isFetching: false,
};

const address = createReducer(initalState, {
  [FETCHING]: (state, action) => ({
    ...state,
    isFetching: true,
  }),

  [SUCCESS]: (state, action) => ({
    ...action.payload,
    isFetching: false,
  }),
});

export default address;
