import React from "react";
import { connect } from "react-redux";
import { openRegisterVideo } from "../../redux/reducers/ui/action-creators";

import * as S from "./styles";

const MainHeader = ({ onOpen }) => (
  <S.Header>
    <S.HeaderTitle>Reactflix</S.HeaderTitle>
    <S.RegisterButton onClick={onOpen}>Cadastrar vídeo</S.RegisterButton>
  </S.Header>
);

const mapDispatchToProps = (dispatch) => ({
  onOpen: () => dispatch(openRegisterVideo()),
});

export default connect(null, mapDispatchToProps)(MainHeader);
