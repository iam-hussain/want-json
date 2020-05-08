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
    box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
    -webkit-box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);

    &::-webkit-scrollbar-track {
        background-color:  ${(props) => props.theme.paper1};
    }

    &::-webkit-scrollbar {
        background-color:  ${(props) => props.theme.paper1};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.primary};
    }
`;


export default function Page({ children }) {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Container padding="10px" shadow>
          {children}
        </Container>
      </ContentWrapper>
      <AppBar />
      <Footer />
    </>
  );
}
