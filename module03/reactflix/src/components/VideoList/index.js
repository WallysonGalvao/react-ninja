import React from "react";
import { connect } from "react-redux";
import { selecteVideoSingle } from "../../redux/reducers/video-single/action-creators";

import * as S from "./styles";

const VideoList = ({ videos, handleClick }) => (
  <S.Container>
    {Object.keys(videos).map((index) => {
      const { id, title } = videos[index];
      return (
        <S.Video key={id}>
          <S.VideoLink href="#" onClick={handleClick(id)}>
            <div>
              <S.PlayStyled />
            </div>
            <h2>{title}</h2>
          </S.VideoLink>
        </S.Video>
      );
    })}
  </S.Container>
);

const mapStateToProps = ({ videos }) => ({
  videos,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (id) => (e) => {
    e.preventDefault();
    dispatch(selecteVideoSingle(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
