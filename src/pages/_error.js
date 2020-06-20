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
            <HeroTitle>Page not found !</HeroTitle>
            <HeroButtonGroup>
              <Link href="/">
                <PrimaryBtn margin="5px">Back to Home</PrimaryBtn>
              </Link>
            </HeroButtonGroup>
          </HeroColWrapper>
        </HeroRowWrapper>
      </HomeContainer>
    </PageWithOutContainer>
  );
}
