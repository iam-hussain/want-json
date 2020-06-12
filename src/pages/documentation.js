/* eslint-disable max-len */
import React from 'react';
import DocsLayout from '../components/Layout/Docs';
import CodeView from '../components/Basic/Code';
import {
  Article, Heading, SubHeading, ArticleContent, Content, Highlight,
} from '../components/Extended/Docs';
// import DocsData from '../assets/docs.json';

export default function Docs() {
  return (
    <DocsLayout>
      {/* {DocsData.map((D) => (
        <Article>
          {D.id}
        </Article>
      ))} */}
      <Article>
        <Heading>Introduction</Heading>
        <Content>
          This document is meant to be an overview of all of the capabilities of Mailgun and how you can best leverage those capabilities. It is organized around the four major features that Mailgun provides:
          At the heart of Mailgun is the API. Most of the Mailgun service can be accessed through the RESTful HTTP API without the need to install any libraries. However, we have written Libraries for many popular languages. Be sure to check out the additional capabilities provided by using our libraries.
        </Content>
      </Article>
      <Article>
        <Heading>Getting Started</Heading>
        <ArticleContent>
          <SubHeading>How it works ?</SubHeading>
          <Content>
            Each new Mailgun account is automatically provisioned with a sandbox domain sandbox @mailgun.org. This domain is to be used for testing only. It allows both sending and receiving messages; and also tracking can be enabled for it. But it only allows sending to a list of up to 5 authorized recipients. This limitation is also in effect for routes that are triggered by messages addressed to the sandbox domain and mailing lists created under that domain.
          </Content>
          <Content>
            To be able to use Mailgun in production a custom domain(s) has to be created and verified with Mailgun.
          </Content>
          <Content>
            Verifying your domain is easy. Start by adding a domain or subdomain you own in the Domains tab of the Mailgun control panel. Next, add the two TXT DNS records found in the Domain Verification  DNS section of the domain settings page of the Mailgun control panel to your DNS provider:
          </Content>
        </ArticleContent>
      </Article>
      <Article>
        <Heading>Static Payload</Heading>
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
