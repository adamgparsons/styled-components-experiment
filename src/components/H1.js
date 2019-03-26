import styled from "styled-components";
import { textStyle } from "styled-system";
import { spacing, colors } from "../constants";

const H1 = styled.h1`
  ${textStyle}
  ${spacing}
  ${colors}
`;

H1.defaultProps = {
  textStyle: "heading1"
};

export default H1;
