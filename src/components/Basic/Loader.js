import React from 'react';
import styled from 'styled-components';
import { Brand } from './Text';
import { rotate360, bounce, jump } from './Animation';
import { Cover } from './Wrapper';

export const Spinner = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 10px;
  animation: ${rotate360} 2s linear infinite
`;

export const Bubble = styled.div`
    position: absolute;
    top: ${(props) => props.top || 'auto'};
    left: ${(props) => props.left || 'auto'};
    right: ${(props) => props.right || 'auto'};
    bottom: ${(props) => props.bottom || 'auto'};
    width: ${(props) => props.size || '50px'};
    height: ${(props) => props.size || '50px'};
    border-radius: 100%;
    background-color: ${(props) => props.theme.primary};
    animation: ${bounce} 2s ease-in-out infinite;
    animation-delay: ${(props) => props.delay || '0s'};
`;

export default function Loader({ show }) {
  return (
    <Cover show={show}>
      <Brand size="25px">wantJSON.io</Brand>
      <Spinner>
        <Bubble top="0px" />
        <Bubble delay="-0.5s" right="0px" />
        <Bubble delay="-1s" bottom="0px" />
        <Bubble delay="-1.5s" bottom="0px" right="0px" />
      </Spinner>
    </Cover>
  );
}

export const DotsGroup = styled.div`
  position: relative;
  width: 45px;
  height: 30px;
  cursor: pointer;
  margin: 10px 0px;
`;

export const Dots = styled.div`
    position: absolute;
    top: ${(props) => props.top || 'auto'};
    left: ${(props) => props.left || 'auto'};
    right: ${(props) => props.right || 'auto'};
    bottom: ${(props) => props.bottom || 'auto'};
    width: ${(props) => props.size || '10px'};
    height: ${(props) => props.size || '10px'};
    border-radius: 100%;
    background-color: ${(props) => props.theme.primary};
    animation: ${jump} 1s ease-in-out infinite;
    animation-delay: ${(props) => props.delay || '0s'};
`;


export function LoadMore({ click }) {
  return (
    <DotsGroup onClick={() => click()}>
      <Dots top="0px" left="0px" />
      <Dots delay="-0.25s" top="0px" left="15px" />
      <Dots delay="-0.5s" top="0px" left="35px" />
    </DotsGroup>
  );
}
