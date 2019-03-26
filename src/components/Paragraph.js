import styled from "styled-components";
import { textStyle } from "styled-system";
import { spacing, colors } from "../constants";

const P = styled.p`
  ${textStyle};
  ${spacing}
  ${colors}
`;

P.defaultProps = {
  textStyle: "paragraph"
};

export default P;
