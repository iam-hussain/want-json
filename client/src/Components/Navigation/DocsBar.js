import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { device } from '../../style';
import { ASpan } from '../Basic/Text';

export const SideBar = styled.div`
  left:  0px;
  top: 50px;
  bottom: 50px;
  z-index: 0;
  background-color: ${(props) => props.theme.tertiary};
  box-shadow: ${(props) => props.theme.shadow};
  width: calc(calc(100vw/100) * 30);
  overflow: hidden;
  position: fixed;
  transition: all 0.6s ease-in-out 0s;
  
  @media ${device.xs_sm}{
      opacity: ${(props) => (props.show ? '1' : '0')};
      width: 100%;
      z-index: ${(props) => (props.show ? '100' : '-10')};
      top: 0px;
      bottom: 0px;
      left: ${(props) => (props.show ? '0px' : '-100vw')};
  }
`;

export const Header = styled.h5`
  font-size: 1.2rem;
  margin: 5px 0px;
  padding-right: 20px;
  font-family: "Rajdhani";
  color: ${(props) => props.theme.text2};

  @media ${device.web}{
    &:hover{
        color: ${(props) => props.theme.secondary};
        cursor: pointer;
    }
  }
`;

export const Wrapper = styled.div`
  width: auto;
  padding: 15px;
  text-align: right;
  height: 100%;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 0;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  
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

export const Group = styled.ul`
  font-family: "Rajdhani";
  font-size: 1rem;
  list-style: none;
  margin: ${(props) => props.margin || '0px 0px 1rem'};
  padding: 0px;
  padding-right: 25px;
`;
export const Item = styled.li`
  color : ${(props) => (props.active ? props.theme.primary : props.theme.text3)};

  @media ${device.web}{
    &:hover{
        color: ${(props) => props.theme.secondary};
        cursor: pointer;
    }
  }
`;

export const CloseTag = styled(ASpan)`
    position: absolute;
    top: 10px;
    left: 30px;
    display: none;

    @media ${device.xs_sm}{
      display: block;
      z-index: 100px;
    }
`;

export default function DashSideBar({ show, setMenuToggle }) {
  return (
    <SideBar show={show}>
      <CloseTag onClick={() => setMenuToggle(false)}><FontAwesomeIcon icon={faTimes} /></CloseTag>
      <Wrapper>
        <Header>Introduction</Header>
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
          <Item>How to create static payload</Item>
          <Item>Static API example</Item>
        </Group>
        <Header>Dynamic Payload</Header>
        <Group>
          <Item>what is dynamic payload</Item>
          <Item>How to works</Item>
          <Item>Why static payload</Item>
          <Item>How to create static payload</Item>
          <Item>Static API example and methods</Item>
        </Group>
        <Header>Help</Header>
        <Group margin="0px">
          <Item>Contacting support</Item>
        </Group>
      </Wrapper>
    </SideBar>
  );
}
