import React from 'react';
import styled from 'styled-components';
import NavBar from '../Navigation/NavBar';
import Footer from '../Navigation/Footer';
import AppBar from '../Navigation/AppBar';
import { Container } from '../Basic/Wrapper';

export const ContentWrapper = styled.div`
    display: flex;
    flex: 1;
    overflow: auto;
    background-color:  ${(props) => props.theme.bg};

    &::-webkit-scrollbar-track {
        background-color:  ${(props) => props.theme.paper};
    }

    &::-webkit-scrollbar {
        background-color:  ${(props) => props.theme.paper};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.primary};
    }
`;


export function PageWithOutContainer({ children }) {
  return (
    <>
      <NavBar />
      <ContentWrapper id="pageMaker">
        {children}
      </ContentWrapper>
      <AppBar />
      <Footer />
    </>
  );
}

export default function Page({ children }) {
  return (
    <>
      <NavBar />
      <ContentWrapper id="pageMaker">
        <Container>
          {children}
        </Container>
      </ContentWrapper>
      <AppBar />
      <Footer />
    </>
  );
}
