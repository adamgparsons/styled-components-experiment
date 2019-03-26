import styled from "styled-components";
import { spacing, colors, layout, positioning } from "../constants";

const PositionType = styled.div.attrs( type => ({
      'position': (() => {
        switch(type) {
          case 'absolute':
            return `absolute`;
          case 'fixed':
            return `fixed`;
          case 'relative':
            return `relative`;
          case 'sticky':
            return `sticky;
                    top:0`;

          default:
            return 'relative';
        }
})()
}))`
`;

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
