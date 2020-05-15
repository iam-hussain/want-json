import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { device } from '../../style';
import { Button } from '../Basic/Button/Button';

export const SideBar = styled.div`
    left:  0px;//calc(calc(100vw/100) * 13);
    top: 50px;
    bottom: 50px;
    // z-index: 10;
    background-color: ${(props) => props.theme.bg};
    width: calc(calc(100vw/100) * 23);
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
     position: fixed;
    transition: all 0.6s ease-in-out 0s;

    
    &::-webkit-scrollbar-track {
        background-color:  ${(props) => props.theme.paper1};
    }

    &::-webkit-scrollbar {
        background-color:  ${(props) => props.theme.paper1};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.primary};
    }
    @media ${device.xs_sm}{
        opacity: 0;
      }
`;

export const Header = styled.h5`
    font-size: 1.2rem;
    margin: 5px 0px;
    padding-left: 20px;
    color: ${(props) => props.theme.text1};
`;

export const Group = styled.ul`
    font-size: 1rem;
    list-style: none;
`;
export const Item = styled.li`
    color : ${(props) => (props.active ? props.theme.primary : props.theme.text2)};
`;


export default function Dash() {
  return (
    <SideBar className="col-md-4">
      <Header>Getting Started</Header>
      <Group>
        <Item>How it works</Item>
        <Item>What is token</Item>
        <Item>Basic API Call</Item>
        <Item>Explore Payload&apos;s</Item>
      </Group>
      <Header>Static Payload</Header>
      <Group>
        <Item>what is static payload</Item>
        <Item>How to works</Item>
        <Item active>Why static payload</Item>
        <Item>How to create static paGroupoad</Item>
        <Item>Static API example</Item>
      </Group>
      <Header>Dynamic Payload</Header>
      <Group>
        <Item>what is dynamic payload</Item>
        <Item>How to works</Item>
        <Item>Why static payload</Item>
        <Item>How to create static paGroupoad</Item>
        <Item>Static API example and methods</Item>
      </Group>
      <Header>Help</Header>
      <Group>
        <Item>Contacting support</Item>
      </Group>
    </SideBar>
  );
}
