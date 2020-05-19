/* eslint-disable max-len */
import React from 'react';
import { PageWithOutContainer } from '../components/Layout/Page';
import {
  HeroImg, HeroTitle, HeroText, HeroButtonGroup, HeroColWrapper,
  HeroRowWrapper, HomeContainer, Text, BoxRow, Methods, MethodTable,
} from '../components/Extended/Home';
import { PrimaryBtn } from '../components/Basic/Button/Button';
import { H4, P } from '../components/Basic/Text';
import CodeView from '../components/Basic/Code';

export default function Home() {
  return (
    <PageWithOutContainer>
      {/* <Decorator width="33vw" height="100vh" top="0px" left="0px" /> */}
      <HomeContainer>
        <HeroRowWrapper margin="28px 0px">
          <HeroColWrapper className="col-lg-5">
            <HeroImg src="/img/illustrations/undraw_code_review_l1q9.svg" alt="Hero" />
          </HeroColWrapper>
          <HeroColWrapper className="col-lg-6">
            <HeroTitle>How can we help you?</HeroTitle>
            <HeroText padding="0px 0px 28px" align="center">
              The best thing about Freepik’s free vector images?
              You don’t need to provide any attribution.
              You just need to create an account, then start downloading illustrations and icons,
              saving your favorites to your account.
            </HeroText>
            <HeroButtonGroup>
              <PrimaryBtn margin="5px">Explore</PrimaryBtn>
              <PrimaryBtn margin="5px">Create</PrimaryBtn>
            </HeroButtonGroup>
          </HeroColWrapper>
        </HeroRowWrapper>
        {/* <Heading>Lets go with a Demo</Heading> */}
        <BoxRow margin="0px 0px">
          <HeroColWrapper className="col-md-6">
            <H4 font="Rajdhani" align="center" margin="0px 0px 10px">Static Payload</H4>
            <Text>All of these are available thanks to a community of creatives who regularly contribute their vector designs.</Text>
            <CodeView margin="10px 0px 28px" code={{ this: 'test' }} />
          </HeroColWrapper>
          <HeroColWrapper className="col-md-6">
            <H4 font="Rajdhani" align="center" margin="0px 0px 10px">Dynamic Payload</H4>
            <Text>All of these are available thanks to a community of creatives who regularly contribute their vector designs.</Text>
            <CodeView margin="10px 0px 28px" code={{ this: 'test' }} />
          </HeroColWrapper>
        </BoxRow>
        <MethodTable>
          <tbody>
            <tr>
              <td>Static</td>
              <td>
                <Methods>
                  <span>Fetch</span>
                </Methods>
              </td>
            </tr>

            <tr>
              <td>Dynamic</td>
              <td>
                <Methods>
                  <span>Fetch All</span>
                  <span>Fetch One</span>
                  <span>Add</span>
                  <span>Update</span>
                  <span>Delete</span>
                </Methods>
              </td>
            </tr>
          </tbody>
        </MethodTable>
        <BoxRow margin="0px">
          <HeroColWrapper className="col-md-6">
            <P font="Rajdhani">Request</P>
            <CodeView margin="0px 0px 28px" code={{ this: 'test' }} />
          </HeroColWrapper>
          <HeroColWrapper className="col-md-6">
            <P font="Rajdhani">Response</P>
            <CodeView margin="0px 0px 28px" code={{ this: 'test' }} />
          </HeroColWrapper>
        </BoxRow>

      </HomeContainer>
    </PageWithOutContainer>
  );
}
