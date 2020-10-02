import styled from "styled-components";
import Play from "../Play";

export const PlayStyled = styled(Play)`
  fill: #999;
  height: 50px;
  transition: all 0.15s ease-in-out;
  width: 50px;
`;

export const Video = styled.section`
  &:hover ${PlayStyled} {
    transform: scale(1.5);
  }

  div {
    align-items: center;
    border: 1px solid #999;
    display: flex;
    height: 150px;
    justify-content: center;
  }
  h2 {
    font-size: 18px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
`;

export const VideoLink = styled.a`
  color: inherit;
`;
