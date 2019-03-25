import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  color: ${props => props.color || props.theme.colors.grey};
  z-index: ${props => props.zIndex || props.theme.zIndices[1]};
  background-color: ${props => props.theme.colors.heritageBlue};
  position: absolute;
  margin-bottom: ${props => props.theme.space[4]};
  width: 100%;
  .wrapper {
    padding-left: ${props => props.theme.space[4]};
    padding-right: ${props => props.theme.space[4]};
  }
  .headerContent {
      display: flex;
      align-items:center;
  }
  .logo{
      padding-top: ${props => props.theme.space[3]};
      padding-bottom :${props => props.theme.space[3]};
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <div className="headerContent">
          <div className="logo">
            
            <img
              src="https://citizensadvice.github.io/cads/images/citizens_advice_logo.svg"
              alt="Citizens Advice logo"
            />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
