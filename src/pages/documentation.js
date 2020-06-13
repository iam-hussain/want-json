/* eslint-disable max-len */
import React from 'react';
import DocsLayout from '../components/Layout/Docs';
import CodeView from '../components/Basic/Code';
import {
  Article, Heading, SubHeading, ArticleContent, Content, Highlight,
} from '../components/Extended/Docs';

export function ContentMaker({ data }) {
  return (<Content>{data.content}</Content>);
}

export default function Docs() {
  return (
    <DocsLayout>
      <Article>
        <Heading>Introduction</Heading>
        <Content>
          wantJSON will let you create a custom Rest API in a simple way for development and testing. The Rest API is created by wantJSON we call by the name of Payload.
        </Content>
      </Article>
      <Article>
        <Heading>Why wantJSON ?</Heading>
        <Content>
          Assuming you are a front-end developer, You want to try some Rest API calls to manipulate data through the front end. Here wantJSON comes to help you to solve this problem with a free custom Rest API.
        </Content>
      </Article>
      <Article>
        <Heading>Getting Started</Heading>
        <ArticleContent>
          <SubHeading>How it works ?</SubHeading>
          <Content>
            Create a Payload in wantJSON using the JSON or Array of JSON Objects it will generate the Rest API. With those Rest API you can do the CRUD ( Create, Read, Update and Delete ) Operation on your JSON or Array of JSON Objects.
          </Content>
        </ArticleContent>
        <ArticleContent>
          <SubHeading>What is Payload ?</SubHeading>
          <Content>
            All the Rest API which are created through the wantJSON are called as Payload. Types of Payload are Static Payload and Dynamic Payload.
          </Content>
        </ArticleContent>
      </Article>
      <Article>
        <Heading>What is Payload ?</Heading>
        <Content>
          Role-based access control sets all current users to Admin-level users by default. To assign different roles to your account’s users, please visit the Account section of the control panel. There, you can choose the appropriate permissions level for each user. And when it’s time to add new users to your account, you’ll be able to easily select a role upon user creation.
        </Content>
        <ArticleContent>
          <SubHeading>Why static payload</SubHeading>
          <Content>
            Mailgun’s Send Time Optimization (STO) feature uses machine learning to analyze engagement data
            {' '}
            <Highlight>(opens and clicks)</Highlight>
            {' '}
            for a recipient to determine when a user is most engaged with their messages. If we have enough engagement data to make a determination of when a user is most engaged, Mailgun will hold onto the message and deliver it during that optimal period. The idea here is that if we can deliver a message to a user when they are most engaged, the message will be towards the top and is more likely to be engaged with.
          </Content>
          <CodeView height="auto" code={{ sample: 1234 }} />
        </ArticleContent>
      </Article>
      <Article>
        <Heading>Dynamic Payload</Heading>
        <Content>
          Mailgun’s Timezone Optimization feature allows senders to schedule messages to be delivered in a recipient’s local timezone. Similar to how our message scheduling works, with TZO you pass your desired delivery time, and Mailgun will convert that to a user’s local timezone, if we have data for that recipient. If we do not have data for that recipient, the message will be delivered immediately.
        </Content>
        <ArticleContent>
          <SubHeading>Why static payload</SubHeading>
          <Content>
            It’s important to note that email clients will strip out the
            {' '}
            <Highlight>text/x-amp-html</Highlight>
            {' '}
            MIME in your messages when you reply to or forward the message. This is another reason why you should ensure you have text and HTML versions as a fallback when you send your emails.
          </Content>
          <CodeView height="auto" code={{ this: 'test' }} />
        </ArticleContent>
      </Article>
    </DocsLayout>
  );
}
