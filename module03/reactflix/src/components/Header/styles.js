import styled from "styled-components";
import { headerHeight } from "../../utils/constants";

export const Header = styled.header`
  align-items: center;
  background: #333;
  display: flex;
  height: ${headerHeight};
  justify-content: space-between;
  padding: 0 10px;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  margin-bottom: 0;
`;

export const RegisterButton = styled.button`
  margin-bottom: 0;
`;
