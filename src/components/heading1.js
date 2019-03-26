import styled from "styled-components";
import { themeGet } from "styled-system";

const Heading1 = styled.h1`
  color: ${themeGet("colors.heritageBlue")};
  font-size: ${props => props.theme.fontSizes[4]};
  line-height: ${props => props.theme.lineHeights[4]};
  margin-bottom: ${props => props.theme.space[7]};
  font-weight: ${themeGet("fontWeights.extraBold")};
`;

export default Heading1;
