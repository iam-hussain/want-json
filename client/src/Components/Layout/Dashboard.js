import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.primary};
    text-align: center;
    transition: all 0.6s ease-in-out 0s;
`;

export const ActionItem = styled(Button)`
    display: -ms-flexbox;
    display: flex;    
    justify-content: center;
    border-radius: 5px;
    width: 130px;
    color : ${(props) => (props.active ? props.theme.tertiary : props.theme.primary)};
    background-color : ${(props) => (props.active ? props.theme.primary : props.theme.tertiary)};
    margin: 8px;
    padding: 8px;
    transition: all 0.3s ease-in-out 0s;
    box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
    -webkit-box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);

    @media ${device.web}{
        &:hover{
            background-color : ${(props) => props.theme.paper1};
            color : ${(props) => props.theme.text1};
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
    height: 1000px;
    border-radius: 5px;
    margin: 10px;
    padding: 0.75rem 1.25rem;
    transition: all 0.3s ease-in-out 0s;  
`;

export default function Dash({ children }) {
  const router = useRouter();
  return (
    <Page>
      <ActionBar>
        <Link href="/dashboard/api/create">
          <ActionItem active={router.pathname === '/dashboard/api/create'}>Create API</ActionItem>
        </Link>
        <Link href="/dashboard/api">
          <ActionItem active={router.pathname === '/dashboard/api'}>My API</ActionItem>
        </Link>
        <Link href="/dashboard/profile">
          <ActionItem active={router.pathname === '/dashboard/profile'}>My Profile</ActionItem>
        </Link>
        <Link href="/dashboard/settings">
          <ActionItem active={router.pathname === '/dashboard/settings'}>Settings</ActionItem>
        </Link>
      </ActionBar>
      <DashContent>
        {children}
      </DashContent>
    </Page>
  );
}
