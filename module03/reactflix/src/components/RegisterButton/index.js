import React from "react";
import { connect } from "react-redux";
import { registerVideo } from "../../redux/reducers/videos/action-creators";

import * as S from "./styles";

const RegisterButton = ({ onSubmit }) => (
  <S.Form onSubmit={onSubmit}>
    <h2>Cadastrar vídeo</h2>

    <label>ID do vídeo:</label>
    <input type="text" id="id" name="id" />

    <label>Título do vídeo:</label>
    <input type="text" id="title" name="title" />

    <button type="submit">Cadastrar</button>
  </S.Form>
);

const dispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault();
    e.persist();

    const { id, title } = e.target;
    await dispatch(registerVideo({ id: id.value, title: title.value }));

    e.target.reset();
    e.target[0].focus();
  },
});

export default connect(null, dispatchToProps)(RegisterButton);
