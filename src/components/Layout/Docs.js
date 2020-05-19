import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { device } from '../../style';
import { PageWithOutContainer } from './Page';
import DashSideBar from '../Navigation/DocsBar';
import { Container } from '../Basic/Wrapper';
import { Button } from '../Basic/Button/Button';

export const DocsContainer = styled(Container)`
  margin-left: calc(calc(100vw/100) * 30);
  background-color : ${(props) => props.theme.bg};
  max-width: 100%;
  @media ${device.md_xxl}{
    max-width: 100%;
  }
  @media ${device.xs_sm}{
    margin-left: auto;
  }
`;

export const MobileMenu = styled(Button)`  
  position: absolute;
  bottom: 65px;
  right: 35px;
  font-size: 18px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.tertiary};
  box-shadow: ${(props) => props.theme.shadow};
  height: 35px;
  width: 35px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 0px;

  @media ${device.xs_sm}{
    display: flex;
  }
`;

export default function Dash({ children }) {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <PageWithOutContainer>
      <MobileMenu onClick={() => setMenuToggle(!menuToggle)}>
        <FontAwesomeIcon icon={faBars} />
      </MobileMenu>
      <DashSideBar show={menuToggle} setMenuToggle={setMenuToggle} />
      <DocsContainer>
        {children}
      </DocsContainer>
    </PageWithOutContainer>
  );
}
