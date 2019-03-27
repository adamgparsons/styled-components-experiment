import styled from "styled-components";
import {
  textStyle
} from "styled-system";
import {
  spacing,
  colors
} from "../constants";

const Text = styled.p `
  ${textStyle};
  ${spacing}
  ${colors}
`;

P.defaultProps = {
  textStyle: "paragraph"
};

export default Text;
