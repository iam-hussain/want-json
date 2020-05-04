import React from 'react';
import {
  Decorator, Container, Box,
} from '../Components/Basic/Wrapper';
import { H2 } from '../Components/Basic/Text';
import { InfoTitle, InfoText } from '../Components/Extended/Text';
import { TabSwitch, TabSwitchButton } from '../Components/Basic/Button/Switch';
import { CustomFormBox, BottomSeparator } from '../Components/Extended/Wrapper';
import { Button } from '../Components/Basic/Button/Button';
import LoginForm from '../Components/Form/Login';

export default function Login() {
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
                <TabSwitchButton active btlr="5px" bblr="5px">Login</TabSwitchButton>
                <TabSwitchButton btrr="5px" bbrr="5px">Register</TabSwitchButton>
              </TabSwitch>
            </Box>
          </div>
          <div className="col-md">
            <CustomFormBox>
              <H2 align="center" size="1.65rem">Account Login</H2>
              <LoginForm />
              <BottomSeparator>
                <Button padding="10px 14px">Forgot Password</Button>
              </BottomSeparator>
            </CustomFormBox>
          </div>
        </div>
      </Container>
    </>
  );
}
