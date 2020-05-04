import React from 'react';
import styled from 'styled-components';
import { Brand } from './Text';
import { rotate360, bounce } from './Animation';
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

export default function Loader({ index, opacity }) {
  return (
    <Cover index={index} opacity={opacity}>
      <Brand size="25px">getJSON.io</Brand>
      <Spinner>
        <Bubble top="0px" />
        <Bubble delay="-0.5s" right="0px" />
        <Bubble delay="-1s" bottom="0px" />
        <Bubble delay="-1.5s" bottom="0px" right="0px" />
      </Spinner>
    </Cover>
  );
}
