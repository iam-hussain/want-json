/* eslint-disable max-len */
import React from 'react';
import DocsLayout from '../../components/Layout/Docs';
import {
  Article, Heading, Content, ArticleContent, SubHeading,
} from '../../components/Extended/Docs';

export default function DocsIntroduction() {
  return (
    <DocsLayout>
      <Article>
        <Heading>Static Payload</Heading>
        <ArticleContent>
          <SubHeading>What is static payload</SubHeading>
          <Content>
            This is the simplest Payload that the user can use to simply fetch the data in simple form to fetch the complete object in one go.
          </Content>
          <SubHeading>How it works</SubHeading>
          <Content>
            For a static payload, the data is stored in a JSON object and is manipulated based on user requirement and the static payload is returned with a url that has the provided title in it.
          </Content>
          <SubHeading>Why static payload</SubHeading>
          <Content>
            There are certain instances where the user needs to simply fetch the data in an API where the user does not need to perform any particular operation than to just fetch the data through an API. For scenarios as such the user can use our Static Payload. The user also has the privilege to be able to create the Payload with or without authentication.
          </Content>
        </ArticleContent>
      </Article>
    </DocsLayout>
  );
}
