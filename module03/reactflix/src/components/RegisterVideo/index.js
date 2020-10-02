import React from "react";
import { connect } from "react-redux";
import { closeRegisterVideo } from "../../redux/reducers/ui/action-creators";
import { registerVideo } from "../../redux/reducers/videos/action-creators";

import * as S from "./styles";

const RegisterVideo = ({ onSubmit, onClose }) => (
  <S.Form onSubmit={onSubmit}>
    <h2>Cadastrar vídeo</h2>

    <label>ID do vídeo:</label>
    <input type="text" id="id" name="id" />

    <label>Título do vídeo:</label>
    <input type="text" id="title" name="title" />

    <button type="submit">Cadastrar</button>

    <S.ButtonClose type="button" onClick={onClose}>
      &times;
    </S.ButtonClose>
  </S.Form>
);

const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault();
    e.persist();

    const { id, title } = e.target;
    await dispatch(registerVideo({ id: id.value, title: title.value }));

    e.target.reset();
    e.target[0].focus();
  },

  onClose: () => dispatch(closeRegisterVideo()),
});

export default connect(null, mapDispatchToProps)(RegisterVideo);
