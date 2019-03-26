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
    border: none;
    -webkit-box-shadow: inset 0 0 0 0.125rem #dfdfdf;
    box-shadow: inset 0 0 0 0.125rem #dfdfdf;
    outline: none;
    padding: 0.75rem 0.75rem;
    line-height: ${props => props.theme.lineHeights[1]};
    font-weight: ${themeGet("fontWeights.semiBold")};
    border-radius: ${props => props.theme.radii[2]};
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

const FormContainer = styled.form`
    margin-bottom: ${props => props.theme.space[6]};
`

class Form extends Component {

    render() {
      return(
          <FormContainer>
            <Inputcontainer>
                <Label htmlFor="">Enter your name</Label>
                <InputType></InputType>
            </Inputcontainer>
            <Button>Submit</Button>
        </FormContainer>
      ) 
      
    }
  }

export default Form;
