/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { device } from '../../style';
import { ASpan } from '../Basic/Text';
import menuList from './DocsMenu.json';

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

export const Wrapper = styled.div`
  width: auto;
  padding: 20px 15px;
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
  list-style-type: none;
`;
export const Item = styled.li`
  margin: 5px 0px;
`;

export const CloseTag = styled(ASpan)`
    position: absolute;
    top: 10px;
    left: 30px;
    display: none;

    @media ${device.xs_sm}{
      display: block;
      z-index: 100;
    }
`;

export const Header = styled.h5`
  font-size: 1.2rem;
  margin: 5px 0px;
  padding-right: 20px;
  font-family: "Rajdhani";
  border-right: 5px solid;
  border-color: ${(props) => (props.active ? props.theme.secondary : props.theme.bg)};
  color: ${(props) => (props.active ? props.theme.secondary : props.theme.text2)};

  @media ${device.web}{
    &:hover{
        color: ${(props) => props.theme.primary};
        cursor: pointer;
    }
  }
`;

export const SubHeader = styled.h6`
  position: relative;
  font-size: 1rem;
  margin: 5px 0px;
  padding-right: 20px;
  font-family: "Rajdhani";
  border-right: 3px solid;
  border-color: ${(props) => (props.active ? props.theme.secondary : props.theme.bg)};
  color : ${(props) => (props.active ? props.theme.text1 : props.theme.text3)};

  @media ${device.web}{
    &:hover{
        color: ${(props) => props.theme.primary};
        cursor: pointer;
    }
  }
`;

export default function DashSideBar({ show, setMenuToggle }) {
  const router = useRouter();
  const [urlHash, setURLHash] = useState('');

  useEffect(() => {
    setURLHash(window.location.hash);
  }, [process.browser && window.location.hash]);

  const handleRouteChange = () => {
    if (process.browser && window.location.hash) {
      setURLHash(window.location.hash);
    }
    setMenuToggle(false);
  };

  useEffect(() => {
    Router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <SideBar show={show}>
      <CloseTag onClick={() => setMenuToggle(false)}><FontAwesomeIcon icon={faTimes} /></CloseTag>
      <Wrapper>
        {menuList.map((menu, i) => (
          <Group key={`menu_${i}`}>
            <Link href={menu.url}>
              <Item>
                <Header active={router.pathname === menu.url}>{menu.title}</Header>
                {menu.sub.length > 0
                && (
                <Group>
                  {menu.sub.map((subMenu, j) => (
                    <Link href={subMenu.url} key={`subMenu${j}`}>
                      <Item>
                        <SubHeader active={urlHash === subMenu.hash}>{subMenu.title}</SubHeader>
                      </Item>
                    </Link>
                  ))}
                </Group>
                )}
              </Item>
            </Link>
          </Group>
        ))}
      </Wrapper>
    </SideBar>
  );
}
