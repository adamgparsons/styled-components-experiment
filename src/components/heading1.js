import styled from "styled-components";
import { themeGet } from "styled-system";

const Heading1 = styled.h1`
  color: ${props => props.color || props.theme.colors.heritageBlue};
  font-size: ${props => props.color || props.theme.fontSizes[4]};
  line-height: ${props => props.color || props.theme.lineHeights[4]};
  margin-bottom: ${props => props.color || props.theme.space[7]};
  /* font-weight: ${themeGet("fontWeights.extraBold")}; */
`;

export default Heading1;
