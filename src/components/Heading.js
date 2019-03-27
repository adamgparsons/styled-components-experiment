import React, {Component} from 'react';
import styled from 'styled-components';
import {textStyle} from 'styled-system';
import {spacing, colors} from '../constants';

// const HeadingStyling = (headingElement) => {
//   return(
//     const headingElement = styled.headingElement`
//       ${textStyle}
//       ${spacing}
//       ${colors}
//     `;
//   )
// }

const H1 = styled.h1`
  ${textStyle}
  ${spacing}
  ${colors}
`;

H1.defaultProps = {
  textStyle: 'heading1'
};

export const H2 = styled.h2`
  ${textStyle};
  ${spacing}
  ${colors}
`;

H2.defaultProps = {
  textStyle: 'heading2'
};

export const H3 = styled.h3`
  ${textStyle};
  ${spacing}
  ${colors}
`;

H3.defaultProps = {
  textStyle: 'heading3'
};

const HeaderSwitch = props => {
  console.log(props);
  return (
    <React.Fragment>
      {(() => {
        switch (props.level) {
          case '1':
            return <H1 {...props}>{props.children}</H1>;
          case '2':
            return <H2 {...props}>{props.children}</H2>;
          case '3':
            return <H3 {...props}>{props.children}</H3>;
          default:
            return <H1 {...props}>{props.children}</H1>;
        }
      })()}
    </React.Fragment>
  );
};

class Heading extends Component {
  render() {
    //console.log(this.props);
    return <React.Fragment>{HeaderSwitch(this.props)}</React.Fragment>;
  }
}

export default Heading;
