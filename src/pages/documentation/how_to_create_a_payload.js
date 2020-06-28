/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
import Router from 'next/router';
import CodeView from '../../components/Basic/Code';
import DocsLayout from '../../components/Layout/Docs';
import {
  Article, DocH5, DocH1, DocP, Content, DocH2, Highlight,
} from '../../components/Extended/Docs';

export default function DocsHowtoCreate() {
  const [urlHash, setURLHash] = useState([]);
  const subRefOne = useRef();
  const subRefTwo = useRef();

  useEffect(() => {
    setURLHash(window.location.hash);
  }, [process.browser]);

  const handleRouteChange = () => {
    if (process.browser) {
      if (window.location.hash) {
        setURLHash(window.location.hash);
      } else {
        setURLHash('');
      }
    }
  };

  useEffect(() => {
    Router.events.on('hashChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, []);

  const scrollNow = (element = undefined) => {
    const page = document.getElementById('pageMaker');
    if (element) {
      page.scrollTo({
        behavior: 'smooth',
        top: (element.current.offsetTop - 50),
      });
    } else {
      page.scrollTo({
        behavior: 'smooth',
        top: (0),
      });
    }
  };

  useEffect(() => {
    if (urlHash === '#static_payload') {
      scrollNow(subRefOne);
    } else if (urlHash === '#dynamic_payload') {
      scrollNow(subRefTwo);
    } else {
      scrollNow();
    }
  }, [urlHash]);

  return (
    <DocsLayout>
      <Article>
        <DocH1>How to create a payload</DocH1>
        <Content>
          <DocH2 ref={subRefOne}>Static Payload</DocH2>
          <DocP>
            Static Payload can be created very easily in a few simple steps which are explained below:
          </DocP>
          <Content>
            <ul>
              <li>After registering successfully into the platform, go to the Custom Payload Page, and click on create.</li>
              <li>
                A new page -
                <Highlight>“create Payload”</Highlight>
                {' '}
                will open, with fields to be entered to create the Payload.
              </li>
              <li>
                Enter the value for the following fields:
                <ul>
                  <li>
                    <Highlight>Payload Title</Highlight>
                    {' '}
                    - The name or title of the Payload that will also be the path or the url of the Payload
                  </li>
                  <li>
                    <Highlight>Description</Highlight>
                    : A brief description of what the Payload does or is about
                  </li>
                  <li>
                    <Highlight>Keywords</Highlight>
                    : Keywords are like tags that will be used for search purpose of the payload
                  </li>
                  <li>
                    <Highlight>Payload type</Highlight>
                    : Selection should be
                    {' '}
                    <Highlight>“Static”</Highlight>
                    {' '}
                    as we are creating a static Payload
                  </li>
                  <li>
                    <Highlight>Visibility</Highlight>
                    : There are two type of visibilities that the user can choose from
                    <ul>
                      <li>
                        <Highlight>Public</Highlight>
                        : For the Payloads with Public visibility set, all the users across the platform can search, view and use the Payload based on their needs.
                      </li>
                      <li>
                        <Highlight>Private</Highlight>
                        : Payloads with private visibility will be visible to everyone but will only be accessible through the authentication token by the user who is creating the payload. Although other users can view the payload but will not be able to view the Token and/or JSON.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Highlight>JSON Code</Highlight>
                    : Editor to allow the user to enter the JSON that he wants to pass through the Payload. For a static payload, the user can either pass a single JSON object or an array of JSON objects.
                  </li>
                </ul>
              </li>
            </ul>
          </Content>

          <DocH5>Static Payload JSON Code Example</DocH5>
          <CodeView
            height="auto"
            code={{
              name: 'Glenna Reichert',
              username: 'Delphine',
              email: 'Chaim_McDermott@dana.io',
              address: {
                street: 'Dayna Park',
                suite: 'Suite 449',
                city: 'Bartholomebury',
                zipcode: '76495-3109',
                geo: {
                  lat: '24.6463',
                  lng: '-168.8889',
                },
              },
              phone: '(775)976-6794 x41206',
              website: 'conrad.com',
              company: {
                name: 'Yost and Sons',
                catchPhrase: 'Switchable contextually-based project',
                bs: 'aggregate real-time technologies',
              },
            }}
          />
          <DocH2 ref={subRefTwo}>Dynamic Payload</DocH2>
          <DocP>
            Dynamic Payload can be created very easily in a few simple steps which are explained below:
          </DocP>
          <Content>
            <ul>
              <li>After registering successfully into the platform, go to the Custom Payload Page, and click on create.</li>
              <li>
                A new page -
                <Highlight>“create Payload”</Highlight>
                {' '}
                will open, with fields to be entered to create the Payload.
              </li>
              <li>
                Enter the value for the following fields:
                <ul>
                  <li>
                    <Highlight>Payload Title</Highlight>
                    {' '}
                    - The name or title of the Payload that will also be the path or the url of the Payload
                  </li>
                  <li>
                    <Highlight>Description</Highlight>
                    : A brief description of what the Payload does or is about
                  </li>
                  <li>
                    <Highlight>Keywords</Highlight>
                    : Keywords are like tags that will be used for search purpose of the payload
                  </li>
                  <li>
                    Payload type: Selection should be
                    <Highlight>“Dynamic”</Highlight>
                    {' '}
                    as we are creating a Dynamic Payload.
                  </li>
                  <li>
                    <Highlight>Visibility</Highlight>
                    : There are two type of visibilities that the user can choose from
                    <ul>
                      <li>
                        <Highlight>Public</Highlight>
                        : For the Payloads with Public visibility set, all the users across the platform can search, view and use the Payload based on their needs.
                      </li>
                      <li>
                        <Highlight>Private</Highlight>
                        : Payloads with private visibility will be visible to everyone but will only be accessible through the authentication token by the user who is creating the payload. Although other users can view the payload but will not be able to view the Token and/or JSON.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Highlight>JSON Code</Highlight>
                    : Editor to allow the user to enter the JSON that he wants to pass through the Payload. For a static payload, the user can either pass a single JSON object or an array of JSON objects.
                  </li>
                </ul>
              </li>
            </ul>
          </Content>
          <DocH5>Dynamic Payload JSON Code Example</DocH5>
          <CodeView
            height="auto"
            code={[{
              id: 1,
              name: 'Leanne Graham',
              username: 'Bret',
              email: 'Sincere@april.biz',
            },
            {
              id: 2,
              name: 'Ervin Howell',
              username: 'Antonette',
              email: 'Shanna@melissa.tv',
            },
            {
              id: 3,
              name: 'Clementine Bauch',
              username: 'Samantha',
              email: 'Nathan@yesenia.net',
            },
            {
              id: 4,
              name: 'Patricia Lebsack',
              username: 'Karianne',
              email: 'Julianne.OConner@kory.org',
            },
            {
              id: 5,
              name: 'Chelsey Dietrich',
              username: 'Kamren',
              email: 'Lucio_Hettinger@annie.ca',
            }]}
          />
        </Content>
      </Article>
    </DocsLayout>
  );
}
