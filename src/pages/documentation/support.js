/* eslint-disable max-len */
import React from 'react';
import DocsLayout from '../../components/Layout/Docs';
import {
  Article, Heading, Content,
} from '../../components/Extended/Docs';

export default function DocsIntroduction() {
  return (
    <DocsLayout>
      <Article>
        <Heading>Did we miss something?</Heading>
        <Content>
          For any other assistance regarding the payloads or if you have any other questions, please write to us at support@wantjson.com and we will get back to you in no time or if you want us to get in touch with you, submit your queries/feedback in our Contact Us page.
        </Content>
      </Article>
      <Article>
        <Heading>Partner with us?</Heading>
        <Content>
          We are open for partnerships at the moment. Please contact us if you want to expand your business with our help. We will be more than happy to shake hands(or a Namaste, maybe!).
        </Content>
      </Article>
    </DocsLayout>
  );
}
