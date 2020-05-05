import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Decorator, Container, Box,
} from '../Basic/Wrapper';
import { H2 } from '../Basic/Text';
import { InfoTitle, InfoText } from '../Extended/Text';
import { TabSwitch, TabSwitchButton } from '../Basic/Button/Switch';

export default function Login({ children }) {
  const router = useRouter();
  return (
    <>
      <Decorator width="33vw" height="100vh" top="0px" right="0px" />
      <Container background="transparent">
        <div className="row">
          <div className="col-md">
            <Box>
              <H2 transform="uppercase" align="center">Welcome to</H2>
              <InfoTitle align="center">getJSON</InfoTitle>
              <InfoText align="center">
                The next generation social network &amp; community! Connect with your friends
                and play with our quests and badges gamification system!
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
          </div>
          <div className="col-md">
            {children}
          </div>
        </div>
      </Container>
    </>
  );
}
