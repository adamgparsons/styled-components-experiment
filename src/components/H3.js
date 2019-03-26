import styled from "styled-components";
import { textStyle } from "styled-system";
import { spacing, colors } from "../constants";

export const H3 = styled.h3`
  ${textStyle};
  ${spacing}
  ${colors}
`;

H3.defaultProps = {
  textStyle: "heading3"
};

export default H3;
