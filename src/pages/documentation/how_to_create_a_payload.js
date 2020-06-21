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
        <Heading>How to create a payload</Heading>
        <ArticleContent>
          <SubHeading>Static Payload</SubHeading>
          <Content>
            Static Payload can be created very easily in a few simple steps which are explained below:
            <ul>
              <li>After registering successfully into the platform, go to the Custom Payload Page, and click on create.</li>
              <li>A new page - “create Payload” will open, with fields to be entered to create the Payload.</li>
              <li>
                Enter the value for the following fields:
                <ul>
                  <li>Payload Title - The name or title of the Payload that will also be the path or the url of the Payload</li>
                  <li>Description: A brief description of what the Payload does or is about</li>
                  <li>Keywords: Keywords are like tags that will be used for search purpose of the payload</li>
                  <li>Payload type: Selection should be “Static” as we are creating a static Payload</li>
                  <li>Description: A brief description of what the Payload does or is about</li>
                  <li>
                    Visibility: There are two type of visibilities that the user can choose from
                    <ul>
                      <li>
                        Public: For the Payloads with Public visibility set, all the users across the platform can search, view and use the Payload based on their needs. Public payloads can be used with or without the authentication.
                      </li>
                      <li>
                        Private: Payloads with private visibility will be visible to everyone but will only be accessible through the authentication token by the user who is creating the payload. Although other users can view the payload but will not be able to view the Token and/or JSON. In order for a user to create a private payload, the header authentication needs to be selected as yes else the user will not be allowed to create a private payload.
                      </li>
                    </ul>
                  </li>
                  <li>Header Authentication: Header authentication is for the security of your Payload. For creating any Public Payload, its an optional field whereas for a private payload, Header Authentication must be selected as “yes”. The token for accessing the API is generated from the header authentication selection.</li>
                  <li>JSON Code: Editor to allow the user to enter the JSON that he wants to pass through the Payload. For a static payload, the user can either pass a single JSON object or an array of JSON objects.</li>
                </ul>
              </li>
            </ul>
          </Content>
          <SubHeading>Static Payload</SubHeading>
          <Content>
            Dynamic Payload can be created very easily in a few simple steps which are explained below:
            <ul>
              <li>After registering successfully into the platform, go to the Custom Payload Page, and click on create.</li>
              <li>A new page - “create Payload” will open, with fields to be entered to create the Payload.</li>
              <li>
                Enter the value for the following fields:
                <ul>
                  <li>Payload Title - The name or title of the Payload that will also be the path or the url of the Payload</li>
                  <li>Description: A brief description of what the Payload does or is about</li>
                  <li>Keywords: Keywords are like tags that will be used for search purpose of the payload</li>
                  <li>Payload type: Selection should be “Dynamic” as we are creating a Dynamic Payload.</li>
                  <li>Description: A brief description of what the Payload does or is about</li>
                  <li>
                    Visibility: There are two type of visibilities that the user can choose from
                    <ul>
                      <li>
                        Public: For the Payloads with Public visibility set, all the users across the platform can search, view and use the Payload based on their needs. Public payloads can be used with or without the authentication.
                      </li>
                      <li>
                        Private: Payloads with private visibility will be visible to everyone but will only be accessible through the authentication token by the user who is creating the payload. Although other users can view the payload but will not be able to view the Token and/or JSON. In order for a user to create a private payload, the header authentication needs to be selected as yes else the user will not be allowed to create a private payload.
                      </li>
                    </ul>
                  </li>
                  <li>Header Authentication: Header authentication is for the security of your Payload. For creating any Public Payload, its an optional field whereas for a private payload, Header Authentication must be selected as “yes”. The token for accessing the API is generated from the header authentication selection.</li>
                  <li>JSON Code: Editor to allow the user to enter the JSON that he wants to pass through the Payload. For a static payload, the user can either pass a single JSON object or an array of JSON objects.</li>
                </ul>
              </li>
            </ul>
          </Content>
        </ArticleContent>
      </Article>
    </DocsLayout>
  );
}
