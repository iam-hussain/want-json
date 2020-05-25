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
              <Link href="/"><InfoTitle align="center">getJSON</InfoTitle></Link>
              <InfoText align="center">
                Join with us to create some free online custom REST API for development
                , testing and more in a simplest way with CRUD operations.
              </InfoText>
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
