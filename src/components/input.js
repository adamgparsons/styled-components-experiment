import React, {
    Component
} from "react";
import styled from "styled-components";
import {
    themeGet
} from "styled-system";

const Label = styled.label `
display:block;
font-weight: ${themeGet("fontWeights.bold")};
margin-bottom: ${props => props.theme.space[3]};
`
const InputType = styled.input `
display:block;
border-radius: 0.125rem;
border: none;
-webkit-box-shadow: inset 0 0 0 0.125rem #dfdfdf;
box-shadow: inset 0 0 0 0.125rem #dfdfdf;
font-weight: 600;
line-height: 24px;
outline: none;
padding: 0.75rem 0.75rem;
`
const Button = styled.button `
    box-shadow: inset 0 0 0 0.125rem #81cec6;
    align-items: center;
    border: none;
    cursor: pointer;
    display: inline-flex;
    outline: none;
    padding: 0.75rem 1rem;
    font-size: ${props => props.theme.fontSizes[1]}
    font-weight: ${themeGet("fontWeights.semiBold")};
    line-height: ${props => props.theme.lineHeights[1]};
    color: ${themeGet("colors.heritageBlue")}
    background-color: ${themeGet("colors.turquoisePrimary")}
    border-radius: ${props => props.theme.radii[2]};
`

const Inputcontainer = styled.div`
  margin-bottom: ${props => props.theme.space[6]};
  line-height: ${props => props.theme.lineHeights[1]};
`;

class Input extends Component {

    render() {
      return(
          <React.Fragment>
            <Inputcontainer>
                <Label htmlFor="">Enter your name</Label>
                <InputType></InputType>
            </Inputcontainer>
            <Button>Submit</Button>
        </React.Fragment>
      ) 
      
    }
  }

export default Input;
