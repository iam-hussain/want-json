import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faAddressBook, faDatabase, faCog,
} from '@fortawesome/free-solid-svg-icons';
import { device } from '../../style';
import Page from './Page';
import { Button } from '../Basic/Button/Button';

export const ActionBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    padding-left: 0;
    margin: 28px 0px;
    text-align: center;
    transition: all 0.6s ease-in-out 0s;
    background-color : ${(props) => props.theme.bg};
`;

export const ActionItem = styled(Button)`
    display: -ms-flexbox;
    display: flex;    
    justify-content: center;
    border-radius: 5px;
    color : ${(props) => (props.active ? props.theme.tertiary : props.theme.text2)};
    background-color : ${(props) => (props.active ? props.theme.primary : props.theme.paper)};
    margin: 0px 8px;
    transition: all 0.3s ease-in-out 0s;

    span{
      padding-left: 8px;

      @media ${device.xs_md}{
        display: none;
      }
    }

    @media ${device.xs_md}{
      width: auto;
    }

    @media ${device.web}{
        &:hover{
            background-color : ${(props) => props.theme.tertiary};
            color : ${(props) => props.theme.secondary};
        }
    }
`;

export const DashContent = styled.div`
    display: -ms-flexbox;
    display: flex;    
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    transition: all 0.3s ease-in-out 0s;
`;

export default function Dash({ children }) {
  const router = useRouter();
  return (
    <Page>
      <ActionBar>
        <Link href="/dashboard/payload/create">
          <ActionItem active={router.pathname === '/dashboard/payload/create'}>
            <FontAwesomeIcon icon={faPlus} />
            <span>Create</span>
          </ActionItem>
        </Link>
        <Link href="/dashboard/payload">
          <ActionItem active={router.pathname === '/dashboard/payload'}>
            <FontAwesomeIcon icon={faDatabase} />
            <span>My Payload</span>
          </ActionItem>
        </Link>
        <Link href="/dashboard/profile">
          <ActionItem active={router.pathname === '/dashboard/profile'}>
            <FontAwesomeIcon icon={faAddressBook} />
            <span>My Profile</span>
          </ActionItem>
        </Link>
        <Link href="/dashboard/settings">
          <ActionItem active={router.pathname.match('/dashboard/settings')}>
            <FontAwesomeIcon icon={faCog} />
            <span>Settings</span>
          </ActionItem>
        </Link>
      </ActionBar>
      <DashContent>
        {children}
      </DashContent>
    </Page>
  );
}
