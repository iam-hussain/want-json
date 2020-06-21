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
        <Heading>Dynamic Payload</Heading>
        <ArticleContent>
          <SubHeading>What is dynamic payload</SubHeading>
          <Content>
            Dynamic Payload is the one where the user can not just create the Payload but can also perform operations such as CRUD(Create, Read, Update and Delete) on your array of JSON Objects. When creating a Dynamic Payload each of the arrays of the JSON object has its own id(auto generated if the user does not provide). For a static Payload, the user can pass either a single JSON object or an array of JSON Objects, whereas for a dynamic Payload, it always has to be an array of JSON objects.
          </Content>
          <SubHeading>How it works</SubHeading>
          <Content>
            For a dynamic payload, the data is stored in an array of JSON objects and is manipulated based on user requirement and the dynamic payload is returned with a url that has the provided title in it.
          </Content>
          <SubHeading>Why dynamic payload</SubHeading>
          <Content>
            Dynamic Payload provides us the abilities to perform the data manipulation based on the requirement such as the CRUD(Create, Read, Update and Delete) operations. While using dynamic payload, the scope of usage of payload is not restricted to just fetch the data.
          </Content>
        </ArticleContent>
      </Article>
    </DocsLayout>
  );
}
