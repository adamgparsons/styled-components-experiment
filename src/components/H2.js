import styled from "styled-components";
import { textStyle } from "styled-system";
import { spacing, colors } from "../constants";

export const H2 = styled.h2`
  ${textStyle};
  ${spacing}
  ${colors}
`;

H2.defaultProps = {
  textStyle: "heading2"
};

export default H2;
