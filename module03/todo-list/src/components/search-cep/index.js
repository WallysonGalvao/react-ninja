import React from "react";
import { connect } from "react-redux";
import { fetchAddress } from "../../redux-flow/reducers/address/action-creators";

const SearchCep = ({
  cep,
  logradouro,
  bairro,
  localidade,
  uf,
  isFetching,
  handleSubmit,
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="cep" />
      <button type="submit" disabled={isFetching}>
        {isFetching ? "Buscando..." : "Buscar endereço"}
      </button>
    </form>

    <table>
      <thead>
        <tr>
          <td>CEP</td>
          <td>Endereço</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{cep}</td>
          <td>{logradouro}</td>
          <td>{bairro}</td>
          <td>{localidade}</td>
          <td>{uf}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const mapStateToProps = ({ address }) => address;

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault();
    const { value } = e.target.cep;
    setTimeout(() => {
      dispatch(fetchAddress(value));
    }, [1000]);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCep);
