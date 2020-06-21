import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Decorator, Container, Box, RowWrapper, ColWrapper,
} from '../Basic/Wrapper';
import { H3 } from '../Basic/Text';
import { InfoTitle, InfoText } from '../Extended/Text';
import { TabSwitch, TabSwitchButton } from '../Basic/Button/Switch';

export default function Login({ children }) {
  const router = useRouter();
  return (
    <>
      <Decorator width="33vw" height="100vh" top="0px" right="0px" />
      <Container background="transparent">
        <RowWrapper>
          <ColWrapper className="col-md">
            <Box>
              <H3 transform="uppercase" align="center">Welcome to</H3>
              <Link href="/"><InfoTitle align="center">wantJSON</InfoTitle></Link>
              {router.pathname === '/reset_password' && <InfoText align="center">It Happens. Nothing to worry, we are here for you. Just one step verification of your identity and you’re all set again.</InfoText>}
              {router.pathname === '/login' && (
              <>
                <InfoText align="center">WE MISSED YOU, GLAD TO HAVE YOU BACK…</InfoText>
                <InfoText align="center">Explore many free online custom REST APIs for development, testing and more in the simplest way.</InfoText>
              </>
              )}
              {router.pathname !== '/login' && router.pathname !== '/reset_password' && (
              <>
                <InfoText align="center">YOUR ONE STOP SOLUTION TO ALL API NEEDS</InfoText>
                <InfoText align="center">Join us to create one and many free online custom REST APIs for development, testing and more in the simplest way.</InfoText>
              </>
              )}
              <TabSwitch>
                <Link href="/login">
                  <TabSwitchButton active={router.pathname === '/login'} btlr="5px" bblr="5px">Login</TabSwitchButton>
                </Link>
                <Link href="/register">
                  <TabSwitchButton active={router.pathname === '/register'} btrr="5px" bbrr="5px">Register</TabSwitchButton>
                </Link>
              </TabSwitch>
            </Box>
          </ColWrapper>
          <ColWrapper className="col-md">
            {children}
          </ColWrapper>
        </RowWrapper>
      </Container>
    </>
  );
}
