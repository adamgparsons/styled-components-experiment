import styled from "styled-components";
import { themeGet } from "styled-system";

const Heading1 = styled.h1`
  color: ${themeGet("colors.heritageBlue")};
  font-size: ${themeGet("fontSizes[4]")};
  line-height: ${themeGet("lineHeights[4]")};
  margin-bottom: ${themeGet("space[7]")};
  font-weight: ${themeGet("fontWeights.extraBold")};
`;

export default Heading1;
