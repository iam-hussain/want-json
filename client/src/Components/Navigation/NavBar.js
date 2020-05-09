import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import cookie from 'js-cookie';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook, faLaptopCode, faStore, faEllipsisV, faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Basic/Button/Button';
import { Container } from '../Basic/Wrapper';
import { Brand } from '../Basic/Text';
import { fadeIn, fadeOut } from '../Basic/Animation';
import { device } from '../../style';
import { userLogout } from '../../Redux/Actions/userActions';

export const Navbar = styled.div`
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 50px;
    padding: ${(props) => props.padding || '0px'};
    background-color:  ${(props) => props.theme.bg};
    transition: all 0.6s ease-in-out 0s;
    box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
    -webkit-box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
`;

export const MenuUL = styled.ul`
    width: auto;
    display: flex;
    list-style: none;
    margin: 0;
    padding-left: 0;
    transition: all 0.6s ease-in-out 0s;
    background-color:  ${(props) => props.theme.bg};
`;

export const MenuLI = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    transition: all 0.6s ease-in-out 0s;
    
    @media ${device.xs_sm}{
        display: ${(props) => (props.mobile ? 'flex' : 'none')};
    }
`;

export const DropdownUL = styled(MenuUL)`
    display: ${(props) => (props.show ? 'flex' : 'none')};;
    flex-direction: column;
    z-index: ${(props) => (props.show ? '20' : '-5')};
    padding: 10px 0px;
    border-radius: 5px;
    background: #colors[bg];
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    position: absolute;
    top: ${(props) => (props.show ? '45px' : '-100vh')};
    right: 0px;
    box-shadow: 0 0 60px 0 rgba(94, 92, 154, .12);
    -webkit-box-shadow: 0 0 60px 0 rgba(94, 92, 154, .12);
    animation: ${(props) => (props.out ? fadeOut : fadeIn)} .5s linear 1;
    transition: visibility 1s linear;
`;

export const DropdownLI = styled(MenuLI)`
    margin-top: ${(props) => (props.separate ? '5px' : '0px')};
    padding-top: ${(props) => (props.separate ? '5px' : '0px')};
    border-top: ${(props) => (props.separate ? `2px solid ${props.theme.primary}` : 'none')};
    clear: both;
    min-width: 200px;
    text-align: center;

    button{
      width: 180px;
      margin: 5px 0px;
    }
`;

export const MenuItem = styled(Button)`
    width: auto;
    font-size: 14px;
    list-style: none;
    padding: ${(props) => props.padding || '5px 15px'};    
    margin: 0 5px;
    color : ${(props) => (props.active ? props.theme.primary : props.theme.text1)};
    svg{
        margin: 0px 5px;
        font-size: 14px;
        inline-size: 17px;
    }

    @media ${device.web}{
        &:hover{
            color : ${(props) => props.theme.primary};
            box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
            -webkit-box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
        }
    }
`;

export default function NavBar() {
  const dispatch = useDispatch();
  const [menuToggle, setMenuToggle] = useState(false);
  const userData = useSelector((state) => state.user);
  const targetNode = useRef();
  const router = useRouter();
  const handelClick = (e) => {
    if (targetNode.current && !targetNode.current.contains(e.target) && menuToggle) {
      setMenuToggle(false);
    }
  };

  const handleLogout = () => {
    cookie.remove('token');
    window.localStorage.setItem('logout', Date.now());
    Router.push('/login');
    dispatch(userLogout());
  };

  useEffect(() => {
    document.addEventListener('click', handelClick);
    return () => {
      document.removeEventListener('click', handelClick);
    };
  }, [menuToggle]);

  return (
    <Navbar>
      <Container padding="0px 15px" justify="space-between">
        <Link href="/"><Brand>getJSON</Brand></Link>
        <MenuUL>
          <MenuLI>
            <Link href="/documentation">
              <MenuItem active={router.pathname === '/documentation'}>
                <FontAwesomeIcon icon={faBook} />
                <span>Documentation</span>
              </MenuItem>
            </Link>
          </MenuLI>
          <MenuLI>
            <Link href="/explore">
              <MenuItem active={router.pathname === '/explore'}>
                <FontAwesomeIcon icon={faLaptopCode} />
                <span>Payload&apos;s</span>
              </MenuItem>
            </Link>
          </MenuLI>
          <MenuLI>
            <Link href="/dashboard">
              <MenuItem active={router.pathname.match('/dashboard')}>
                <FontAwesomeIcon icon={faStore} />
                <span>Custom Payload&apos;s</span>
              </MenuItem>
            </Link>
          </MenuLI>
          {userData.logged
            ? (
              <MenuLI mobile onClick={() => setMenuToggle(!menuToggle)}>
                <MenuItem active={menuToggle}>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </MenuItem>
                <DropdownUL show={menuToggle} ref={targetNode}>
                  <DropdownLI mobile>
                    <Link href="/dashboard/payload">
                      <MenuItem padding="5px">
                        My Payload&apos;s
                      </MenuItem>
                    </Link>
                  </DropdownLI>
                  <DropdownLI mobile>
                    <Link href="/dashboard/profile">
                      <MenuItem padding="5px">
                        Profile
                      </MenuItem>
                    </Link>
                  </DropdownLI>
                  <DropdownLI mobile separate>
                    <MenuItem padding="5px" onClick={() => handleLogout()}>
                      Logout
                    </MenuItem>
                  </DropdownLI>
                </DropdownUL>
              </MenuLI>
            )
            : (
              <MenuLI mobile>
                <Link href="/login">
                  <MenuItem>
                    <FontAwesomeIcon icon={faUser} />
                  </MenuItem>
                </Link>
              </MenuLI>
            )}

        </MenuUL>
      </Container>
    </Navbar>
  );
}
