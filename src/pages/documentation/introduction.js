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
        <Heading>Introduction</Heading>
        <Content>
          With wantJSON, we let you create a custom REST API, in the simplest way there is, that could be used for development, integration and testing. We address the REST API that we are going to create as Payload. So for all your practical and impractical needs, just sign up today and create a payload of your own.
        </Content>
        <ArticleContent>
          <SubHeading>Why wantJSON?</SubHeading>
          <Content>
            A software developer comes across numerous situations where he needs dummy data, dummy response or entire dummy API for any practical or impractical situation and being developers ourselves we understand how difficult and time taking it could be at times to write an API, fetch the data, send the response and for even small small purposes. Also at times a developer might need to manipulate some data directly through the front end, without wanting to go into the backend and write an API. So we bring here wantJSON Payload to your service to save your time and effort by bringing a one stop destination that allows you to create custom REST APIs and creating them is easy as pie.
          </Content>
        </ArticleContent>
      </Article>
    </DocsLayout>
  );
}
