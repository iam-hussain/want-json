import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { device } from '../../style';
import Page from './Page';
import { Button } from '../Basic/Button/Button';
import { Decorator } from '../Basic/Wrapper';

export const ActionBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    padding-left: 0;
    margin-bottom: 8px;
    padding: 8px 0px;
    // border-bottom: 2px solid;
    // border-color: ${(props) => props.theme.primary};
    text-align: center;
    transition: all 0.6s ease-in-out 0s;
    background-color : ${(props) => props.theme.paper1};
`;

export const ActionItem = styled(Button)`
    display: -ms-flexbox;
    display: flex;    
    justify-content: center;
    border-radius: 5px;
    color : ${(props) => (props.active ? props.theme.tertiary : props.theme.text2)};
    background-color : ${(props) => (props.active ? props.theme.primary : props.theme.paper1)};
    margin: 8px;
    padding: 8px;
    transition: all 0.3s ease-in-out 0s;

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
    margin: 10px;
    padding: 0.75rem 1.25rem;
    transition: all 0.3s ease-in-out 0s;  
    @media ${device.xs_sm}{
      padding: 28px 0px;
      margin: 0px;
  }
`;

export default function Dash({ children }) {
  const router = useRouter();
  return (
    <Page>
      <Decorator width="33vw" height="100vh" top="0px" right="0px" />
      <ActionBar>
        <Link href="/dashboard/payload/create">
          <ActionItem active={router.pathname === '/dashboard/payload/create'}>Create</ActionItem>
        </Link>
        <Link href="/dashboard/payload">
          <ActionItem active={router.pathname === '/dashboard/payload'}>My Payload</ActionItem>
        </Link>
        <Link href="/dashboard/profile">
          <ActionItem active={router.pathname === '/dashboard/profile'}>My Profile</ActionItem>
        </Link>
        <Link href="/dashboard/settings">
          <ActionItem active={router.pathname.match('/dashboard/settings')}>Settings</ActionItem>
        </Link>
      </ActionBar>
      <DashContent>
        {children}
      </DashContent>
    </Page>
  );
}
