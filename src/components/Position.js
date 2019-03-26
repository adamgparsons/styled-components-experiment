import styled from "styled-components";
import { spacing, colors, layout, positioning } from "../constants";

export const PositionAbsolute = styled.div`
  position: absolute;
  ${spacing}
  ${colors}
  ${positioning}
  ${layout}
`;

export const PositionFixed = styled.div`
  position: fixed;
  ${spacing}
  ${colors}
  ${positioning}
  ${layout}
`;

export const PositionRelative = styled.div`
  position: relative;
  ${spacing}
  ${colors}
  ${positioning}
  ${layout}
`;

export const PositionSticky = styled.div`
  position: sticky;
  top: 0;
  ${props => props.theme.zIndices[1]}
  ${spacing}
  ${colors}
  ${positioning}
  ${layout}
`;

export default (PositionAbsolute,
PositionFixed,
PositionRelative,
PositionSticky);
