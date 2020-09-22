import address, { initalState } from ".";
import { FETCHING, SUCCESS } from "./actions";

describe("Address", () => {
  it("should action SUCCESS update address", () => {
    const before = initalState;

    const action = {
      type: SUCCESS,
      payload: {
        cep: "01001-000",
        logradouro: "Praça da Sé",
        complemento: "lado ímpar",
        bairro: "Sé",
        localidade: "São Paulo",
        uf: "SP",
        ibge: "3550308",
        gia: "1004",
        ddd: "11",
        siafi: "7107",
      },
    };

    const after = {
      cep: "01001-000",
      logradouro: "Praça da Sé",
      complemento: "lado ímpar",
      bairro: "Sé",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107",
      isFetching: false,
    };

    expect(address(before, action)).toEqual(after);
  });
});
