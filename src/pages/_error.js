import React from 'react';
import Link from 'next/link';
import { PageWithOutContainer } from '../components/Layout/Page';
import {
  HeroImg, HeroTitle, HeroText, HeroButtonGroup, HeroColWrapper,
  HeroRowWrapper, HomeContainer,
} from '../components/Extended/Home';
import { PrimaryBtn } from '../components/Basic/Button/Button';

export default function ErrorPage() {
  return (
    <PageWithOutContainer>
      <HomeContainer>
        <HeroRowWrapper>
          <HeroColWrapper className="col-lg-5">
            <HeroImg src="/images/illustrations/404.png" alt="404" />
          </HeroColWrapper>
          <HeroColWrapper className="col-lg-6">
            <HeroTitle>What we do ?</HeroTitle>
            <HeroText padding="0px 0px 28px" align="center">
              We let you create custom Rest API in simple way for development and testing, also we call this Rest API as
              {' '}
              <span>Payload</span>
              . We separated payload into two types
              {' '}
              <span>Static</span>
              {' '}
              and
              {' '}
              <span>Dynamic</span>
              .
            </HeroText>
            <HeroButtonGroup>
              <Link href="/explore">
                <PrimaryBtn margin="5px">Explore</PrimaryBtn>
              </Link>
              <Link href="/dashboard/payload/create">
                <PrimaryBtn margin="5px">Create</PrimaryBtn>
              </Link>
            </HeroButtonGroup>
          </HeroColWrapper>
        </HeroRowWrapper>
      </HomeContainer>
    </PageWithOutContainer>
  );
}
