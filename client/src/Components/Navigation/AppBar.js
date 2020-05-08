import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStore, faLaptopCode, faBook,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Basic/Button/Button';
import { device } from '../../style';

export const Appbar = styled.div`
    z-index: 2;
    background-color: ${(props) => props.theme.bg};width: 100%;
    display: none;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    position: static;
    bottom: 0px;
    font-family: "Rajdhani";
    margin-top: auto;
    color: ${(props) => props.theme.text1};
    transition: all 0.6s ease-in-out 0s;
    box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
    -webkit-box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media ${device.xs_sm}{
        display: flex;
    }
`;


export const Icon = styled(Button)`
    width: auto;
    font-size: 14px;
    list-style: none;
    padding: ${(props) => props.padding || '10px 15px'};
    margin: 0;
    color : ${(props) => (props.active ? props.theme.primary : props.theme.text1)};
    svg{
        margin: 0px 5px;
        font-size: 14px;
        inline-size: 17px;
    }

    @media ${device.web}{
        &:hover{
            color : ${(props) => props.theme.primary};
        }
    }
`;

export default function AppBar() {
  const router = useRouter();
  return (
    <Appbar>
      <Icon active={router.pathname === '/documentation'}>
        <FontAwesomeIcon icon={faBook} />
      </Icon>
      <Link href="/">
        <Icon active={router.pathname === '/explore'}>
          <FontAwesomeIcon icon={faLaptopCode} />
        </Icon>
      </Link>
      <Link href="/">
        <Icon active={router.pathname === '/dashboard'}>
          <FontAwesomeIcon icon={faStore} />
        </Icon>
      </Link>
    </Appbar>
  );
}
