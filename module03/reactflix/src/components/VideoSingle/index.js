import React from "react";
import * as S from "./styles";

const VideoSingle = ({ id, title }) => (
  <S.Container>
    <S.Iframe
      width="560"
      height="480"
      src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;showinfo=0`}
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
    <S.Title>{title}</S.Title>
  </S.Container>
);

export default VideoSingle;
