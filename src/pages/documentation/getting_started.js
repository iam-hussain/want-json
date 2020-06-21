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
        <Heading>Getting Started</Heading>
        <ArticleContent>
          <SubHeading>How it works</SubHeading>
          <Content>
            We have created an integrated system that generates an API with the array of data that the user passes with the title that the user provides in the title and generates the Payload URL with the title of the Payload in it. For example, we generated a Payload with title “test”, the Payload url will be generated as https://www.wantjson.com/test. Try it yourself.
          </Content>
          <SubHeading>What is Token</SubHeading>
          <Content>
            Simply put, token is an auto generated Hash Key, which needs to be passed to the header of the Payload. We use the tokens as a method of authentication of the Payload. For a public payload, header authentication is optional so the Payload may or may not have the token, whereas, for a Private Payload, header authentication is mandatory so for each Private Payload, there will be a unique token generated for them. For each payload there is only one unique token assigned, if the payload is edited or modified, then the token will be changed to another unique one. Tokens can be used to proceed with the authentication for your API testing tool. Here is an example of the view of a dummy Payload we created for reference.
          </Content>
          <SubHeading>Basic API Call</SubHeading>
          <Content>
            Go to the list of the existing Payload, pick a payload of your choice and copy the Payload URL, paste it in your API testing tool, then go to the authentication method, add the bearer token(the value of the token)
          </Content>
          <SubHeading>Explore Payload</SubHeading>
          <Content>
            We have provided the option to the users to be able to create both public and private Payload. For the public Payload, it will be available across the platform for all the users. It makes a wide range of already used Payloads by the developers that have been used for their purposes to be available to everyone else. We also have a wide variety of Verified Public Payloads that the users can use for their purpose. Verified Public Payloads come with a blue tick and are verified by our own Developers.
          </Content>
        </ArticleContent>
      </Article>
    </DocsLayout>
  );
}
