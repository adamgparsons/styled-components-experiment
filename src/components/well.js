import React, { Component } from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";

const H2 = styled.h2`
    margin:0;
    color: ${themeGet("colors.heritageBlue")};
    line-height: ${props => props.theme.lineHeights[3]};
    font-weight: ${themeGet("fontWeights.bold")};
    margin-bottom: ${props => props.theme.space[4]};
    font-size: ${props => props.theme.fontSizes[3]}
`;

const Paragraph = styled.p`
    margin-top:${props => props.theme.space[4]};
    margin-bottom:${props => props.theme.space[4]};
`;

const Wellcontainer = styled.div`
  color: ${themeGet("colors.heritageBlue")};
  
  line-height: ${props => props.theme.lineHeights[4]};
  margin-bottom: ${props => props.theme.space[5]};
  font-weight: ${themeGet("fontWeights.regular")};
  border :2px solid ${themeGet("colors.heritageBlue")};
  border-radius: ${props => props.theme.radii[2]};
  padding: ${props => props.theme.space[4]};
  padding-bottom: ${props => props.theme.space[5]};
`;

class Well extends Component {

    render() {
      return(
        <Wellcontainer>
            <H2> My Heading </H2>
            <Paragraph>
            Get six alpha pups in here for a focus group today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud yet strategic fit.
            </Paragraph>

        </Wellcontainer>
      ) 
      
    }
  }

export default Well;
