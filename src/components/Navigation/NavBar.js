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
    box-shadow:  ${(props) => props.theme.shadow};
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
    padding: 5px;
    border-radius: 5px;
    background: ${(props) => props.theme.tertiary};
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    position: absolute;
    top: ${(props) => (props.show ? '45px' : '-100vh')};
    right: 0px;
    box-shadow: ${(props) => props.theme.shadow};
    animation: ${(props) => (props.out ? fadeOut : fadeIn)};
    transition: visibility 1s linear;
    border: 2px solid;
    border-color:  ${(props) => props.theme.bg};
`;

export const DropdownLI = styled(MenuLI)`
    border-top: ${(props) => (props.separate ? `2px solid ${props.theme.primary}` : 'none')};
    clear: both;
    min-width: 200px;
    text-align: center;

    button{
      width: 180px;
      background: ${(props) => props.theme.tertiary};
    }
`;

export const MenuItem = styled(Button)`
    width: auto;
    font-size: 14px;
    list-style: none;
    padding: ${(props) => props.padding || '8px 15px'};    
    margin: 5px;
    color : ${(props) => (props.active ? props.theme.primary : props.theme.text1)};
    svg{
        margin: 0px 5px;
        font-size: 14px;
        inline-size: 17px;
    }
    
    @media ${device.md}{
      padding: 8px 5px; 
    }
    @media ${device.web}{
        &:hover{
            color : ${(props) => props.theme.primary};
            background-color:  ${(props) => props.theme.paper};
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
        <Link href="/"><Brand>wantJSON</Brand></Link>
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
                <span>Payload</span>
              </MenuItem>
            </Link>
          </MenuLI>
          <MenuLI>
            <Link href="/dashboard/payload">
              <MenuItem active={router.pathname.match('/dashboard/payload')}>
                <FontAwesomeIcon icon={faStore} />
                <span>Custom Payload</span>
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
                    <Link href="/dashboard/payload/create">
                      <MenuItem>
                        Create Payload
                      </MenuItem>
                    </Link>
                  </DropdownLI>
                  <DropdownLI mobile>
                    <Link href="/dashboard/profile">
                      <MenuItem>
                        Profile
                      </MenuItem>
                    </Link>
                  </DropdownLI>
                  <DropdownLI mobile>
                    <Link href="/dashboard/settings">
                      <MenuItem>
                        Settings
                      </MenuItem>
                    </Link>
                  </DropdownLI>
                  <DropdownLI mobile separate>
                    <MenuItem onClick={() => handleLogout()}>
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
