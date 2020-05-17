import React from 'react';
import Page from '../Components/Layout/Page';
import { Decorator, Box } from '../Components/Basic/Wrapper';
import { H3 } from '../Components/Basic/Text';
import { InfoTitle, InfoText } from '../Components/Extended/Text';

export default function Home() {
  return (
    <Page>
      <Decorator width="100vw" height="100vh" top="0px" right="0px" />
      <Box>
        <H3 transform="uppercase" align="center">Welcome to</H3>
        <InfoTitle align="center">getJSON</InfoTitle>
        <InfoText align="center">
          The next generation social network &amp; community! Connect with your friends
          and play with our quests and badges gamification system!
        </InfoText>
      </Box>
    </Page>
  );
}
